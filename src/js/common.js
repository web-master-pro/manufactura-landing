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
