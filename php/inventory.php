<?php

session_start();

require_once "config.php";

if (isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] == true)
{
    $query2 = "INSERT INTO user_items (person_id, item_id) VALUES ('" . $_SESSION['id'] . " ', ' " . $_POST['data'] . " ')";
    $result2 = mysqli_query($link, $query2);

    $query1 = "SELECT COUNT(person_id) FROM user_items WHERE person_id = '" . $_SESSION['id'] . " ' 
    AND item_id = ' " . $_POST['data'] . " '";
    $result = mysqli_query($link, $query1);
    echo $result;

}

?>
    