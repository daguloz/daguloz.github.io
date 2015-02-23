jQuery.fn.slide = function (options) {

    var config = {
        duration: 400
    }

    jQuery.extend(config, options);
    
    this.each(function() {

        // Hide old section
        $(config.oldSection).css({
            'position': 'absolute'
        })
        $(config.oldSection).animate({
            'left': config.toPosition
        }, {
            'duration': config.duration,
            'complete': function () {
                $(this).css({
                    'display': 'none',
                });
            }
        });

        // Show new section
        $(config.newSection).css({
            'display': 'inline-block',
            'left': config.fromPosition
        }).animate({
            'left':  '0px'
        }, {
            'duration': config.duration,
            'complete': function () {
                $(config.newSection).css({
                    'position': 'relative'
                });
            }
        });

    });

    return this;
};