<?php

session_start();

require_once "config.php";

// If logged in
if (isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] == true)
{
    // If method is POST (user sent request to buy)
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Insert transaction into user_items
        $query2 = "INSERT INTO user_items VALUES ('" . $_SESSION['id'] . " ', ' " . $_POST['id'] . " ')";
        $result2 = mysqli_query($link, $query2);
        
        // Subtract cost from balance
        $cost = $_POST["cost"];
        $sql = "UPDATE users SET balance = balance - $cost WHERE id = '" . $_SESSION['id'] . " '";
        mysqli_query($link, $sql);

        //Return the amount of a given item owned by a given user
        $query1 = "SELECT COUNT(*) FROM user_items WHERE person_id = '" . $_SESSION['id'] . " ' 
        AND item_id = ' " . $_POST['id'] . " '";
        $result = mysqli_query($link, $query1);
        $row = mysqli_fetch_array($result);
        echo $row["COUNT(*)"];
    }
    //If method is GET (page requesting current inventory count)
    else if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        $arr = array();
        for ($x = 1; $x < 9; $x++)
        {
            //Return the amount of a given item owned by a given user
            $query1 = "SELECT COUNT(*) FROM user_items WHERE person_id = '" . $_SESSION['id'] . " ' 
            AND item_id = $x";
            $result = mysqli_query($link, $query1);
            $row = mysqli_fetch_array($result);
            $arr[] = $row["COUNT(*)"];
        }
        echo json_encode($arr);
    }
}

?>
    