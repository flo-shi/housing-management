$(document).ready(function(){
    // loadDashboard();
    loadUsers();
});

function loadDashboard(){
    $('#main-section').load('widgets/dashboard.html');
}

function loadUsers(){
    $('#main-section').load('widgets/users/users.html');
}

function loadProperty(){
    $('#main-section').load('widgets/property.html');
}

function loadCustomerRequests(){
    $('#main-section').load('widgets/customer-requests.html');
}

function adminLoadAddUser(){
    $('#main-section').load('widgets/users/admin-add-user.html');
}

function adminLoadEditUser(){
    $('#main-section').load('widgets/users/admin-edit-user.html');
}
