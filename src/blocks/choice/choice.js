$(document).ready(function(){

    $(".choice__radio").change(function(){
        var index = $(this).index(".choice__radio");
        $(".choice__block")
            .removeClass("active")
            .eq(index)
            .addClass("active");
    });

});
