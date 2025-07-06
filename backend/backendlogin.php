<?php
// backend/login.php

// Inicia una sesión para guardar que el usuario ha ingresado
session_start();

// Incluye el archivo de conexión a la base deatos
require_once 'db.php';

// Prepara la respuesta que se enviará en formato JSON
header('Content-Type: application/json');

// Recibe el nombre de usuario (cédula) y la contraseña del formulario
$username = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';

// --- Validación Segura con Consultas Preparadas ---
// Esto previene ataques de inyección SQL

// 1. Prepara la consulta SQL
$sql = "SELECT id, nombre, email, rol, contrasena_hash FROM usuarios WHERE cedula = ?";
$stmt = $conexion->prepare($sql);

if ($stmt === false) {
    echo json_encode(['success' => false, 'message' => 'Error al preparar la consulta.']);
    exit();
}

// 2. Vincula el parámetro (la cédula del usuario) a la consulta
$stmt->bind_param("s", $username);

// 3. Ejecuta la consulta
$stmt->execute();

// 4. Obtiene el resultado
$resultado = $stmt->get_result();

if ($resultado->num_rows === 1) {
    $usuario = $resultado->fetch_assoc();

    // 5. Verifica la contraseña
    // La contraseña en la BD debe estar "hasheada". NUNCA guardes contraseñas en texto plano.
    if (password_verify($password, $usuario['contrasena_hash'])) {
        // Contraseña correcta: Iniciar sesión
        $_SESSION['user_id'] = $usuario['id'];
        $_SESSION['user_nombre'] = $usuario['nombre'];
        $_SESSION['user_rol'] = $usuario['rol'];

        // Envía una respuesta de éxito con los datos del usuario
        echo json_encode([
            'success' => true,
            'user' => [
                'nombre' => $usuario['nombre'],
                'email' => $usuario['email'],
                'rol' => $usuario['rol']
            ]
        ]);

    } else {
        // Contraseña incorrecta
        echo json_encode(['success' => false, 'message' => 'Contraseña incorrecta.']);
    }
} else {
    // Usuario no encontrado
    echo json_encode(['success' => false, 'message' => 'Usuario no encontrado.']);
}

// Cierra la sentencia y la conexión
$stmt->close();
$conexion->close();
?>