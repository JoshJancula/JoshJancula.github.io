<?php

if (isset($_POST('submit'))) {


$name = $_POST(‘name’);
$email = $_POST(‘email’);
$message = $_POST(‘message’);

$to =  “josh@jancula.com”;

// Name: $name
// Email: $email
// Message: $message;
$headers = "From: $name <$email>";
$messages = "Name: $name \n\n Email: $email \n\n Message: $message";

if (mail($to,"newContact",$messages,$headers)) {
	echo "your message has been sent";
}
}

?>





