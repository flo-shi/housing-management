<?php

 //  $user= "flombient";

 //  echo("Hi ".$user);

  class Greeting{
    public $message ;
    public $user ;
     
    function __construct($user, $message) {
        $this->message = $message;
        $this->user = $user;
    }

    function greet(){
        echo $this->message." " .$this->user;
    }


  }
  $greeting = new Greeting("Flombient","Hello");
  $greeting->greet();


  class Person {
    public $name;
    public function sayHello() {
        echo "Hello, my name is " . $this->name;
    }
}

$person = new Person();
$person->name = "John";
$person->sayHello(); // Output: "Hello, my name is John"

$servername = "localhost";
$username = "root";
$password = "root";
$database = "tenalord";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Connected successfully!";
}

echo "<br>Welcome<br>";

$sql ="SELECT `uid`, `uf_name`, `ul_name`, `u_email`, `u_number`, `u_level` FROM `users` ";
$result = $conn->query($sql);
//$rows = $result->num_rows;
echo $sql."<br>";
$users = array();
//echo "Result=>".$rows;
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        array_push($users,$row);
        echo json_encode($row);
        echo "<br> id: ". $row["uid"]. " - Name: ". $row["uf_name"]. " " . $row["ul_name"] . "<br>";
    }
} else {
    echo "0 results";
}
echo "<pre>".json_encode($users)."</pre>";
$conn->close();
?>