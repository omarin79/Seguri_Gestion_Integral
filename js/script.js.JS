// --- JavaScript para el cambio de páginas y lógica de la SPA ---

// Obtiene todos los contenedores de página
const pageContents = document.querySelectorAll('.page-content');
const appHeader = document.getElementById('app-header');
const appFooter = document.getElementById('app-footer');
const loggedInUsernameSpan = document.getElementById('logged-in-username'); // Span para el nombre en el header

// --- Datos simulados de empleados (para autocompletar y mostrar info) ---
// En una aplicación real, estos datos vendrían de una API/backend y se consultarían desde el CSV.
const empleadosDB = <?php echo json_encode($empleados); ?>;

let currentUserCedula = null; // Para almacenar la cédula del usuario logueado

// Función para mostrar una página específica y ocultar las demás
function showPage(pageId) {
    pageContents.forEach(page => {
        if (page.id === pageId) {
            page.classList.add('active');
            page.style.display = 'block'; // Asegura que se muestre
        } else {
            page.classList.remove('active');
            page.style.display = 'none'; // Oculta las otras páginas
        }
    });

    const hash = pageId.replace('-page', '');
    if (hash === 'login' && window.location.hash !== '') {
        history.pushState(null, '', window.location.pathname + window.location.search);
    } else if (window.location.hash !== '#' + hash && hash !== 'login') {
        history.pushState(null, '', '#' + hash);
    }

    const contentWrapper = document.getElementById('content-wrapper');
    if (contentWrapper) {
        contentWrapper.scrollTo(0, 0);
    } else {
        window.scrollTo(0, 0);
    }

    // Llenar datos de Mi Perfil si la página es 'mi-perfil-page' y hay un usuario logueado
    if (pageId === 'mi-perfil-page' && currentUserCedula && empleadosDB[currentUserCedula]) {
        const user = empleadosDB[currentUserCedula];
        if(document.getElementById('mi-perfil-nombre-display')) document.getElementById('mi-perfil-nombre-display').textContent = user.nombre;
        if(document.getElementById('mi-perfil-email-display')) document.getElementById('mi-perfil-email-display').textContent = user.email;
        if(document.getElementById('mi-perfil-rol-display')) document.getElementById('mi-perfil-rol-display').textContent = user.rol;
        if(document.getElementById('mi-perfil-cedula-display')) document.getElementById('mi-perfil-cedula-display').textContent = currentUserCedula;
        if(document.getElementById('mi-perfil-telefono')) document.getElementById('mi-perfil-telefono').value = user.telefono || '';
        if(document.getElementById('mi-perfil-direccion')) document.getElementById('mi-perfil-direccion').value = user.direccion || '';
    }
}

document.body.addEventListener('click', function(event) {
    const target = event.target;
    if (target.tagName === 'A') {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#')) {
            event.preventDefault();
            const targetHash = href.substring(1);
            const pageId = targetHash + '-page';

            if (targetHash === 'logout') {
                alert('Cerrando sesión (simulado)');
                currentUserCedula = null; // Limpiar cédula del usuario logueado
                showPage('login-page');
                if(loggedInUsernameSpan) loggedInUsernameSpan.textContent = 'Invitado';
                if(document.getElementById('dashboard-username')) document.getElementById('dashboard-username').textContent = 'Invitado';
                if(document.getElementById('dashboard-email')) document.getElementById('dashboard-email').textContent = '';
                if(document.getElementById('dashboard-role')) document.getElementById('dashboard-role').textContent = '';
                if(document.getElementById('login-form')) document.getElementById('login-form').reset();


            } else if (document.getElementById(pageId)) {
                showPage(pageId);
            } else if (document.getElementById(targetHash)) {
                const section = document.getElementById(targetHash);
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
});


const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(loginForm);
        const errorMessageDiv = document.getElementById('login-error-message');

        fetch('backend/backendlogin.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                errorMessageDiv.style.display = 'none';
                const user = data.user;
                currentUserCedula = document.getElementById('username').value; // Guardar la cédula

                if (loggedInUsernameSpan) {
                    loggedInUsernameSpan.textContent = user.nombre.split(' ')[0]; // Mostrar solo el primer nombre
                }
                if(document.getElementById('dashboard-username')) document.getElementById('dashboard-username').textContent = user.nombre;
                if(document.getElementById('dashboard-email')) document.getElementById('dashboard-email').textContent = user.email;
                if(document.getElementById('dashboard-role')) document.getElementById('dashboard-role').textContent = user.rol;

                showPage('inicio-page');
            } else {
                errorMessageDiv.textContent = data.message;
                errorMessageDiv.style.display = 'block';
                currentUserCedula = null;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            errorMessageDiv.textContent = 'Error de conexión con el servidor.';
            errorMessageDiv.style.display = 'block';
        });
    });
}

