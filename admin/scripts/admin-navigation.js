$(document).ready(function () {
  // loadDashboard();
  loadProperty();
});

function loadDashboard() {
  $("#main-section").load("widgets/dashboard.html");
}

function loadUsers() {
  $("#main-section").load("widgets/users/users.html");
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

function adminLoadEditUser() {
  $("#main-section").load("widgets/users/admin-edit-user.html");
}
//----------------------------------
//  property load functions
//----------------------------------

function adminLoadAddProerty() {
  $("#main-section").load("widgets/properties/admin-add-property.html");
}

function adminLoadEditProerty() {
  $("#main-section").load("widgets/properties/admin-edit-property.html");
}
