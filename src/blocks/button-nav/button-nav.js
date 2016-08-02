$(document).ready(function(){

    var nav = $(".nav"),
        button = $(".button-nav"),
        header = $(".header");

    function toggleNav(){
        if (nav.hasClass("on")){
            nav.removeClass("on").slideUp(300);
            button.removeClass("on");
            // header.removeClass("on");
        } else {
            nav.addClass("on").slideDown(300);
            button.addClass("on");
            // header.addClass("on");
         };
    };

    button.click(function(e){
        e.preventDefault();
        toggleNav();
        return false;
    });

    $(document).click(function(e){
        var result = true;
        if (header.hasClass("on")){
            e.preventDefault();
            toggleNav();
            result = false;
        };
        return result;
    });

    $(".nav__link").click(function(){
        toggleNav();
        return true;
    });

})
