<?php

session_start();

require_once "config.php";

// If logged in
if (isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] == true)
{
    // Fetch current balance
    $query1 = "SELECT balance FROM users WHERE id = '" . $_SESSION['id'] . " '";
    $result = mysqli_query($link, $query1);
    $row = mysqli_fetch_array($result);
    $quantity = $row['balance'];

    //Update balance
    $sql = "UPDATE users SET balance = ? WHERE id = ?";
    if($stmt = mysqli_prepare($link, $sql)){
        mysqli_stmt_bind_param($stmt, "ii", $addval, $_SESSION["id"]);
        $addval = $quantity + 51;

        mysqli_stmt_execute($stmt);
    }

    $query = "SELECT balance FROM users WHERE id = '" . $_SESSION['id'] . " '";
    $result = mysqli_query($link, $query);
    $row = mysqli_fetch_array($result);
    $quantity = $row['balance'];

}
echo $quantity;

?>