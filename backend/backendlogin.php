<?php
// backend/backendlogin.php

session_start();
require_once 'backenddb.php'; // Llama a tu archivo de conexión

header('Content-Type: application/json');

$username = $_POST['username'] ?? ''; // Esto será el 'documento'
$password = $_POST['password'] ?? '';

// Usamos la tabla 'personal' y la columna 'documento'
$sql = "SELECT id_personal, nombre, email, cargo, contrasena_hash FROM personal WHERE documento = ?";
$stmt = $conexion->prepare($sql);

if ($stmt === false) {
    echo json_encode(['success' => false, 'message' => 'Error al preparar la consulta.']);
    exit();
}

$stmt->bind_param("s", $username);
$stmt->execute();
$resultado = $stmt->get_result();

if ($resultado->num_rows === 1) {
    $usuario = $resultado->fetch_assoc();

    // Verificamos la contraseña cifrada
    if (password_verify($password, $usuario['contrasena_hash'])) {
        // Contraseña Correcta
        $_SESSION['user_id'] = $usuario['id_personal'];
        $_SESSION['user_nombre'] = $usuario['nombre'];
        $_SESSION['user_rol'] = $usuario['cargo'];

        echo json_encode([
            'success' => true,
            'user' => [
                'nombre' => $usuario['nombre'],
                'email' => $usuario['email'],
                'rol' => $usuario['cargo']
            ]
        ]);
    } else {
        // Contraseña Incorrecta
        echo json_encode(['success' => false, 'message' => 'Documento o contraseña incorrectos.']);
    }
} else {
    // Usuario no encontrado
    echo json_encode(['success' => false, 'message' => 'Documento o contraseña incorrectos.']);
}

$stmt->close();
$conexion->close();
?>