var $, jQuery, showCounter;
$(document).ready(function () {
    'use strict';

    $(".parpadear").parpadea();

    $("textarea").cuentaCaracteres();

});

jQuery.fn.parpadea = function () {
    'use strict';
    this.each(function () {
        var elem = jQuery(this);
        elem.fadeOut(500, function () {
            elem.fadeIn(500);
        });
    });
    return this;
};

jQuery.fn.cuentaCaracteres = function () {
    'use strict';
    this.each(function () {
        var counter, elem;
        elem = jQuery(this);
        counter = $('<p>Caracteres: ' + elem.prop("value").length + '</p>');
        elem.after(counter);

        elem.on('keypress', function () {
            counter.text('Caracteres: ' + elem.prop("value").length);
        });
    });
    return this;
};