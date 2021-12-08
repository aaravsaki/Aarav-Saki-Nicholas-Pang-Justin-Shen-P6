<?php

require_once("config.php");
if (isset($_POST['formsub'])){ 

    $username = $_POST['username']; 
    $password = $_POST['password']; 
    $confirmation = $_POST['passconfirm'];

    if ($username != "" && $password != "" && $confirmation != ""){

        if ($password === $passconfirm){
            if ( strlen($passwd) >= 5 && strpbrk($passwd, "!#$.,:;()") != false ){
            }
            else
                $error_msg = 'Your password is not strong enough. Please try again.';
        }
        else
            $error_msg = 'H.';
    }
    else
        $error_msg = 'Please fill out all required fields.';

    $query = mysqli_query($link, "SELECT * FROM users WHERE username='{$username}'");
    if (mysqli_num_rows($query) == 0){
        $password = password_argon2id($password);
    }
    else
        $error_msg = 'Your username is taken. Try again.';


   
?>

<html>
    <div class="">
        <form method="post" action="">
            <div id="div_login">
                <h1>Register</h1>
                <div>
                    <input type="text" class="textbox" id="username" name="username" placeholder="Username" />
                </div>
                <div>
                    <input type="password" class="textbox" id="password" name="password" placeholder="Password"/>
                </div>
                <div>
                    <input type="password" class="textbox" id="passconfirm" name="passconfirm" placeholder="Confirm Password"/>
                </div>
                <div>
                    <input type="submit" value="Submit" name="formsub" id="formsub"/>
                </div>
            </div>
        </form>
    </div>
</html>