const registroForm = document.getElementById('registro-form');
if (registroForm) {
    registroForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Registro simulado exitoso. Por favor, inicie sesión.');
        showPage('login-page');
        this.reset();
    });
}

const recuperarForm = document.getElementById('recuperar-form');
if (recuperarForm) {
    recuperarForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Instrucciones de recuperación enviadas (simulado).');
        showPage('login-page');
        this.reset();
    });
}

const visitaForm = document.getElementById('visita-form');
if (visitaForm) {
    visitaForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Visita guardada exitosamente (simulado).');
        cerrarConfirmacionGuardar();
        this.reset();
    });
}

// Formulario Mi Perfil - Actualizar Contacto
const miPerfilForm = document.getElementById('mi-perfil-form');
if (miPerfilForm) {
    miPerfilForm.addEventListener('submit', function(event) {
        event.preventDefault();
        if (currentUserCedula && empleadosDB[currentUserCedula]) {
            const telefono = document.getElementById('mi-perfil-telefono').value;
            const direccion = document.getElementById('mi-perfil-direccion').value;
            empleadosDB[currentUserCedula].telefono = telefono; // Actualiza en la simulación
            empleadosDB[currentUserCedula].direccion = direccion; // Actualiza en la simulación
            alert('Información de contacto actualizada (simulado).');
        } else {
            alert('Error: No hay usuario logueado para actualizar.');
        }
    });
}
// Formulario Mi Perfil - Cambiar Contraseña
const cambiarContrasenaForm = document.getElementById('cambiar-contrasena-form');
if (cambiarContrasenaForm) {
    cambiarContrasenaForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const currentPass = document.getElementById('current-password').value;
        const newPass = document.getElementById('new-password').value;
        const confirmNewPass = document.getElementById('confirm-new-password').value;
        if (newPass !== confirmNewPass) {
            alert('Las nuevas contraseñas no coinciden.');
            return;
        }
        // Aquí iría la lógica real para cambiar la contraseña (llamada a backend)
        alert('Contraseña cambiada exitosamente (simulado).');
        this.reset();
    });
}


function mostrarConfirmacionGuardar() {
    const modal = document.getElementById('confirmacion-guardar');
    if (modal) modal.style.display = 'block';
}
function cerrarConfirmacionGuardar() {
    const modal = document.getElementById('confirmacion-guardar');
    if (modal) modal.style.display = 'none';
}

