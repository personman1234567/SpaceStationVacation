<?php

    $Username = $_POST["Username"];
    $Password = $_POST["Password"];
        
    $correctUsername = "test";
    $correctPassword = "pass";

    if($Username == $correctUsername && $Password == $correctPassword)
    {
        header("Location: BookingPage.html");
    }
    else{
        echo 'Incorrect Username or Password! Please try again...';
    }

?>