<?php
include("./connect.php");
include("./auth.php");

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

}
/**
 * .get => return, 2 packets $_GET['users']
 * .post => receive some data. $_POST['username']
 * .put => update some value $_PUT['username']
 * .patch => update some value $_PATCH['username']
 * .delete => delete some value $_DELETE['user']
 */

?>