$(function () {
    $('#about').on('click', function () {
        $('#tekst h3').text(source[0].title);
        $('#tekst div').html(source[0].text);
    });
    $('#history').on('click', function () {
        $('#tekst h3').text(source[1].title);
        $('#tekst div').html(source[1].text);
    });
    $('#types').on('click', function () {
        $('#tekst h3').text(source[2].title);
        $('#tekst div').html(source[2].text);
    });
    $('#methods').on('click', function () {
        $('#tekst h3').text(source[3].title);
        $('#tekst div').html(source[3].text);
    });
    $('#defence').on('click', function () {
        $('#tekst h3').text(source[4].title);
        $('#tekst div').html(source[4].text);
    });

    function zmena(i){
        $('#news article h4').text(noviny[i].titulek);
        $('#news article small').text(noviny[i].datum);
        $('#news article p').text(noviny[i].text);
    };
    var a = 0;
    zmena(a);
    $('#news .next').on('click', function(){
        a < noviny.length - 1 ? a++ : a = 0;
        zmena(a);
    });
    $('#news .prev').on('click', function(){
        a > 0 ? a-- : a = noviny.length - 1;
        zmena(a);
    });

    var cpu = document.getElementById('path4530').id;
    var cmos = document.getElementById('path4532').id;
    var northb = document.getElementById('path4534').id;
    var mem = document.getElementById('path4536').id;
    var southb = document.getElementById('path4538').id;
    var sata = document.getElementById('path4540').id;
    var com = document.getElementById('path4542').id;
    var vga = document.getElementById('path4544').id;
    var condens = document.getElementById('path4546').id;
    var lanusb = document.getElementById('path4548').id;
    var pci = document.getElementById('path4550').id;
    var power = document.getElementById('path4552').id;

    $('#tekst div path').on('click', function(){
        $('path').attr("fill","rgba(255,0,0,0.2)");
        $(this).attr("fill","rgba(255,0,0,1)");
        switch (i) {
            case $(this).id == cpu:
                i = 0;
            case $(this).id == cmos:
                i = 1;
            case $(this).id == northb:
                i = 2;
            case $(this).id == mem:
                i = 3;
            case $(this).id == southb:
                i = 4;
            case $(this).id == sata:
                i = 5;
            case $(this).id == com:
                i = 6;
            case $(this).id == vga:
                i = 7;
            case $(this).id == condens:
                i = 8;
            case $(this).id == lanusb:
                i = 9;
            case $(this).id == pci:
                i = 10;
            case $(this).id == power:
                i = 11;
        }
        $('.headingthing').text(mb[i].nazev);
        $('.smallthings').text(mb[i].ucel);
    });

    $("#tekst div path").on("mouseenter", function() {   
        $("path")
          .attr("fill", "#ccc")
          .attr("stroke", "white")
          .attr("stroke-width", "0.5");    
        $(this)
          .attr("fill", "yellow")
          .attr("stroke", "red")
          .attr("stroke-width", "3");
        $(this).parent().append($(this));
    });
});
