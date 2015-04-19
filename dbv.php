<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "dbv";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM dbv WHERE display_date= '".date("Y-m-d")."'";

$sql_result = $conn->query($sql);

if ($sql_result->num_rows > 0) {
    // output data of each row
    while($row = $sql_result->fetch_assoc()) {
        $result['verse']= $row["verse"];
        $result['thoughts']= $row["thoughts"];
        $result['prayer']= $row["prayer"];
    }
    
} 
echo json_encode($result);
$conn->close();
?> 