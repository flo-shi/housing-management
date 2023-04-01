$(document).ready(function(){
    loadDashboard()
});

function loadDashboard(){
    $('#main-section').load('widgets/dashboard.html')
}

function loadUsers(){
    $('#main-section').load('widgets/users.html');
}

function loadProperty(){
    $('#main-section').load('widgets/property.html');
}

function loadCustomerRequests(){
    $('#main-section').load('widgets/customer-requests.html');
}