const tipoNovedadRegistro = document.getElementById('tipo-novedad-registro');
const novedadFormContainer = document.getElementById('novedad-form-container');
const formsHtml = { // Definiciones de formularios de novedades...
    'ausencia': `
        <form id="form-registro-ausencia" enctype="multipart/form-data">
            <h3>Registrar Ausencia de Unidad</h3>
            <label for="reg-ausencia-cedula">Cédula de Ciudadanía de la Unidad Ausente:</label>
            <input type="text" id="reg-ausencia-cedula" name="cedula" required placeholder="Ej: 1012345678">
            <label for="reg-ausencia-nombre">Nombre de la Unidad Ausente:</label>
            <input type="text" id="reg-ausencia-nombre" name="nombre_unidad" readonly placeholder="Se autocompletará">
            <label for="reg-ausencia-puesto">Puesto de Trabajo Afectado:</label>
            <select id="reg-ausencia-puesto" name="puesto_afectado" required><option value="">Seleccione...</option><option value="recepcion-abc">Recepción Principal Edificio ABC</option><option value="porteria-floresta">Portería Vehicular La Floresta</option></select>
            <label for="reg-ausencia-turno">Turno Afectado:</label>
            <select id="reg-ausencia-turno" name="turno_afectado" required><option value="">Seleccione...</option><option value="mañana">Mañana</option><option value="tarde">Tarde</option><option value="noche">Noche</option></select>
            <label for="reg-ausencia-fecha-inicio">Fecha y Hora Inicio Ausencia:</label>
            <input type="datetime-local" id="reg-ausencia-fecha-inicio" name="fecha_inicio" required>
            <label for="reg-ausencia-fecha-fin">Fecha y Hora Fin Ausencia (Estimado):</label>
            <input type="datetime-local" id="reg-ausencia-fecha-fin" name="fecha_fin" required>
            <label for="reg-ausencia-observaciones">Observaciones Adicionales:</label>
            <textarea id="reg-ausencia-observaciones" name="observaciones" rows="3" placeholder="Detalles de la ausencia"></textarea>
            <label for="reg-ausencia-evidencia">Evidencia (Opcional):</label>
            <input type="file" id="reg-ausencia-evidencia" name="evidencia_ausencia" accept="image/*,application/pdf"><small>Adjunte una imagen o PDF si es necesario.</small>
            <button type="submit">Registrar Ausencia</button>
        </form>`,
    'incapacidad': `
        <form id="form-registro-incapacidad" enctype="multipart/form-data">
            <h3>Registrar Incapacidad</h3>
            <label for="reg-incapacidad-cedula">Cédula de Ciudadanía del Empleado:</label>
            <input type="text" id="reg-incapacidad-cedula" name="cedula" required placeholder="Ej: 1012345678">
            <label for="reg-incapacidad-nombre">Nombre del Empleado:</label>
            <input type="text" id="reg-incapacidad-nombre" name="nombre_empleado" readonly placeholder="Se autocompletará">
            <label for="reg-incapacidad-tipo">Tipo de Incapacidad:</label>
            <select id="reg-incapacidad-tipo" name="tipo_incapacidad" required><option value="">Seleccione...</option><option value="general">Enfermedad General</option><option value="laboral">Accidente Laboral</option><option value="maternidad">Maternidad/Paternidad</option></select>
            <label for="reg-incapacidad-fecha-inicio">Fecha de Inicio de Incapacidad:</label>
            <input type="date" id="reg-incapacidad-fecha-inicio" name="fecha_inicio_incapacidad" required>
            <label for="reg-incapacidad-dias">Número de Días Incapacidad:</label>
            <input type="number" id="reg-incapacidad-dias" name="dias_incapacidad" min="1" required>
            <label for="reg-incapacidad-diagnostico">Diagnóstico (Opcional):</label>
            <textarea id="reg-incapacidad-diagnostico" name="diagnostico" rows="2" placeholder="Breve descripción del diagnóstico"></textarea>
            <label for="reg-incapacidad-soporte">Soporte Médico (Certificado):</label>
            <input type="file" id="reg-incapacidad-soporte" name="soporte_incapacidad" accept="image/*,application/pdf" required><small>Adjunte el certificado médico.</small>
            <button type="submit">Registrar Incapacidad</button>
        </form>`,
    'licencia-remunerada': `
        <form id="form-registro-licencia-remunerada" enctype="multipart/form-data">
            <h3>Registrar Licencia Remunerada</h3>
            <label for="reg-lic-rem-cedula">Cédula de Ciudadanía del Empleado:</label>
            <input type="text" id="reg-lic-rem-cedula" name="cedula" required>
            <label for="reg-lic-rem-nombre">Nombre del Empleado:</label>
            <input type="text" id="reg-lic-rem-nombre" name="nombre_empleado" readonly>
            <label for="reg-lic-rem-motivo">Motivo:</label>
            <select id="reg-lic-rem-motivo" name="motivo_licencia" required><option value="">Seleccione...</option><option value="luto">Luto</option><option value="matrimonio">Matrimonio</option></select>
            <label for="reg-lic-rem-fecha-inicio">Fecha Inicio:</label>
            <input type="date" id="reg-lic-rem-fecha-inicio" name="fecha_inicio_licencia" required>
            <label for="reg-lic-rem-dias">Días:</label>
            <input type="number" id="reg-lic-rem-dias" name="dias_licencia" min="1" required>
            <label for="reg-lic-rem-soporte">Soporte:</label>
            <input type="file" id="reg-lic-rem-soporte" name="soporte_licencia" accept="image/*,application/pdf">
            <button type="submit">Registrar Licencia Remunerada</button>
        </form>`,
    'permiso-remunerado': `
        <form id="form-registro-permiso-remunerado" enctype="multipart/form-data">
            <h3>Registrar Permiso Remunerado</h3>
            <label for="reg-perm-rem-cedula">Cédula Empleado:</label>
            <input type="text" id="reg-perm-rem-cedula" name="cedula" required>
            <label for="reg-perm-rem-nombre">Nombre Empleado:</label>
            <input type="text" id="reg-perm-rem-nombre" name="nombre_empleado" readonly>
            <label for="reg-perm-rem-motivo">Motivo:</label>
            <textarea id="reg-perm-rem-motivo" name="motivo_permiso" rows="2" required></textarea>
            <label for="reg-perm-rem-fecha">Fecha:</label>
            <input type="date" id="reg-perm-rem-fecha" name="fecha_permiso" required>
            <label for="reg-perm-rem-hora-inicio">Hora Inicio:</label>
            <input type="time" id="reg-perm-rem-hora-inicio" name="hora_inicio" required>
            <label for="reg-perm-rem-hora-fin">Hora Fin:</label>
            <input type="time" id="reg-perm-rem-hora-fin" name="hora_fin" required>
            <button type="submit">Registrar Permiso Remunerado</button>
        </form>`,
    'licencia-no-remunerada': `
         <form id="form-registro-licencia-no-remunerada" enctype="multipart/form-data">
            <h3>Registrar Licencia No Remunerada</h3>
            <label for="reg-lic-no-rem-cedula">Cédula Empleado:</label>
            <input type="text" id="reg-lic-no-rem-cedula" name="cedula" required>
            <label for="reg-lic-no-rem-nombre">Nombre Empleado:</label>
            <input type="text" id="reg-lic-no-rem-nombre" name="nombre_empleado" readonly>
            <label for="reg-lic-no-rem-motivo">Motivo:</label>
            <textarea id="reg-lic-no-rem-motivo" name="motivo_licencia" rows="3" required></textarea>
            <label for="reg-lic-no-rem-fecha-inicio">Fecha Inicio:</label>
            <input type="date" id="reg-lic-no-rem-fecha-inicio" name="fecha_inicio_licencia" required>
            <label for="reg-lic-no-rem-dias">Días (Estimado):</label>
            <input type="number" id="reg-lic-no-rem-dias" name="dias_licencia" min="1" required>
            <button type="submit">Registrar Licencia No Remunerada</button>
        </form>`,
    'permiso-no-remunerado': `
        <form id="form-registro-permiso-no-remunerado" enctype="multipart/form-data">
            <h3>Registrar Permiso No Remunerado</h3>
            <label for="reg-perm-no-rem-cedula">Cédula Empleado:</label>
            <input type="text" id="reg-perm-no-rem-cedula" name="cedula" required>
            <label for="reg-perm-no-rem-nombre">Nombre Empleado:</label>
            <input type="text" id="reg-perm-no-rem-nombre" name="nombre_empleado" readonly>
            <label for="reg-perm-no-rem-motivo">Motivo:</label>
            <textarea id="reg-perm-no-rem-motivo" name="motivo_permiso" rows="2" required></textarea>
            <label for="reg-perm-no-rem-fecha">Fecha:</label>
            <input type="date" id="reg-perm-no-rem-fecha" name="fecha_permiso" required>
            <label for="reg-perm-no-rem-hora-inicio">Hora Inicio:</label>
            <input type="time" id="reg-perm-no-rem-hora-inicio" name="hora_inicio" required>
            <label for="reg-perm-no-rem-hora-fin">Hora Fin:</label>
            <input type="time" id="reg-perm-no-rem-hora-fin" name="hora_fin" required>
            <button type="submit">Registrar Permiso No Remunerado</button>
        </form>`,
    'unidad-evadida': `
        <form id="form-registro-unidad-evadida" enctype="multipart/form-data">
            <h3>Registrar Unidad Evadida</h3>
            <label for="reg-evadida-cedula">Cédula Unidad Evadida:</label>
            <input type="text" id="reg-evadida-cedula" name="cedula" required>
            <label for="reg-evadida-nombre">Nombre Unidad Evadida:</label>
            <input type="text" id="reg-evadida-nombre" name="nombre_unidad" readonly>
            <label for="reg-evadida-puesto">Puesto:</label>
            <select id="reg-evadida-puesto" name="puesto_evadido" required><option value="">Seleccione...</option><option value="recepcion-abc">Recepción ABC</option></select>
            <label for="reg-evadida-hora">Hora Evasión (Estimada):</label>
            <input type="time" id="reg-evadida-hora" name="hora_evasion" required>
            <label for="reg-evadida-circunstancias">Circunstancias:</label>
            <textarea id="reg-evadida-circunstancias" name="circunstancias" rows="4" required></textarea>
            <button type="submit">Registrar Unidad Evadida</button>
        </form>`,
    'condicion-insegura': `
        <form id="form-registro-condicion-insegura" enctype="multipart/form-data">
            <h3>Reporte de Condición Insegura</h3>
            <label for="reg-condicion-ubicacion">Ubicación/Puesto:</label>
            <input type="text" id="reg-condicion-ubicacion" name="ubicacion" required>
            <label for="reg-condicion-descripcion">Descripción Detallada:</label>
            <textarea id="reg-condicion-descripcion" name="descripcion" rows="5" required></textarea>
            <label for="reg-condicion-tipo">Tipo Condición:</label>
            <select id="reg-condicion-tipo" name="tipo_condicion" required><option value="">Seleccione...</option><option value="infraestructura">Infraestructura</option></select>
            <label for="reg-condicion-severidad">Severidad:</label>
            <select id="reg-condicion-severidad" name="severidad" required><option value="">Seleccione...</option><option value="bajo">Bajo</option></select>
            <label for="reg-condicion-reportante-cedula">Cédula Reportante:</label>
            <input type="text" id="reg-condicion-reportante-cedula" name="cedula_reportante" required>
            <label for="reg-condicion-reportante-nombre">Nombre Reportante:</label>
            <input type="text" id="reg-condicion-reportante-nombre" name="nombre_reportante" readonly>
            <label for="reg-condicion-evidencia">Evidencia Fotográfica (Opcional):</label>
            <input type="file" id="reg-condicion-evidencia" name="evidencia_condicion" accept="image/*">
            <button type="submit">Reportar Condición Insegura</button>
        </form>`
};

