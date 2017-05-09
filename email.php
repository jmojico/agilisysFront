<?php
$to      = 'jmojico@gmail.com';
$subject = "Agilisys - Contacto de cliente >> " . $_POST["subject"];
$message = "Mensaje de " . $_POST['name'] . ":\r\n " . $_POST['message'];
//$headers = 'From: '. $_POST['email'] . "\r\n" .
$headers = 'From: '. 'contacto@agilisys.com.ar' . "\r\n" .
    'Reply-To: '. $_POST['email'] . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
?> 