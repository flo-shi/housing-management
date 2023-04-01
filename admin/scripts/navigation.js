$(document).ready(function(){
    //load login page by default.
    loadLogin();

});

//functions to help load sections
function loadLogin(){
    $('#section-holder').load("widgets/login.html");
}

function loadForgotPassword(){
    $('#section-holder').load("widgets/forgot-password.html");
}

