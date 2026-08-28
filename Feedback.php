<?php
$server = "localhost";
$username = "root";
$database = "feedbackform";
$password = "";

// Connect to the database
$con = mysqli_connect($server, $username, $password, "feedbackform");

if(!$con){
    die("Connection failed: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if all form data exists
    $name = isset($_POST['name']) ? $_POST['name'] : '';
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $phone = isset($_POST['phone']) ? $_POST['phone'] : '';
    $message = isset($_POST['message']) ? $_POST['message'] : '';

    // Insert into database
    $sql = "INSERT INTO `feed_back` (`name`, `email`, `phone`, `message`, `dt`) 
            VALUES ('$name', '$email', '$phone', '$message', current_timestamp());";

    if ($con->query($sql) === TRUE) {
        echo "Feedback submitted successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $con->error;
    }

    $con->close();
}
?>
