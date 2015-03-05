var $, jQuery;

$(document).ready(function () {
    'use strict';
    var distance, duration, locked = false, newSection, fromPosition, toPosition,
        oldSection, orderNew, orderOld, position, randx, randy, slide, maxHeight,
        maxWidth, viewportWidth;

    // jQuery UI tabs
    $("#cv").tabs();

    // jQuery UI datepicker
    $("#fecha_inicio").datepicker({ dateFormat: "dd/mm/yy" });
    $("#fecha_fin").datepicker({ dateFormat: "dd/mm/yy" });

    // Sections order
    oldSection = '#inicio';
    if (oldSection === '#inicio') { orderOld = 1; }
    if (oldSection === '#trabajos') { orderOld = 2; }
    if (oldSection === '#sobremi') { orderOld = 3; }
    if (oldSection === '#contacto') { orderOld = 4; }

    maxHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) * 0.5;
    maxWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) * 0.7;

    $("#cloud span").each(function () {

        randx = Math.round(Math.random() * maxWidth);
        randy = Math.round(Math.random() * maxHeight);

        $(this).css({
            'position': 'absolute',
            'left': randx,
            'top': randy
        });

    });

    $("#cloud span").hover(function (e) {

        var oldx, oldy;
        maxHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) * 0.5;
        maxWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) * 0.7;

        console.log(e);
        randx = Math.round(Math.random() * maxWidth);
        randy = Math.round(Math.random() * maxHeight);

        oldx = $(this).css('left');
        oldy = $(this).css('top');

        $(e.target).css({
            'position': 'absolute'
        }).animate({
            color: "#efefef",
            left: randx,
            top: randy
        }, 1000, function () {
            $(this).animate({
                fontSize: '48px',
                left: oldx,
                top: oldy
            }, 1000);
        });
    }, function (e) {
        $(e.target).animate({
            color: "#95afba"
        }, 1000, function () {
            $(this).animate({
                fontSize: '24px'
            }, 1000);
        });
    });

    // Navigation links click event
    $('nav a').bind('click', function (e) {

        // Prevent the link action
        e.preventDefault();

        if (locked !== true) {

            // Stop the home animations
            $("#cloud span").stop(true, true);

            // Get the block link
            if ((e.target.id.substring(0, 5) === 'link-') && (locked === false)) {

                newSection = '#' + e.target.id.substring(5);

                // Get the order
                if (newSection === '#inicio') {
                    position = 0;
                    orderNew = 1;
                } else if (newSection === '#trabajos') {
                    position = 1;
                    orderNew = 2;
                } else if (newSection === '#sobremi') {
                    position = 2;
                    orderNew = 3;
                } else if (newSection === '#contacto') {
                    position = 3;
                    orderNew = 4;
                }

                // Get viewport width
                viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
                distance = viewportWidth * 3;

                // Get the sliding direction
                if (orderNew < orderOld) {
                    slide = true;
                    toPosition = distance + 'px';
                    fromPosition = '-' + distance + 'px';
                    $('#page').css({
                        'background-position': Math.round(orderNew - position * viewportWidth / 150) + '% 50%'
                    });
                } else if (orderNew > orderOld) {
                    slide = true;
                    toPosition = '-' + distance + 'px';
                    fromPosition = distance + 'px';
                    $('#page').css({
                        'background-position': Math.round(orderNew - position * viewportWidth / 150) + '% 50%'
                    });
                } else {
                    // Currect section button was clicked
                    slide = false;
                }

                // Change active class in nav link
                $("nav li").removeClass('active');
                $(e.target).addClass('active');

                if (slide === true) {
                    duration = 400;
                    var options = {
                        oldSection: oldSection,
                        newSection: newSection,
                        fromPosition: fromPosition,
                        toPosition: toPosition,
                        duration: duration
                    };

                    $(e.target).slide(options);

                    // Lock input for 1 second
                    locked = true;
                    setTimeout(function () {
                        locked = false;
                    }, duration + 1 + 1);

                    orderOld = orderNew;
                    oldSection = newSection;
                }
            }
        }
    });
});