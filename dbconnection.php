<?php

$server = "localhost";
$user = "root";
$password = "";
$db = "holydamn";

// Create connection
$conn = mysqli_connect($server, $user, $password, $db);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

mysqli_close($conn);
