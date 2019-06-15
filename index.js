const fs = require("fs");
const Joi = require("joi");
const cors = require("cors");
const express = require("express");
const app = express();
app.use(express.json());
app.use(cors());

const people = require("./people.json");

/* Request: použití metody GET, URL adresy /:
   Response: HTML stránka  */
app.get("/", (req, res) => {
  //res.send(client/hackers.html);
  res.sendFile(path.join(__dirname, './client', 'hackers.html'));
});

/* Request: použití metody GET, URL adresy /hackers:
   Response: výpis všech filmů ve formátu JSON  */
app.get("/hackers", (req, res) => {
  res.send(people);
});

/* Request: použití metody GET, URL adresy /hackers, parametr id
   Response: výpis konkrétního filmu podle zadaného id ve formátu JSON  */
app.get("/hackers/:id", (req, res) => {
  const id = Number(req.params.id);
  const guy = people.find(guy => guy.id === id);
  if (guy) {
    res.send(guy);
  } else {
    res.status(404).send("Osoba nebyla nalezena.");
  }
});

/* Request: použití metody POST, URL adresy /hackers
   Response: výpis nového filmu   */
app.post("/hackers", (req, res) => {
  const { error } = validateguy(req.body);
  if (error) {
    res.status(400).send(error);
  } else {
    const guy = {
      id: people.length !== 0 ? people[people.length - 1].id + 1 : 1,
      name: req.body.name,
      what: req.body.what,
      now: req.body.now,
    };
    people.push(guy);
    res.send(guy);
    writeJSON(people, "people.json");
  }
});

app.put("/hackers/:id", (req, res) => {
  const id = Number(req.params.id);
  const guy = people.find(guy => guy.id === id);
  if (!guy) {
    res.status(404).send("Osoba nebyla nalezena.");
    return;
  }
  const { error } = validateguy(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
  } else {
    guy.name = req.body.name;
    guy.what = req.body.what;
    guy.now = req.body.now;
    res.send(guy);
    writeJSON(people, "people.json");
  }
});

app.delete("/hackers/:id", (req, res) => {
  const id = Number(req.params.id);
  const guy = people.find(guy => guy.id === id);
  if (!guy) {
    res.status(404).send("Osoba nebyla nalezena.");
  } else {
    const index = people.indexOf(guy);
    people.splice(index, 1);
    res.send(guy);
    writeJSON(people, "people.json");
  }
});

app.listen(3000, () => console.log("Listening on port 3000..."));

function validateguy(guy) {
  const schema = {
    name: Joi.string()
      .min(2)
      .required(),
    what: Joi.string(),
    now: Joi.string()
  };
  return Joi.validate(guy, schema);
}

function writeJSON(jsonData, pathToFile) {
  let data = JSON.stringify(jsonData, null, 2);
  fs.writeFile(pathToFile, data, err => {
    if (err) {
      throw err;
    } else {
      console.log("Data written to file");
    }
  });
}
