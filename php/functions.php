<?php
session_start();
error_reporting(0);
include("./connect.php");

function login($email, $password){
    //get connection from connect.php file.
    $con = connect();

    $hashedPassword =$password;//password_hash($password, PASSWORD_DEFAULT);
    //create sql to attempt login
    $sql = 'SELECT `uid`, `uf_name`, `ul_name`, `u_email`, `u_number`, `u_level` FROM `users` WHERE `u_email` = "' . $email . '" AND `password` = "' . $hashedPassword . '"';

//    die($sql);

    //get result
    $result = $con->query($sql);

    //get rows
    $rows = $result->num_rows;
    //username and password failed if rows length = 0
    if ($rows == 0) {
       echo "login failed";
    } else {

        //create session
        while ($row = $result->fetch_assoc()) {
          $user = $row;
        }
        $_SESSION['tenalord'] = json_encode($user);
        echo "login success";

    }

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

function checkIfUserEmailExists($email, $uid = null){
    //return value
    $userEmailExist = false;

    //create sql
    $sql = "SELECT * FROM `users` WHERE `u_email` = '".$email."'";

    if($uid != null) $sql.=" and not uid=".$uid;


    //create connection
    $connection = connect();



    //execute query and get results
    $results = $connection->query($sql);

    //check if results is empty
    if($results->num_rows == 0) {
        return  false;
    } else {
        return true;
    }

}

function getLoggedInUser(){
    echo $_SESSION['tenalord'];
}

function getDashboardData(){
    $con = connect();

    $sqlUsers = "Select * from users";
    $sqlProperties = "select * from properties";
    $sqlRequests = "Select * from requests";

    $resultUsers = $con->query($sqlUsers);
    $resultProperties = $con->query($sqlProperties);
    $resultRequests = $con->query($sqlRequests);

    $response = new stdClass();
    $response->users = $resultUsers->num_rows;
    $response->properties = $resultProperties->num_rows;
    $response->requests = $resultRequests->num_rows;

    echo json_encode($response);
}

// get all users
function getAllUsers(){
    $conn = connect();

    $sql = "SELECT `uid`, `uf_name`, `ul_name`, `u_email`, `u_number`, `u_level` FROM `users`;";

    $result = $conn->query($sql);
    $users = array();
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            array_push($users,$row);
        }

    }
    echo json_encode($users);
}

function getSingeUser($uid){
    $conn = connect();
    $sql = "SELECT `uid`, `uf_name`, `ul_name`, `u_email`, `u_number`, `u_level` FROM `users` where uid =".$uid;
    $result = $conn->query($sql);
    $users = array();
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            array_push($users,$row);
        }

    }
    echo json_encode($users[0]);
}

function deleteSingleUser($uid){
    $conn = connect();
    $sql = "DELETE FROM `users` where uid =".$uid;
    if($conn->query($sql)){
        echo "delete success";
    };
}

function addUser($uf_name, $ul_name, $u_email, $u_number,$u_level){

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
 VALUES('".$uf_name."', '".$ul_name."', '".$u_email."', '".$u_number."', '".$u_level."', 'hello')";


    //check if user email exists
    $userEmailExists = checkIfUserEmailExists($u_email);

    $response = new stdClass();
    if($userEmailExists === true){
        $response->title="signup error";
        $response->message="email ".$u_email." already exists!";
    }
    else {
        $saveToDb = $connect->query($sql);

        if($saveToDb === true){
            $response->title = "Add User success";
            $response->message = "User successfully added!";
        }
    }

    //return response
    echo json_encode($response);

}

function updateUser($uid,$uf_name, $ul_name, $u_email, $u_number,$u_level){

    $connect = connect();

    //create sql to add user;
    $sql = "
    UPDATE
    `users`
SET
    `uf_name` = '".$uf_name."',
    `ul_name` = '".$ul_name."',
    `u_email` = '".$u_email."',
    `u_number` = '".$u_number."',
    `u_level` = '".$u_level."'
WHERE
    `uid`=".$uid."
    ";

    $response = new stdClass();

        $saveToDb = $connect->query($sql);

        if($saveToDb === true){
            $response->title = "Update User success";
            $response->message = "User successfully updated!";
        }


    //return response
    echo json_encode($response);

}


