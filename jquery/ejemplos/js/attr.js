var $;
$(document).ready(function () {
    'use strict';
    var content = '';

    $("main a").each(function (i) {
        var titulo;
        titulo = $(this).attr("title");
        content += "<li>Atributo title del enlace " + i + ": " + titulo + "</li>";
    });

    $("#info").html("<ul>" + content + "</ul>");

});