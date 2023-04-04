$(document).ready(function () {
    // if (localStorage.getItem('loggedInUser') !== null) {
        getLoggedInUser();
    // } else {
    //     document.location.href = "./";
    // }
});

//------------------------------
//admin homepage functions
//------------------------------

function getLoggedInUser() {
    let url = 'http://localhost/housing-management/php/api.php?flombient=loggedInUser';
    $.get(url, function (loggedInUser) {
        //set name and email
        let response = JSON.parse(loggedInUser);
        localStorage.setItem("loggedInUser", loggedInUser);
        $('#admin-name b').html(response.uf_name + " " + response.ul_name);
        $('#admin-email b').html(response.u_email);
        loadDashboard();
    });
}


function loadDashboard() {
    let url = 'http://localhost/housing-management/php/api.php?flombient=dashboardData';
    $.get(url, function (data) {
        $("#main-section").load("widgets/dashboard.html", function () {
            let user = JSON.parse(localStorage.getItem('loggedInUser'))
            $('#welcome-user').html(user.uf_name);
            let response = JSON.parse(data);
            $('#users').html(response.users);
            $('#properties').html(response.properties);
            $('#requests').html(response.requests);
        });

    });
}

function loadUsers() {
    $("#main-section").load("widgets/users/users.html", function (){
        loadAllUsers();
    });
}

//----------------------------------
//  property load functions
//----------------------------------
function loadProperty() {
    $("#main-section").load("widgets/properties/property.html");
}

function loadCustomerRequests() {
    $("#main-section").load("widgets/customer-requests.html");
}

//----------------------------------
//  users load functions
//----------------------------------
function adminLoadAddUser() {
    $("#main-section").load("widgets/users/admin-add-user.html");
}

function adminLoadEditUser(user) {
    let url = "http://localhost/housing-management/php/api.php?flombient=getSingeUser&uid="+user;
    $.get(url,function(userData){
        $("#main-section").load("widgets/users/admin-edit-user.html",function (){
            let user = JSON.parse(userData);
            let controls = document.querySelectorAll('#edit-user input');
            let select = document.querySelector('#edit-user select');
            controls[0].value = user.uid;
            controls[1].value = user.uf_name;
            controls[2].value = user.ul_name;
            controls[3].value = user.u_email;
            controls[4].value = user.u_number;
            select.value = user.u_level;
        });
    });

}

//----------------------------------
//  property load functions
//----------------------------------

function adminLoadAddProerty() {
    let url = "http://localhost/housing-management/php/api.php?flombient=getAllUsers";
    $.get(url,function(users){
        $("#main-section").load("widgets/properties/admin-add-property.html",function (){
            let select = '';
            JSON.parse(users).forEach((user)=>{
                select+="<option value='user.uid'>"+user.uf_name+" "+user.ul_name +"</option>";
            });
            document.querySelector('#add-property select').innerHTML = select;
        });
    })
}

function adminLoadEditProerty() {
    $("#main-section").load("widgets/properties/admin-edit-property.html");
}
