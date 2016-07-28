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
