<?php
include("./common.php");
include("./connect.php");



function login($email, $password)
{
    //get connection from connect.php file.
    $con = connect();

    $hashedPassword =$password;//password_hash($password, PASSWORD_DEFAULT);
    //create sql to attempt login
    $sql = 'SELECT `uid`, `uf_name`, `ul_name`, `u_email`, `u_number`, `u_level` FROM `users` WHERE `u_email` = "' . $email . '" AND `password` = "' . $hashedPassword . '"';


    //get result
    $result = $con->query($sql);

    //get rows
    $rows = $result->num_rows;

    //setup response
    $response = "";
    //username and password failed if rows length = 0
    if ($rows === 0) {
        $response->title = "login failed";
        $response->message = 'invalid username and password';
    } else {
        //create session
        $user = "";
        while ($row = $result->fetch_assoc()) {
//             $user = json_encode($row);
        }

        $response->title = "login success";
//        $response->user = $user;
        $response->message = "login success";
    }

    echo json_encode($response);

}

function signUp($uf_name, $ul_name, $u_email, $u_number, $password){
    $u_level = "client";

    $hashedPassword =$password;//password_hash($password, PASSWORD_DEFAULT);
    $connect = connect();

    //create sql to add user;
    $sql = "INSERT INTO `users`(
    `uf_name`,
    `ul_name`,
    `u_email`,
    `u_number`,
    `u_level`,
    `password`
 )
 VALUES('".$uf_name."', '".$ul_name."', '".$u_email."', '".$u_number."', '".$u_level."', '".$hashedPassword."')";


    //check if user email exists
    $userEmailExists = checkIfUserEmailExists($u_email);

    $response = "";
    if($userEmailExists === true){
        $response->title="signup error";
        $response->message=`email {$u_email} already exists!`;
    }
    else {
        $saveToDb = $connect->query($sql);

        if($saveToDb === true){
            $response->title = "Signup success";
            $response->message = "account has been created successfully. proceed to login";
        }
    }

    //return response
    echo json_encode($response);

}

function checkIfUserEmailExists($email){
    //return value
    $userEmailExist = false;

    //create sql
    $sql = "SELECT * FROM `users` WHERE `u_email` = '".$email."'";

    //create connection
    $connection = connect();

    //execute query and get results
    $results = $connection->query($sql);

    //check if results is empty
    if($results->num_rows == 0) {
        $userEmailExist = false;
    } else {
        $userEmailExist =true;
    }
    return $userEmailExist;
}

