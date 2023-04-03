//load all users
function loadAllUsers() {
    let url = "http://localhost/housing-management/php/api.php?flombient=getAllUsers";
    $.get(url, function (data) {
        let users = JSON.parse(data);
        let tbody = '';
        for (var a = 0; a < users.length; a++) {
            const user = users[a];
            tbody += `
            <tr>
                <td>${a + 1}</td>
                <td>${user.uf_name + ' ' + user.ul_name}</td>
                <td>${user.u_email}</td>
                <td>${user.u_number}</td>
                <td>
                    <span class="badge bg-success">
                        ${user.u_level}
                    </span>
                </td>
                <td>
                    <button onclick="adminLoadEditUser(${user.uid})" class="btn btn-sm btn-outline-success">
                        Edit
                    </button>
                    <button onclick="deleteUser(${user.uid})" class="btn btn-sm btn-outline-danger">
                        Delete
                    </button>
                </td>
            </tr>
           `;
        }
        $('#users-tbody').html(tbody);
    });
}

//add user
function addUser(event) {
    event.preventDefault();

    let controls = $('#add-user .form-control');
    let postData = {
        uf_name: controls[0].value,
        ul_name: controls[1].value,
        u_email: controls[2].value,
        u_number: controls[3].value,
        u_level: controls[4].value,
    }
    let url = "http://localhost/housing-management/php/api.php?flombient=addUser";
    $.post(url, postData, function (data) {
        alert("User added successfully");
        loadUsers();
    })
}

//edit user
function editUser(event) {
    event.preventDefault();

    let controls = $('#edit-user .form-control');
    let postData = {
        uid:controls[0].value,
        uf_name: controls[1].value,
        ul_name: controls[2].value,
        u_email: controls[3].value,
        u_number: controls[4].value,
        u_level: controls[5].value,
    }
    let url = "http://localhost/housing-management/php/api.php?flombient=updateUser";
    $.post(url, postData, function (data) {
        alert("User details successfully updated");
        loadUsers();
    })
}

//delete user
function deleteUser(user) {
    var confirmDeleteUser = confirm("Are you sure you want to delete this user?");
    if (confirmDeleteUser === true) {
        let url = "http://localhost/housing-management/php/api.php?flombient=deleteUser&uid=" + user;
        $.get(url, function () {
            loadUsers();
        })
    }
}