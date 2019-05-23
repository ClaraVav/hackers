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

    $('#tekst div div path').on('click', function(){
        var i;
        switch ($(this).attr('id')) {
            case "path4530":
                i = 0;
                break;
            case "path4532":
                i = 1;
                break;
            case "path4534":
                i = 2;
                break;
            case "path4536":
                i = 3;
                break;
            case "path4538":
                i = 4;
                break;
            case "path4540":
                i = 5;
                break;
            case "path4542":
                i = 6;
                break;
            case "path4544":
                i = 7;
                break;
            case "path4546":
                i = 8;
                break;
            case "path4548":
                i = 9;
                break;
            case "path4550":
                i = 10;
                break;
            default:
                i = 11;
        }
        $('.headingthing').text(mb[i].nazev);
        $('.smallthings').text(mb[i].ucel);
    });
});
