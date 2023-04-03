function login(event){
    event.preventDefault();
    let url = "http://localhost/housing-management/php/api.php?flombient=login";

    let inputs = document.querySelectorAll('#loginForm input');
    /*$('#loginForm input');*/

    let email = inputs[0].value;
    let password = inputs[1].value;

    let loginData = {
        email: email,
        password: password
    };

    $.post(url,loginData,function (data){
        //response from backend
        document.location.href = "admin.html"
    });
}