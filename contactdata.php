<?php
include 'dbconnection.php';

$fullname = $_POST['fullname'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$conn = mysqli_connect($server, $user, $password, $db);
$sql = "INSERT INTO contact_us VALUES ('','$fullname','$email','$subject','$message')";

if (mysqli_query($conn, $sql)) {
    header("location: index.php#contactus");
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
