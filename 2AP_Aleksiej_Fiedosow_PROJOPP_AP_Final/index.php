<?php
$servername = "localhost";
$username = "root";
$password = ""; 
$dbname = "form_projopp"; 



// !!Utworzyłem bazę danych w MySQLi pod nazwą form_projopp
// connection to the database 
$conn = new mysqli("localhost", "root", "", "formDB");
// Check if the connection was successful
if ($conn->connect_error) {
    // If connection failed, show the error
    die("Connection failed: " . $conn->connect_error);
}
// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $email = $_POST['email'];
    // Validate the form data: 
    // - Check if the username has at least 3 characters
    // - Check if the email is in a valid format
    if (strlen($username) >= 3 && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Prepare an SQL query to insert the username and email into the database
        $stmt = $conn->prepare("INSERT INTO form (username, email) VALUES (?, ?)"); 
        // Run the query
        // If the query is successful, show a success message, else show the error
        echo $stmt->execute() ? "User registered successfully!" : "Error: " . $stmt->error;
        $stmt->close();
    } else {
        // If false, show error message
        echo "Invalid input.";
    }
}
// Close the database 
$conn->close();
?>