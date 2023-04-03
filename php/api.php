<?php
include("./functions.php");



//enable route api
// all ajax requests should have type configured
if ( isset($_GET['flombient']) === true) {

    $requestType = $_GET['flombient'];

    //request sign-up
    if ($requestType == 'sign-up') {
        $uf_name = $_POST['uf_name'];
        $ul_name = $_POST['ul_name'];
        $u_email = $_POST['u_email'];
        $u_number = $_POST['u_number'];
        $password = $_POST['password'];

        signUp($uf_name, $ul_name, $u_email, $u_number,$password);
    }

    //request login
    if($requestType == 'login'){
        $email = $_POST['email'];
        $password = $_POST['password'];
//        $hashedPassword =password_hash($password, PASSWORD_DEFAULT);
//        echo $hashedPassword;
        login($email, $password);
    }
    //get logged in user
    if($requestType == 'loggedInUser'){
        getLoggedInUser();
    }

    //get dashboard data
    if($requestType == 'dashboardData'){
        getDashboardData();
    }

    //get all users
    if($requestType == 'getAllUsers'){
        getAllUsers();
    }

    //get user by id
    if($requestType == 'getSingeUser'){
        $uid = $_GET['uid'];
        getSingeUser($uid);
    }

    //delete user
    if($requestType == 'deleteUser'){
        $uid = $_GET['uid'];
        deleteSingleUser($uid);
    }

    //add user
    if($requestType == 'addUser'){
        $uf_name = $_POST['uf_name'];
        $ul_name = $_POST['ul_name'];
        $u_email = $_POST['u_email'];
        $u_number = $_POST['u_number'];
        $u_level = $_POST['u_level'];

        addUser($uf_name, $ul_name, $u_email, $u_number,$u_level);
    }

    //update user
    if($requestType == 'updateUser'){
        $uid = $_POST['uid'];
        $uf_name = $_POST['uf_name'];
        $ul_name = $_POST['ul_name'];
        $u_email = $_POST['u_email'];
        $u_number = $_POST['u_number'];
        $u_level = $_POST['u_level'];

        updateUser($uid,$uf_name, $ul_name, $u_email, $u_number,$u_level);
    }
//    ===========================================
//    Bed sitters has 0 p_beds value
//    ===========================================
}
/**
 * .get => return, 2 packets $_GET['users']
 * .post => receive some data. $_POST['username']
 * .put => update some value $_PUT['username']
 * .patch => update some value $_PATCH['username']
 * .delete => delete some value $_DELETE['user']
 */

?>