function setupAutocompleteListener(cedulaFieldId, nombreFieldId) {
    const cedulaInput = document.getElementById(cedulaFieldId);
    const nombreInput = document.getElementById(nombreFieldId);
    if (cedulaInput && nombreInput) {
        cedulaInput.addEventListener('blur', () => {
            const cedula = cedulaInput.value;
            if (empleadosDB[cedula]) {
                nombreInput.value = empleadosDB[cedula].nombre;
            } else if (cedula) { // Solo mostrar 'no encontrado' si se ingresó una cédula
                nombreInput.value = 'Empleado no encontrado';
            } else { // Limpiar si la cédula está vacía
                nombreInput.value = '';
            }
        });
    }
}

// Dentro de la etiqueta <script> de tu index.html

function setupDynamicFormListeners(formId) {
const form = document.getElementById(formId);
if (form) {
form.addEventListener('submit', async function(event) { // Hacemos la función async
    event.preventDefault();
    const formData = new FormData(form);

    // Creamos un objeto simple a partir de los datos del formulario
    const data = Object.fromEntries(formData.entries());

    // --- INICIO DE LA IMPLEMENTACIÓN DE LA API ---

    try {
        // Hacemos la petición POST a nuestra API
        const response = await fetch('http://localhost:3000/api/operativo/novedades', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data), // Convertimos el objeto a un string JSON
        });

        const result = await response.json(); // Leemos la respuesta de la API

        if (!response.ok) {
            // Si la API devuelve un error (ej. 400, 404, 500)
            throw new Error(result.message || 'Error al registrar la novedad.');
        }

        // Si todo sale bien, mostramos el mensaje de éxito de la API
        alert(result.message);

        // Limpiamos el formulario y el contenedor
        this.reset();
        if(novedadFormContainer) novedadFormContainer.innerHTML = '<p>Seleccione un tipo de novedad para ver el formulario correspondiente.</p>';
        if(tipoNovedadRegistro) tipoNovedadRegistro.value = "";

    } catch (error) {
        // Si hay un error en la petición (ej. el servidor no responde)
        console.error('Error al registrar la novedad:', error);
        alert('Hubo un error al conectar con el servidor: ' + error.message);
    }
    // --- FIN DE LA IMPLEMENTACIÓN DE LA API ---
});


}
};

