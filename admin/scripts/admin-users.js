//load all users


//add user
function addUser(event){
    event.preventDefault();

    //jquery ajax.
    setTimeout(function () {
        alert("User added successfully");
        loadUsers();
    }, 1500)
}

//edit user
function editUser(event){
    event.preventDefault();

    //jquery ajax.
    setTimeout(function () {
        alert("User details successfully updated");
        loadUsers();
    }, 1500)
}
//delete user
function deleteUser(event){
    if (event){
        
    }
    var confirmDeleteUser = confirm("Are you sure you want to delete this user?");
    if(confirmDeleteUser === true) {
        setTimeout(function () {
            alert("User deleted successfully");
        },1500);
    }
}