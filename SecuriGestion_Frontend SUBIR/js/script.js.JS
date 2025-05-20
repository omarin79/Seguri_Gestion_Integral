// Ejemplo para el modal de confirmación en registro_visita.html
function mostrarConfirmacionGuardar() {
    const modal = document.getElementById('confirmacion-guardar');
    if (modal) {
        modal.style.display = 'block';
    }
}

function cerrarConfirmacionGuardar() {
    const modal = document.getElementById('confirmacion-guardar');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Ejemplo de validación simple para el login (index.html)
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.querySelector('.error-message');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Previene el envío real del formulario
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Aquí iría la lógica de validación REAL (ej. llamada a backend)
            // Simulación de error:
            if (username !== 'usuario' || password !== 'contraseña') {
                if (errorMessage) {
                    errorMessage.style.display = 'block'; // Muestra el mensaje de error
                    errorMessage.textContent = 'Nombre de usuario o contraseña incorrectos.';
                }
            } else {
                 if (errorMessage) {
                    errorMessage.style.display = 'none'; // Oculta si es correcto
                 }
                alert('Inicio de sesión exitoso (simulado)');
                // Redirigir a la página principal: window.location.href = 'dashboard.html'; 
            }
        });
    }
});