$(document).ready(function() {

    $(".js-scrollto").click(function () {
        elementClick = $(this).attr("href")
        destination = $(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1700);
        return false;
    });

    $("img, a").on("dragstart", function(event) { event.preventDefault(); });


    // Animations

    // $(".header__logo").animated("fadeInDown","fadeOutDown");
    // $(".header__button-nav").animated("fadeInLeft","fadeOutLeft");
    // $(".header__phone-block").animated("fadeInRight","fadeOutRight");
    $(".header__headers").animated("fadeIn","fadeOut");
    $(".header__title").animated("fadeInRight","fadeOutRight");
    $(".header__subtitle").animated("fadeInRight","fadeOutRight");
    $(".header__cost").animated("fadeInRight","fadeOutRight");
    $(".header__button").animated("fadeInUp","fadeOut");

    $(".advantages__item").animated("fadeInUp","fadeOutUp");

    $(".about__img--top").animated("rotateInDownLeft","fadeOut");
    $(".about__img--bottom").animated("rotateInDownLeft","fadeOut");
    $(".about__title").animated("rotateInDownRight","fadeOut");
    $(".about__text").animated("rotateInDownRight","fadeOut");

    $(".cost__title").animated("fadeInDown","fadeOutUp");
    $(".cost__text").animated("fadeInRight","fadeOutRight");
    $(".cost__button").animated("fadeInUp","fadeOut");

    $(".legal__block").animated("fadeIn","fadeOut");

    $(".choice__title").animated("fadeInDown","fadeOutUp");
    $(".choice__subtitle").animated("fadeInDown","fadeOutUp");
    $(".choice__select-box").animated("rotateInDownLeft","fadeOut");
    $(".choice__options-box").animated("fadeIn","fadeOut");
    // $(".choice__list.active").animated("fadeInUp","fadeOutDown");

    $(".evaluate__title").animated("fadeInDown","fadeOutUp");
    $(".card--phone").animated("fadeInleft","fadeOutLeft");
    $(".card--skype").animated("fadeInUp","fadeOutDown");
    $(".card--email").animated("fadeInRight","fadeOutRight");

    $(".contacts__box").animated("fadeInRight","fadeOutRight");
});


$(document).ready(function() {

    if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
        $('html').addClass('safari');
    };

    if (navigator.userAgent.indexOf('Mac OS X') != -1) {
        $("html").addClass("macos");
    } else {
        $("html").addClass("pc");
    };

    // Get IE or Edge browser version
    var version = detectIE();

    if (version !== false) {
        if (version >= 12) {
            $('html').addClass('edge');
            $('html').addClass('edge'+ version);
        } else {
            $('html').addClass('ie');
            $('html').addClass('ie'+ version);
        }
    };

    /**
     * detect IE
     * returns version of IE or false, if browser is not Internet Explorer
     */
    function detectIE() {
      var ua = window.navigator.userAgent;

      // Test values; Uncomment to check result …

      // IE 10
      // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

      // IE 11
      // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

      // Edge 12 (Spartan)
      // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

      // Edge 13
      // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

      var msie = ua.indexOf('MSIE ');
      if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
      }

      var trident = ua.indexOf('Trident/');
      if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
      }

      var edge = ua.indexOf('Edge/');
      if (edge > 0) {
        // Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
      }

      // other browser
      return false;
    }

});

$('.browsehappy').click(function() {
    $(this).slideUp();
});

