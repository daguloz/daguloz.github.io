var $, jQuery, showCounter, updateCounter;
$(document).ready(function () {
    'use strict';

    $(".parpadear").parpadea();

    $("textarea").cuentaCaracteres();
    //$("div").cuentaCaracteres();
    console.log('hola');
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
        elem.data('contador', counter);

        elem.on('keyup', updateCounter);
    });
    return this;
};

updateCounter = function () {
    'use strict';
    var counter = $(this).data('contador');
    counter.text('Caracteres: ' + $(this).prop("value").length);
};

jQuery.fn.creaTip = function (text, options) {
    'use strict';
    var config = {
        speed: 500,
        animationShow: {width: "show"},
        animationHide: {opacity: "hide"},
        tipClass: "tip"
    };
    jQuery.extend(config, options);

    this.each(function () {
        var elem, tip;
        
        elem = jQuery(this);
        tip = jQuery('<div class="' + config.tipClass + '">' + text + '</div>')

        jQuery(document.body).append(tip);
        elem.data('tipLayer', tip);

        elem.on('mouseenter', function (e) {

        });
    });
}