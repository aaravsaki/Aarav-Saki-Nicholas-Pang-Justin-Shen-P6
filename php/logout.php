<?php
session_start();
 
$_SESSION = array();
 
// Destroy session
session_destroy();
 
// Redirect to login page
header("location: login.php");
exit;
?>