$(document).ready(function(){

    var nav = $(".nav"),
        button = $(".button-nav"),
        header = $(".header");

    function toggleNav(){
        if (nav.hasClass("on")){
            nav.removeClass("on");
            button.removeClass("on");
            header.removeClass("on");
        } else {
            nav.addClass("on");
            button.addClass("on");
            header.addClass("on");
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

$(document).ready(function(){

    $(".choice__radio").change(function(){
        var index = $(this).index(".choice__radio");
        $(".choice__list")
            .removeClass("active")
            .eq(index)
            .addClass("active");
    });

});

(function () {

    var latitude = 55.7529915,
        longitude = 37.6195847,
        map,
        styleArray = [{"featureType":"all","elementType":"all","stylers":[{"lightness":"29"},{"invert_lightness":true},{"hue":"#008fff"},{"saturation":"-73"}]},{"featureType":"all","elementType":"labels","stylers":[{"saturation":"-72"}]},{"featureType":"administrative","elementType":"all","stylers":[{"lightness":"32"},{"weight":"0.42"}]},{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":"-53"},{"saturation":"-66"}]},{"featureType":"landscape","elementType":"all","stylers":[{"lightness":"-86"},{"gamma":"1.13"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"hue":"#006dff"},{"lightness":"4"},{"gamma":"1.44"},{"saturation":"-67"}]},{"featureType":"landscape","elementType":"geometry.stroke","stylers":[{"lightness":"5"}]},{"featureType":"landscape","elementType":"labels.text.fill","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"weight":"0.84"},{"gamma":"0.5"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"weight":"0.79"},{"gamma":"0.5"}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"simplified"},{"lightness":"-78"},{"saturation":"-91"}]},{"featureType":"road","elementType":"labels.text","stylers":[{"color":"#ffffff"},{"lightness":"-69"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"lightness":"5"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"lightness":"10"},{"gamma":"1"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"lightness":"10"},{"saturation":"-100"}]},{"featureType":"transit","elementType":"all","stylers":[{"lightness":"-35"}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"saturation":"-97"},{"lightness":"-14"}]}];
    function initialize() {
        var width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth,
            longitudeCenter;
        if (width >= 992) {
            longitudeCenter = longitude + 0.0090;
        } else {
            longitudeCenter = longitude;
        }
        var mapOptions = {
            zoom: 16,
            center: new google.maps.LatLng(latitude, longitudeCenter),
            scrollwheel: false,
            draggable: true,
            zoomControl: true,
            streetViewControl: false,
            styles: styleArray,
        };
        var stylez = [{
            featureType: "all",
            elementType: "all"
        }];
        var image = 'assets/img/map-marker.png';
        map = new google.maps.Map(document.getElementById('map'), mapOptions);
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(latitude,longitude),
            map: map,
            icon: image
        });
    }
    google.maps.event.addDomListener(window, 'load', initialize);


}());

$(document).ready(function(){

    $('.js-phone-field').mask('+7 (999) 999-99-99');

    // FORM COST

    var validatorFormCost = $("#form-cost").validate({
        rules: {
            name: {required: true},
            phone: {required: true},
            email: {required: true, email: true}
        },
        messages: {
            name: {required: "Это поле должно быть заполнено"},
            phone: {required: "Это поле должно быть заполнено"},
            email: {required: "Это поле должно быть заполнено", email: "Неправильный формат email"}
        },
        focusInvalid: false,
        errorClass: "invalid-field",
        submitHandler: function(form) {
            form.preventDefault;
            $.ajax({
                type: "POST",
                url: $(form).attr("action"),
                data: $(form).serialize()
            }).done(function() {
                $.magnificPopup.open({
                    items:{
                        src:$('#popup-thankyou')
                    },
                    type:'inline',
                    midClick: true,
                    removalDelay: 500,
                    mainClass: 'mfp-zoom-in',
                    overflowY: 'scroll',
                    fixedContentPos: false
                });
            });
            return false;
        }
    });

    $("#form-cost input" ).focus(function() {
        $(this).next(".invalid-field").addClass("hidden");
    });

    $("#form-cost button").click(function (e) {
        $("#form-cost .invalid-field").removeClass("hidden").css({"display":""});
        validatorFormCost.resetForm();
        return true;
    });


    // FORM ASK

    var validatorFormAsk = $("#form-ask").validate({
        rules: {
            name: {required: true},
            phone: {required: true},
            email: {required: true, email: true},
            message: {required: true}
        },
        messages: {
            name: {required: "Это поле должно быть заполнено"},
            phone: {required: "Это поле должно быть заполнено"},
            email: {required: "Это поле должно быть заполнено", email: "Неправильный формат email"},
            message: {required: "Это поле должно быть заполнено"}
        },
        focusInvalid: false,
        errorClass: "invalid-field",
        submitHandler: function(form) {
            form.preventDefault;
            $.ajax({
                type: "POST",
                url: $(form).attr("action"),
                data: $(form).serialize()
            }).done(function() {
                $.magnificPopup.open({
                    items:{
                        src:$('#popup-thankyou')
                    },
                    type:'inline',
                    midClick: true,
                    removalDelay: 500,
                    mainClass: 'mfp-zoom-in',
                    overflowY: 'scroll',
                    fixedContentPos: false
                });
            });
            return false;
        }
    });

    $("#form-ask input" ).focus(function() {
        $(this).next(".invalid-field").addClass("hidden");
    });

    $("#form-ask button").click(function (e) {
        $("#form-ask .invalid-field").removeClass("hidden").css({"display":""});
        validatorFormAsk.resetForm();
        return true;
    });


    // FORM CALLBACK

    var validatorFormCallback = $("#form-callback").validate({
        rules: {
            name: {required: true},
            phone: {required: true}
        },
        messages: {
            name: {required: "Это поле должно быть заполнено"},
            phone: {required: "Это поле должно быть заполнено"}
        },
        focusInvalid: false,
        errorClass: "invalid-field",
        submitHandler: function(form) {
            form.preventDefault;
            $.ajax({
                type: "POST",
                url: $(form).attr("action"),
                data: $(form).serialize()
            }).done(function() {
                $.magnificPopup.open({
                    items:{
                        src:$('#popup-thankyou')
                    },
                    type:'inline',
                    midClick: true,
                    removalDelay: 500,
                    mainClass: 'mfp-zoom-in',
                    overflowY: 'scroll',
                    fixedContentPos: false
                });
            });
            return false;
        }
    });

    $("#form-callback input" ).focus(function() {
        $(this).next(".invalid-field").addClass("hidden");
    });

    $("#form-callback button").click(function (e) {
        $("#form-callback .invalid-field").removeClass("hidden").css({"display":""});
        validatorFormCallback.resetForm();
        return true;
    });

});

$(document).ready(function(){

    $('.js-gallery').magnificPopup({
        type: 'image',
        fixedContentPos: true,
        gallery:{
            enabled:true,
            tPrev: 'Назад',
            tNext: 'Далее'
        }
    });


});

$(document).ready(function(){

    $('.js-popup').magnificPopup({
        type:'inline',
        midClick: true,
        removalDelay: 500,
        mainClass: 'mfp-zoom-in',
        overflowY: 'scroll',
        fixedContentPos: true
    });

});

$(document).ready(function(){

    $('.js-popup-privacy').magnificPopup({
        type:'inline',
        midClick: true,
        removalDelay: 500,
        mainClass: 'mfp-zoom-in',
        overflowY: 'scroll',
        fixedContentPos: true
    });

});

$(document).ready(function(){

    $(".js-close-button").click(function (e) {
        e.preventDefault();
        $.magnificPopup.close();
        return false;
    });


});

$(document).ready(function(){

    $(".textarea__textarea")
        .focus(function() {
            $(this).prev(".textarea__placeholder").fadeOut(300);
        })
        .blur(function() {
            if ($(this).val().length == 0) {
                $(this).prev(".textarea__placeholder").fadeIn(300);
            }
        });

    $(".textarea__placeholder").click(function(){
        $(this).fadeOut(300);
        $(this).next(".textarea__textarea").focus();
    })

});
