$(document).ready(function() {
    $('#phone').mask('(00) 00000-0000');

    $('form').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: false, minlength: 15
            },
            message: {
                required: true
            },
        },
        messages: {
            name: "Please enter your name.",
            email: 'Please enter a valid email address.',
            message: 'Please enter your message.',
            phone: 'Please enter your complete phone number.'
        }        
    })
});
