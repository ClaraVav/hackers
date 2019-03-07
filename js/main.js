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
});