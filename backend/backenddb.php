<?php
// backend/db.php

$servidor = "localhost";
$usuario = "root";
$contrasena = ""; // La contraseña que usas para entrar a phpMyAdmin
$base_de_datos = "seguri_gestion_integral";

// Crear conexión
$conexion = new mysqli($servidor, $usuario, $contrasena, $base_de_datos);

// Verificar conexión
if ($conexion->connect_error) {
    // Detiene la ejecución y muestra el error. En producción, esto se manejaría de otra forma.
    die("Conexión fallida: " . $conexion->connect_error);
}

// Establecer el charset a UTF-8 para evitar problemas con tildes y caracteres especiales
$conexion->set_charset("utf8");
?>