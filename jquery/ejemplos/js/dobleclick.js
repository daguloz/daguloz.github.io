var $;
var numClics = 0;
var numDobleClics = 0;

function info() {
    'use strict';
    $("#info").html("Clicks " + numClics + "<br/>Doble Clicks " + numDobleClics);
}

$(document).ready(function () {
    'use strict';

    $("#micapa").dblclick(function (e) {
        numDobleClics += 1;
        info();
    });
    $("#micapa").click(function (e) {
        numClics += 1;
        info();
    });

});

