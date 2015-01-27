var $;
$(document).ready(function () {
    'use strict';
    var content = '';

    $('main a').attr({
        'title': 'Title modificado por jQuery',
        'href': 'http://www.desarrolloweb.com',
        'style': 'color: #f80'
    });

    $("main a").each(function (i) {
        var titulo;
        titulo = $(this).attr("title");
        content += "<li>Atributo title del enlace " + i + ": " + titulo + "</li>";
    });

    $("#info").html("<ul>" + content + "</ul>");

});