if (tipoNovedadRegistro) {
    tipoNovedadRegistro.addEventListener('change', () => {
        const selectedType = tipoNovedadRegistro.value;
        if (selectedType && formsHtml[selectedType]) {
            novedadFormContainer.innerHTML = formsHtml[selectedType];
            const newFormElement = novedadFormContainer.querySelector('form');
            if (newFormElement) {
                setupDynamicFormListeners(newFormElement.id);
            }
        } else {
            novedadFormContainer.innerHTML = '<p>Seleccione un tipo de novedad para ver el formulario correspondiente.</p>';
        }
    });
}

const novedadesConsultaForm = document.getElementById('novedades-consulta-form');
if (novedadesConsultaForm) {
    novedadesConsultaForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const resultsDiv = document.getElementById('novedades-results');
        resultsDiv.innerHTML = `<p>Buscando novedades (simulado)...</p>`;
        setTimeout(() => {
            resultsDiv.innerHTML = `<h3>Resultados de Novedades (Simulados):</h3><ul><li><strong>Ausencia de Unidad</strong> - CC: 123456789</li></ul>`;
        }, 1500);
    });
}

// ---- NUEVOS FORMULARIOS: Talento Humano y Nómina ----
// Talento Humano - Solicitar Carta
const formSolicitarCarta = document.getElementById('form-solicitar-carta');
if (formSolicitarCarta) {
    setupAutocompleteListener('th-cedula-carta', 'th-nombre-carta');
    formSolicitarCarta.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Solicitud de carta laboral enviada (simulado). Se enviará a: ' + document.getElementById('th-email-envio-carta').value);
        this.reset();
    });
}
// Talento Humano - Consultar Documentos
const formConsultarDocsTH = document.getElementById('form-consultar-documentos-th');
if (formConsultarDocsTH) {
    setupAutocompleteListener('th-cedula-consulta-docs', 'th-nombre-consulta-docs');
    formConsultarDocsTH.addEventListener('submit', function(event) {
        event.preventDefault();
        const nombre = document.getElementById('th-nombre-consulta-docs').value;
        if (nombre && nombre !== 'Empleado no encontrado') {
            document.getElementById('th-nombre-docs-display').textContent = nombre;
            document.getElementById('th-documentos-resultado').style.display = 'block';
        } else {
            document.getElementById('th-documentos-resultado').style.display = 'none';
            alert('Por favor, ingrese una cédula válida para consultar documentos.');
        }
    });
}

