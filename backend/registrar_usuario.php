<?php
require_once '../includes/db.php'; // Asegúrate que la ruta a tu conexión sea correcta

header('Content-Type: application/json');

$nombre = $_POST['nombre-completo'] ?? '';
$email = $_POST['email-registro'] ?? '';
$password = $_POST['password-registro'] ?? '';
$documento = $_POST['documento-registro'] ?? ''; 

// Validación de campos vacíos
if (empty($nombre) || empty($email) || empty($password) || empty($documento)) {
    echo json_encode(['success' => false, 'message' => 'Todos los campos son obligatorios.']);
    exit;
}

// Encriptar la contraseña para seguridad
$password_hash = password_hash($password, PASSWORD_DEFAULT);

// Preparar la inserción a la base de datos
$sql = "INSERT INTO personal (documento, nombre, email, contrasena_hash, cargo) VALUES (?, ?, ?, ?, 'Operativo')";
$stmt = $conexion->prepare($sql);

if ($stmt === false) {
    echo json_encode(['success' => false, 'message' => 'Error al preparar la consulta.']);
    exit();
}

$stmt->bind_param("ssss", $documento, $nombre, $email, $password_hash);

if ($stmt->execute()) {
    echo json_encode(['success' => true, 'message' => '¡Registro exitoso! Ahora puede iniciar sesión.']);
} else {
    // Manejar error de duplicado (si el documento o email ya existen)
    if ($conexion->errno == 1062) {
         echo json_encode(['success' => false, 'message' => 'El documento o correo electrónico ya existen.']);
    } else {
         echo json_encode(['success' => false, 'message' => 'Error al registrar el usuario.']);
    }
}

$stmt->close();
$conexion->close();
?>