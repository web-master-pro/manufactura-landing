$(document).ready(function(){

    $(".choice__radio").change(function(){
        var index = $(this).index(".choice__radio");
        $(".choice__list")
            .removeClass("active")
            .eq(index)
            .addClass("active");
    });

});