// Nómina - Consultar Desprendibles
const formConsultarDesprendibles = document.getElementById('form-consultar-desprendibles');
if (formConsultarDesprendibles) {
    setupAutocompleteListener('nomina-cedula-desprendible', 'nomina-nombre-desprendible');
    formConsultarDesprendibles.addEventListener('submit', function(event) {
        event.preventDefault();
        const nombre = document.getElementById('nomina-nombre-desprendible').value;
        const ano = document.getElementById('nomina-ano-desprendible').value;
        const mes = document.getElementById('nomina-mes-desprendible').options[document.getElementById('nomina-mes-desprendible').selectedIndex].text;
        if (nombre && nombre !== 'Empleado no encontrado' && ano && mes) {
            document.getElementById('nomina-nombre-desp-display').textContent = nombre;
            document.getElementById('nomina-periodo-desp-display').textContent = `${mes} ${ano}`;
            document.getElementById('nomina-desprendible-resultado').style.display = 'block';
        } else {
            document.getElementById('nomina-desprendible-resultado').style.display = 'none';
            alert('Por favor, complete todos los campos y asegúrese de que la cédula sea válida.');
        }
    });
}
// Nómina - Generar Certificado Ingresos
const formGenerarCertificadoIng = document.getElementById('form-generar-certificado-ingresos');
if (formGenerarCertificadoIng) {
    setupAutocompleteListener('nomina-cedula-certificado', 'nomina-nombre-certificado');
    formGenerarCertificadoIng.addEventListener('submit', function(event) {
        event.preventDefault();
         const nombre = document.getElementById('nomina-nombre-certificado').value;
         const ano = document.getElementById('nomina-ano-certificado').value;
        if (nombre && nombre !== 'Empleado no encontrado' && ano) {
            document.getElementById('nomina-nombre-cert-display').textContent = nombre;
            document.getElementById('nomina-ano-cert-display').textContent = ano;
            document.getElementById('nomina-certificado-resultado').style.display = 'block';
        } else {
             document.getElementById('nomina-certificado-resultado').style.display = 'none';
            alert('Por favor, complete el año y asegúrese de que la cédula sea válida.');
        }
    });
}

