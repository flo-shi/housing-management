function login(event){
    event.preventDefault();

    let url = "http://localhost/housing-management/php/api.php?flombient=login";
   /* let url = "http://localhost/housing-management/php/api.php?flombient=login";
    let url = "http://localhost/housing-management/php/api.php?type=sign-up";
    let url = "http://localhost/housing-management/php/api.php?type=add-user";
    let url = "http://localhost/housing-management/php/api.php?type=edit-user";
    let url = "http://localhost/housing-management/php/api.php?type=delete-user";
    let url = "http://localhost/housing-management/php/api.php?type=update-user";
    let url = "http://localhost/housing-management/php/api.php?type=get-users";*/

    let inputs = document.querySelectorAll('#loginForm input');
    /*$('#loginForm input');*/

    let email = inputs[0].value;
    let password = inputs[1].value;

    let loginData = {
        email: email,
        password: password
    };

    $.post(url,loginData,function (data,status){
        console.log(data)
    });



    // setTimeout(function () {
    //     document.location.href = "admin.html"
    // },300)
}