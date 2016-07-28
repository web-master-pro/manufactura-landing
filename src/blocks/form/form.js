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
