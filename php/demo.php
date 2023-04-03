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
?>