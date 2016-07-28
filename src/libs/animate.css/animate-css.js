//     Animate CSS + WayPoints javaScript Plugin
//     Example: $(".element").animated("fadeIn","fadeOut");
//     Copyright (c) 2016 Alexey Dobrov (web-master-pro.ru)
//     Released under the MIT license

(function($) {
    $.fn.animated = function(inEffect, outEffect) {
        if ($(window).width() > 768) {
            $(this)
                .css("opacity", "0")
                .addClass("animated")
                .waypoint(function(dir) {
                    if (dir == "down") {
                        // console.log("вниз - появление");
                        $(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
                    }
                }, {
                    offset: "90%"
                })
                .waypoint(function(dir) {
                    if (dir == "up") {
                        // console.log("вверх -скрытие");
                        $(this).removeClass(inEffect).addClass(outEffect);
                    }
                }, {
                    offset: "100%"
                })
                .waypoint(function(dir) {
                    if (dir == "down") {
                        // console.log("вниз - скрытие");
                        $(this).removeClass(inEffect).addClass(outEffect);
                    }
                }, {
                    offset: "-100%"//-$(this).outerHeight() * 2
                })
                .waypoint(function(dir) {
                    if (dir == "up") {
                        // console.log("вверх - появление");
                        $(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
                    }
                }, {
                    offset: "0"
                })
        };
    };
})(jQuery);

