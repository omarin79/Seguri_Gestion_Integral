<?php
require_once 'backenddb.php'; // Reutiliza tu conexión a la BD

header('Content-Type: application/json');

// Recibimos los datos del formulario de registro
$nombre = $_POST['nombre-completo'] ?? '';
$email = $_POST['email-registro'] ?? '';
$password = $_POST['password-registro'] ?? '';
$documento = $_POST['documento-registro'] ?? ''; // Suponiendo que se agregará un campo para el documento

// Validación básica (puedes añadir más validaciones)
if (empty($nombre) || empty($email) || empty($password) || empty($documento)) {
    echo json_encode(['success' => false, 'message' => 'Todos los campos son obligatorios.']);
    exit;
}

// --- Comprobación para evitar correos duplicados ---
$sql_check = "SELECT email FROM personal WHERE email = ?";
$stmt_check = $conexion->prepare($sql_check);
$stmt_check->bind_param("s", $email);
$stmt_check->execute();
$resultado_check = $stmt_check->get_result();

if ($resultado_check->num_rows > 0) {
    echo json_encode(['success' => false, 'message' => 'El correo electrónico ya está registrado.']);
    $stmt_check->close();
    $conexion->close();
    exit;
}
$stmt_check->close();

// --- Encriptación de la contraseña (MUY IMPORTANTE) ---
$password_hash = password_hash($password, PASSWORD_DEFAULT);

// --- Insertar el nuevo usuario en la base de datos ---
// Asumimos un cargo por defecto, puedes cambiarlo según tu lógica
$cargo_defecto = 'VIGILANTE';

$sql_insert = "INSERT INTO personal (documento, nombre, email, contrasena_hash, cargo) VALUES (?, ?, ?, ?, ?)";
$stmt_insert = $conexion->prepare($sql_insert);

if ($stmt_insert === false) {
    echo json_encode(['success' => false, 'message' => 'Error al preparar la consulta de inserción.']);
    exit();
}

$stmt_insert->bind_param("sssss", $documento, $nombre, $email, $password_hash, $cargo_defecto);

if ($stmt_insert->execute()) {
    echo json_encode(['success' => true, 'message' => '¡Registro exitoso! Ahora puedes iniciar sesión.']);
} else {
    echo json_encode(['success' => false, 'message' => 'Error al registrar el usuario. Por favor, inténtelo de nuevo.']);
}

$stmt_insert->close();
$conexion->close();
?>