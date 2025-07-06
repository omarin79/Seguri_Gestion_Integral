<?php
// backend/backenddb.php

$servidor = "localhost";
$usuario = "root";
$contrasena = ""; // Tu contraseña de XAMPP/WAMP (usualmente vacía)
$base_de_datos = "bd_seguri_gestion_integral"; // <-- Nombre de tu BD

$conexion = new mysqli($servidor, $usuario, $contrasena, $base_de_datos);

if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);
}
$conexion->set_charset("utf8");
?>