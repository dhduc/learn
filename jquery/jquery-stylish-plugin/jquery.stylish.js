(function ($) {
    $.fn.stylish = function (options) {
        var defaults = {
            text: 'Text',
            color: '#fff',
            font: null,
            complete: null,
        };
        var settings = $.extend({}, defaults, options);

        var obj  = this;

        obj.init = function() {
            obj.text(settings.text);
            if ( settings.color ) {
               obj.css( 'color', settings.color );
            }
            if ( settings.fontStyle ) {
                obj.css( 'font-style', settings.fontStyle );
            }
            obj.setCallback();
        };
        
        obj.setCallback = function() {
            if ($.isFunction(settings.before)) {
                settings.before.call(obj);
            }

            if ($.isFunction(settings.complete)) {
                settings.complete.call(obj);
            }
        };

        obj.init();
    };
}(jQuery));