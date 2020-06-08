<?php
include 'dbconnection.php';

$email = $_POST['email'];

$conn = mysqli_connect($server, $user, $password, $db);
$sql = "INSERT INTO newsletter VALUES ('','$email')";

if (mysqli_query($conn, $sql)) {
    header("location: index.php");
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