// Gestión Informes General
const formInformesGeneral = document.getElementById('informes-general-form');
if(formInformesGeneral) {
    setupAutocompleteListener('informe-cedula', 'informe-resultado-area'); // No hay campo nombre, el resultado se muestra en un div
    formInformesGeneral.addEventListener('submit', function(event){
        event.preventDefault();
        const tipoInforme = document.getElementById('informe-tipo').value;
        const informeResultadoArea = document.getElementById('informe-resultado-area');
        if (tipoInforme) {
            informeResultadoArea.innerHTML = `<h4>Resultado del Informe: ${tipoInforme} (Simulado)</h4><p>Informe generado exitosamente. <a href="#" onclick="alert('Descargando informe ${tipoInforme} (simulado)...')">Descargar Informe (PDF)</a></p>`;
            informeResultadoArea.style.display = 'block';
        } else {
            alert('Por favor, seleccione un tipo de informe.');
            informeResultadoArea.style.display = 'none';
        }
    });
}
// Fin Nuevos Formularios

document.addEventListener('DOMContentLoaded', () => {
    const initialHash = window.location.hash.substring(1);
    const validPageHashes = [
        'login', 'registro', 'olvido-contrasena',
        'inicio', 'mi-perfil', 'plataforma-operativa',
        'talento-humano', 'nomina', 'registro-visita', // Corregido: talento-humano
        'gestion-informes-general',
        'registro-novedades-general',
        'visualizacion-alertas'
    ];

    if (initialHash && validPageHashes.includes(initialHash)) {
        showPage(initialHash + '-page');
    } else {
        showPage('login-page');
    }

    window.addEventListener('hashchange', () => {
        const hash = window.location.hash.substring(1);
        if (hash === '') {
            showPage('login-page');
        } else if (validPageHashes.includes(hash)) {
            showPage(hash + '-page');
        } else {
            console.warn('Hash inválido en la URL:', window.location.hash);
        }
    });
});