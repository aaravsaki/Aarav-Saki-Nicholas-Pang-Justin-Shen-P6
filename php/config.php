<?php

//Note to self: change these later for heroku
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'divinecomedy');
define('PORT', 3307);
 
/* Attempt to connect to MySQL database */
$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME, PORT);
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

$sql = "CREATE TABLE IF NOT EXISTS users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    balance INT NOT NULL
)";

$sql2 = "CREATE TABLE IF NOT EXISTS items (
    item_id INT NOT NULL PRIMARY KEY,
    item_name VARCHAR(100) NOT NULL
)";

$sql3 = "CREATE TABLE IF NOT EXISTS user_items (
    person_id INT NOT NULL,
    item_id INT NOT NULL,
    FOREIGN KEY (person_id) REFERENCES users(id),
    FOREIGN KEY (item_id) REFERENCES items(item_id)
)";

if (mysqli_query($link, $sql)) {
  } else {
    echo "Error creating table: " . mysqli_error($link);
}

if (mysqli_query($link, $sql2)) {
} else {
  echo "Error creating table: " . mysqli_error($link);
}

if (mysqli_query($link, $sql3)) {
} else {
  echo "Error creating table: " . mysqli_error($link);
}
?>