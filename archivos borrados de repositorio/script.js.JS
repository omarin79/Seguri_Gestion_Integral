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
            }// ... (existing JavaScript code) ...

        // Obtiene todos los contenedores de página
        const pageContents = document.querySelectorAll('.page-content');
        const appHeader = document.getElementById('app-header');
        const appFooter = document.getElementById('app-footer');
        const loggedInUsernameSpan = document.getElementById('logged-in-username'); // Span para el nombre en el header

        // Función para mostrar una página específica y ocultar las demás
        // ... (showPage function remains the same) ...

        // --- Manejo de Eventos para Navegación (usando delegación) ---
        // ... (existing event listener for 'click' remains the same) ...

        // --- Manejo de Envío de Formularios ---
        // ... (existing form submission logic for login, registro, recuperar remains the same) ...
        
        // Add specific form submission handlers for the new forms:

        // Example: Formulario de Registro de Ausencia de Unidad
        const formAusenciaUnidad = document.getElementById('form-ausencia-unidad');
        if (formAusenciaUnidad) {
            formAusenciaUnidad.addEventListener('submit', function(event) {
                event.preventDefault(); // Evita el envío real del formulario

                const cedula = document.getElementById('ausencia-cedula').value;
                const puesto = document.getElementById('ausencia-puesto').value;
                const turno = document.getElementById('ausencia-turno').value;
                const motivo = document.getElementById('ausencia-motivo').value;
                const observaciones = document.getElementById('ausencia-observaciones').value;
                const evidencia = document.getElementById('ausencia-evidencia').files[0]; // File object

                // --- Implementar lógica para enviar estos datos al backend ---
                // Para una subida de archivos real, necesitarías usar FormData y Fetch API
                // const formData = new FormData();
                // formData.append('cedula', cedula);
                // formData.append('puesto', puesto);
                // formData.append('turno', turno);
                // formData.append('motivo', motivo);
                // formData.append('observaciones', observaciones);
                // if (evidencia) {
                //     formData.append('evidencia', evidencia);
                // }
                // fetch('/api/registrar_ausencia', {
                //     method: 'POST',
                //     body: formData
                // })
                // .then(response => response.json())
                // .then(data => {
                //     alert('Ausencia registrada con éxito (simulado): ' + JSON.stringify(data));
                //     this.reset(); // Limpiar formulario
                //     showPage('plataforma-operativa-page'); // Volver a la plataforma
                // })
                // .catch(error => {
                //     console.error('Error al registrar ausencia:', error);
                //     alert('Hubo un error al registrar la ausencia.');
                // });

                alert(`Ausencia de Unidad Registrada (simulado):\nC.C.: ${cedula}\nPuesto: ${puesto}\nTurno: ${turno}\nMotivo: ${motivo}\nObservaciones: ${observaciones}\nEvidencia: ${evidencia ? evidencia.name : 'No'}`);
                this.reset(); // Limpiar formulario
                showPage('plataforma-operativa-page'); // Regresar a la plataforma operativa
            });

            // Example: Autocompletar nombre al ingresar Cédula
            const ausenciaCedulaInput = document.getElementById('ausencia-cedula');
            const ausenciaNombreInput = document.getElementById('ausencia-nombre');
            ausenciaCedulaInput.addEventListener('blur', () => {
                const cedula = ausenciaCedulaInput.value;
                if (cedula === '123456789') { // Simulación de búsqueda
                    ausenciaNombreInput.value = 'Juan Pérez';
                } else {
                    ausenciaNombreInput.value = 'Unidad no encontrada';
                }
            });
        }

        // Example: Formulario de Registro de Unidad Evadida
        const formUnidadEvadida = document.getElementById('form-unidad-evadida');
        if (formUnidadEvadida) {
            formUnidadEvadida.addEventListener('submit', function(event) {
                event.preventDefault();

                const cedula = document.getElementById('evadida-cedula').value;
                const puesto = document.getElementById('evadida-puesto').value;
                const hora = document.getElementById('evadida-hora').value;
                const circunstancias = document.getElementById('evadida-circunstancias').value;
                const evidencia = document.getElementById('evadida-evidencia').files[0];

                alert(`Unidad Evadida Registrada (simulado):\nC.C.: ${cedula}\nPuesto: ${puesto}\nHora: ${hora}\nCircunstancias: ${circunstancias}\nEvidencia: ${evidencia ? evidencia.name : 'No'}`);
                this.reset();
                showPage('plataforma-operativa-page');
            });

            // Example: Autocompletar nombre al ingresar Cédula
            const evadidaCedulaInput = document.getElementById('evadida-cedula');
            const evadidaNombreInput = document.getElementById('evadida-nombre');
            evadidaCedulaInput.addEventListener('blur', () => {
                const cedula = evadidaCedulaInput.value;
                if (cedula === '123456789') { // Simulación de búsqueda
                    evadidaNombreInput.value = 'Juan Pérez';
                } else {
                    evadidaNombreInput.value = 'Unidad no encontrada';
                }
            });
        }

        // Example: Formulario de Reporte de Condiciones Inseguras
        const formCondicionInsegura = document.getElementById('form-condicion-insegura');
        if (formCondicionInsegura) {
            formCondicionInsegura.addEventListener('submit', function(event) {
                event.preventDefault();

                const ubicacion = document.getElementById('condicion-ubicacion').value;
                const descripcion = document.getElementById('condicion-descripcion').value;
                const tipo = document.getElementById('condicion-tipo').value;
                const severidad = document.getElementById('condicion-severidad').value;
                const acciones = document.getElementById('condicion-acciones').value;
                const cedulaReportante = document.getElementById('condicion-reportante-cedula').value;
                const evidencia = document.getElementById('condicion-evidencia').files[0];

                alert(`Condición Insegura Reportada (simulado):\nUbicación: ${ubicacion}\nDescripción: ${descripcion}\nTipo: ${tipo}\nSeveridad: ${severidad}\nReportante C.C.: ${cedulaReportante}\nEvidencia: ${evidencia ? evidencia.name : 'No'}`);
                this.reset();
                showPage('plataforma-operativa-page');
            });

            // Example: Autocompletar nombre al ingresar Cédula
            const condicionReportanteCedulaInput = document.getElementById('condicion-reportante-cedula');
            const condicionReportanteNombreInput = document.getElementById('condicion-reportante-nombre');
            condicionReportanteCedulaInput.addEventListener('blur', () => {
                const cedula = condicionReportanteCedulaInput.value;
                if (cedula === 'OMAR ACONCHA CASTIBLANCO') { // Simulación de búsqueda
                    condicionReportanteNombreInput.value = 'OMAR ACONCHA CASTIBLANCO';
                } else if (cedula === '123456789') {
                     condicionReportanteNombreInput.value = 'Juan Pérez';
                }
                else {
                    condicionReportanteNombreInput.value = 'Usuario no encontrado';
                }
            });
        }

        // Example: Formulario de Gestión de Informes (General)
        const informesGeneralForm = document.getElementById('informes-general-form');
        if (informesGeneralForm) {
            informesGeneralForm.addEventListener('submit', function(event) {
                event.preventDefault();
                const tipoInforme = document.getElementById('informe-tipo').value;
                const fechaInicio = document.getElementById('informe-fecha-inicio').value;
                const fechaFin = document.getElementById('informe-fecha-fin').value;
                const cedula = document.getElementById('informe-cedula').value;
                const puesto = document.getElementById('informe-puesto').value;
                const turno = document.getElementById('informe-turno').value;

                alert(`Generando Informe (simulado):\nTipo: ${tipoInforme}\nFechas: ${fechaInicio} a ${fechaFin}\nC.C.: ${cedula || 'N/A'}\nPuesto: ${puesto || 'N/A'}\nTurno: ${turno || 'N/A'}`);
                // Aquí iría la lógica para cargar el informe, quizás en otra sección o abriendo un PDF.
            });
        }

        // Example: Formulario de Registro/Consulta de Novedades (General)
        const novedadesGeneralForm = document.getElementById('registro-novedades-general-page'); // Corrected ID
        if (novedadesGeneralForm) {
             const consultaNovedadesForm = novedadesGeneralForm.querySelector('#novedades-general-form'); // Target the form inside the page
             if(consultaNovedadesForm){
                consultaNovedadesForm.addEventListener('submit', function(event) {
                    event.preventDefault();
                    const tipoNovedad = document.getElementById('consulta-novedad-tipo').value;
                    const fechaInicio = document.getElementById('consulta-novedad-fecha-inicio').value;
                    const fechaFin = document.getElementById('consulta-novedad-fecha-fin').value;
                    const cedula = document.getElementById('consulta-novedad-cedula').value;
                    const puesto = document.getElementById('consulta-novedad-puesto').value;

                    const resultsDiv = document.getElementById('novedades-results');
                    resultsDiv.innerHTML = `<p>Buscando novedades de tipo "${tipoNovedad}" entre ${fechaInicio} y ${fechaFin}...</p>`;
                    // En un escenario real, aquí se haría una llamada a la API y se mostrarían los resultados.
                    setTimeout(() => { // Simula una respuesta de API
                        resultsDiv.innerHTML = `
                            <h3>Resultados de Novedades (Simulados):</h3>
                            <ul>
                                <li><strong>Ausencia de Unidad</strong> - CC: 123456789 - Puesto: Recepción ABC - Fecha: 2025-05-28</li>
                                <li><strong>Unidad Evadida</strong> - CC: 987654321 - Puesto: Portería La Floresta - Fecha: 2025-05-29</li>
                                <li><strong>Condición Insegura</strong> - Ubicación: Pasillo Principal - Fecha: 2025-05-30</li>
                            </ul>
                        `;
                    }, 1500);
                });
            }
        }


        // ... (showPage, cerrarConfirmacionGuardar, mostrarConfirmacionGuardar functions remain the same) ...

        // --- Lógica de Inicialización ---

        document.addEventListener('DOMContentLoaded', () => {
            // Determina qué página mostrar al cargar basándose en el hash
            const initialHash = window.location.hash.substring(1); // Obtiene 'inicio' de '#inicio'
            // Lista de hashes válidos que corresponden a IDs de página
            const validPageHashes = [
                'login', 'registro', 'olvido-contrasena',
                'inicio', 'mi-perfil', 'plataforma-operativa',
                'talento-humano', 'nomina', 'registro-visita',
                // Add the new page hashes here:
                'gestion-informes-general',
                'registro-novedades-general',
                'novedad-ausencia',
                'novedad-unidad-evadida',
                'reporte-condiciones-inseguras',
                'visualizacion-alertas'
            ];


            if (initialHash && validPageHashes.includes(initialHash)) {
                showPage(initialHash + '-page'); // Muestra la página correspondiente al hash si es válido
            } else {
                // Si no hay hash válido o no está presente, muestra la página de login por defecto
                showPage('login-page');
            }

            // Escuchar cambios en el hash de la URL (para navegación con botón atrás/adelante del navegador)
            window.addEventListener('hashchange', () => {
                const hash = window.location.hash.substring(1);
                if (hash === '') { // Manejar caso donde el hash se limpia (ej. manualmente o logout)
                    showPage('login-page');
                } else if (validPageHashes.includes(hash)) {
                    showPage(hash + '-page');
                } else {
                     // Manejar hash inválido - podrías redirigir al login o mostrar un error
                     console.warn('Hash inválido en la URL:', window.location.hash);
                    // showPage('login-page'); // Opcional: redirigir al login
                }
            });

        });// ... (existing JavaScript code) ...

            // Lista de hashes válidos que corresponden a IDs de página
            const validPageHashes = [
                'login', 'registro', 'olvido-contrasena',
                'inicio', 'mi-perfil', 'plataforma-operativa',
                'talento-humano', 'nomina', 'registro-visita',
                // Add the new page hashes here:
                'gestion-informes-general',
                'registro-novedades-general',
                'novedad-ausencia',
                'novedad-unidad-evadida',
                'reporte-condiciones-inseguras',
                'visualizacion-alertas'
            ];

            // ... (rest of your JavaScript code) ...
        });// ... (existing JavaScript code) ...

        // --- Novedades Registro Dinámico ---
        const tipoNovedadRegistro = document.getElementById('tipo-novedad-registro');
        const novedadFormContainer = document.getElementById('novedad-form-container');

        const formsHtml = {
            'ausencia': `
                <form id="form-registro-ausencia" enctype="multipart/form-data">
                    <h3>Registrar Ausencia de Unidad</h3>
                    <label for="reg-ausencia-cedula">Cédula de Ciudadanía de la Unidad Ausente:</label>
                    <input type="text" id="reg-ausencia-cedula" name="cedula" required placeholder="Ej: 1012345678">
                    <label for="reg-ausencia-nombre">Nombre de la Unidad Ausente:</label>
                    <input type="text" id="reg-ausencia-nombre" name="nombre_unidad" readonly placeholder="Se autocompletará">

                    <label for="reg-ausencia-puesto">Puesto de Trabajo Afectado:</label>
                    <select id="reg-ausencia-puesto" name="puesto_afectado" required>
                        <option value="">Seleccione...</option>
                        <option value="recepcion-abc">Recepción Principal Edificio ABC</option>
                        <option value="porteria-floresta">Portería Vehicular La Floresta</option>
                    </select>

                    <label for="reg-ausencia-turno">Turno Afectado:</label>
                    <select id="reg-ausencia-turno" name="turno_afectado" required>
                        <option value="">Seleccione...</option>
                        <option value="mañana">Mañana</option>
                        <option value="tarde">Tarde</option>
                        <option value="noche">Noche</option>
                    </select>

                    <label for="reg-ausencia-fecha-inicio">Fecha y Hora Inicio Ausencia:</label>
                    <input type="datetime-local" id="reg-ausencia-fecha-inicio" name="fecha_inicio" required>

                    <label for="reg-ausencia-fecha-fin">Fecha y Hora Fin Ausencia (Estimado):</label>
                    <input type="datetime-local" id="reg-ausencia-fecha-fin" name="fecha_fin" required>

                    <label for="reg-ausencia-observaciones">Observaciones Adicionales:</label>
                    <textarea id="reg-ausencia-observaciones" name="observaciones" rows="3" placeholder="Detalles de la ausencia"></textarea>

                    <label for="reg-ausencia-evidencia">Evidencia (Opcional):</label>
                    <input type="file" id="reg-ausencia-evidencia" name="evidencia_ausencia" accept="image/*,application/pdf">
                    <small>Adjunte una imagen o PDF si es necesario (Ej. foto del puesto vacío).</small>

                    <button type="submit">Registrar Ausencia</button>
                </form>
            `,
            'incapacidad': `
                <form id="form-registro-incapacidad" enctype="multipart/form-data">
                    <h3>Registrar Incapacidad</h3>
                    <label for="reg-incapacidad-cedula">Cédula de Ciudadanía del Empleado:</label>
                    <input type="text" id="reg-incapacidad-cedula" name="cedula" required placeholder="Ej: 1012345678">
                    <label for="reg-incapacidad-nombre">Nombre del Empleado:</label>
                    <input type="text" id="reg-incapacidad-nombre" name="nombre_empleado" readonly placeholder="Se autocompletará">

                    <label for="reg-incapacidad-tipo">Tipo de Incapacidad:</label>
                    <select id="reg-incapacidad-tipo" name="tipo_incapacidad" required>
                        <option value="">Seleccione...</option>
                        <option value="general">Enfermedad General</option>
                        <option value="laboral">Accidente Laboral</option>
                        <option value="maternidad">Maternidad/Paternidad</option>
                    </select>

                    <label for="reg-incapacidad-fecha-inicio">Fecha de Inicio de Incapacidad:</label>
                    <input type="date" id="reg-incapacidad-fecha-inicio" name="fecha_inicio_incapacidad" required>

                    <label for="reg-incapacidad-dias">Número de Días Incapacidad:</label>
                    <input type="number" id="reg-incapacidad-dias" name="dias_incapacidad" min="1" required>

                    <label for="reg-incapacidad-diagnostico">Diagnóstico (Opcional):</label>
                    <textarea id="reg-incapacidad-diagnostico" name="diagnostico" rows="2" placeholder="Breve descripción del diagnóstico"></textarea>

                    <label for="reg-incapacidad-soporte">Soporte Médico (Certificado):</label>
                    <input type="file" id="reg-incapacidad-soporte" name="soporte_incapacidad" accept="image/*,application/pdf" required>
                    <small>Adjunte el certificado médico de incapacidad.</small>

                    <button type="submit">Registrar Incapacidad</button>
                </form>
            `,
            'licencia-remunerada': `
                <form id="form-registro-licencia-remunerada" enctype="multipart/form-data">
                    <h3>Registrar Licencia Remunerada</h3>
                    <label for="reg-lic-rem-cedula">Cédula de Ciudadanía del Empleado:</label>
                    <input type="text" id="reg-lic-rem-cedula" name="cedula" required placeholder="Ej: 1012345678">
                    <label for="reg-lic-rem-nombre">Nombre del Empleado:</label>
                    <input type="text" id="reg-lic-rem-nombre" name="nombre_empleado" readonly placeholder="Se autocompletará">

                    <label for="reg-lic-rem-motivo">Motivo de la Licencia Remunerada:</label>
                    <select id="reg-lic-rem-motivo" name="motivo_licencia" required>
                        <option value="">Seleccione...</option>
                        <option value="luto">Licencia por Luto</option>
                        <option value="matrimonio">Licencia por Matrimonio</option>
                        <option value="calamidad">Calamidad Doméstica (grave)</option>
                        <option value="otro">Otro</option>
                    </select>

                    <label for="reg-lic-rem-fecha-inicio">Fecha de Inicio de Licencia:</label>
                    <input type="date" id="reg-lic-rem-fecha-inicio" name="fecha_inicio_licencia" required>

                    <label for="reg-lic-rem-dias">Número de Días de Licencia:</label>
                    <input type="number" id="reg-lic-rem-dias" name="dias_licencia" min="1" required>

                    <label for="reg-lic-rem-observaciones">Observaciones:</label>
                    <textarea id="reg-lic-rem-observaciones" name="observaciones" rows="2" placeholder="Detalles o condiciones de la licencia"></textarea>

                    <label for="reg-lic-rem-soporte">Soporte (Documento):</label>
                    <input type="file" id="reg-lic-rem-soporte" name="soporte_licencia" accept="image/*,application/pdf">
                    <small>Adjunte documento de soporte (ej. certificado de defunción, registro de matrimonio).</small>

                    <button type="submit">Registrar Licencia Remunerada</button>
                </form>
            `,
            'permiso-remunerado': `
                <form id="form-registro-permiso-remunerado" enctype="multipart/form-data">
                    <h3>Registrar Permiso Remunerado</h3>
                    <label for="reg-perm-rem-cedula">Cédula de Ciudadanía del Empleado:</label>
                    <input type="text" id="reg-perm-rem-cedula" name="cedula" required placeholder="Ej: 1012345678">
                    <label for="reg-perm-rem-nombre">Nombre del Empleado:</label>
                    <input type="text" id="reg-perm-rem-nombre" name="nombre_empleado" readonly placeholder="Se autocompletará">

                    <label for="reg-perm-rem-motivo">Motivo del Permiso Remunerado:</label>
                    <textarea id="reg-perm-rem-motivo" name="motivo_permiso" rows="2" required placeholder="Describa el motivo del permiso"></textarea>

                    <label for="reg-perm-rem-fecha">Fecha del Permiso:</label>
                    <input type="date" id="reg-perm-rem-fecha" name="fecha_permiso" required>

                    <label for="reg-perm-rem-hora-inicio">Hora Inicio:</label>
                    <input type="time" id="reg-perm-rem-hora-inicio" name="hora_inicio" required>

                    <label for="reg-perm-rem-hora-fin">Hora Fin:</label>
                    <input type="time" id="reg-perm-rem-hora-fin" name="hora_fin" required>

                    <label for="reg-perm-rem-soporte">Soporte (Opcional):</label>
                    <input type="file" id="reg-perm-rem-soporte" name="soporte_permiso" accept="image/*,application/pdf">
                    <small>Adjunte algún soporte si es necesario.</small>

                    <button type="submit">Registrar Permiso Remunerado</button>
                </form>
            `,
            'licencia-no-remunerada': `
                <form id="form-registro-licencia-no-remunerada" enctype="multipart/form-data">
                    <h3>Registrar Licencia No Remunerada</h3>
                    <label for="reg-lic-no-rem-cedula">Cédula de Ciudadanía del Empleado:</label>
                    <input type="text" id="reg-lic-no-rem-cedula" name="cedula" required placeholder="Ej: 1012345678">
                    <label for="reg-lic-no-rem-nombre">Nombre del Empleado:</label>
                    <input type="text" id="reg-lic-no-rem-nombre" name="nombre_empleado" readonly placeholder="Se autocompletará">

                    <label for="reg-lic-no-rem-motivo">Motivo de la Licencia No Remunerada:</label>
                    <textarea id="reg-lic-no-rem-motivo" name="motivo_licencia" rows="3" required placeholder="Describa el motivo de la licencia"></textarea>

                    <label for="reg-lic-no-rem-fecha-inicio">Fecha de Inicio de Licencia:</label>
                    <input type="date" id="reg-lic-no-rem-fecha-inicio" name="fecha_inicio_licencia" required>

                    <label for="reg-lic-no-rem-dias">Número de Días de Licencia (Estimado):</label>
                    <input type="number" id="reg-lic-no-rem-dias" name="dias_licencia" min="1" required>

                    <label for="reg-lic-no-rem-soporte">Soporte (Solicitud del Empleado - Opcional):</label>
                    <input type="file" id="reg-lic-no-rem-soporte" name="soporte_licencia" accept="image/*,application/pdf">
                    <small>Adjunte solicitud del empleado si aplica.</small>

                    <button type="submit">Registrar Licencia No Remunerada</button>
                </form>
            `,
            'permiso-no-remunerado': `
                <form id="form-registro-permiso-no-remunerado" enctype="multipart/form-data">
                    <h3>Registrar Permiso No Remunerado</h3>
                    <label for="reg-perm-no-rem-cedula">Cédula de Ciudadanía del Empleado:</label>
                    <input type="text" id="reg-perm-no-rem-cedula" name="cedula" required placeholder="Ej: 1012345678">
                    <label for="reg-perm-no-rem-nombre">Nombre del Empleado:</label>
                    <input type="text" id="reg-perm-no-rem-nombre" name="nombre_empleado" readonly placeholder="Se autocompletará">

                    <label for="reg-perm-no-rem-motivo">Motivo del Permiso No Remunerado:</label>
                    <textarea id="reg-perm-no-rem-motivo" name="motivo_permiso" rows="2" required placeholder="Describa el motivo del permiso"></textarea>

                    <label for="reg-perm-no-rem-fecha">Fecha del Permiso:</label>
                    <input type="date" id="reg-perm-no-rem-fecha" name="fecha_permiso" required>

                    <label for="reg-perm-no-rem-hora-inicio">Hora Inicio:</label>
                    <input type="time" id="reg-perm-no-rem-hora-inicio" name="hora_inicio" required>

                    <label for="reg-perm-no-rem-hora-fin">Hora Fin:</label>
                    <input type="time" id="reg-perm-no-rem-hora-fin" name="hora_fin" required>

                    <label for="reg-perm-no-rem-soporte">Soporte (Opcional):</label>
                    <input type="file" id="reg-perm-no-rem-soporte" name="soporte_permiso" accept="image/*,application/pdf">
                    <small>Adjunte algún soporte si es necesario.</small>

                    <button type="submit">Registrar Permiso No Remunerado</button>
                </form>
            `,
            'unidad-evadida': `
                <form id="form-registro-unidad-evadida" enctype="multipart/form-data">
                    <h3>Registrar Unidad Evadida</h3>
                    <label for="reg-evadida-cedula">Cédula de Ciudadanía de la Unidad Evadida:</label>
                    <input type="text" id="reg-evadida-cedula" name="cedula" required placeholder="Ej: 1012345678">
                    <label for="reg-evadida-nombre">Nombre de la Unidad Evadida:</label>
                    <input type="text" id="reg-evadida-nombre" name="nombre_unidad" readonly placeholder="Se autocompletará">

                    <label for="reg-evadida-puesto">Puesto de Trabajo:</label>
                    <select id="reg-evadida-puesto" name="puesto_evadido" required>
                        <option value="">Seleccione...</option>
                        <option value="recepcion-abc">Recepción Principal Edificio ABC</option>
                        <option value="porteria-floresta">Portería Vehicular La Floresta</option>
                        </select>

                    <label for="reg-evadida-hora">Hora Estimada de la Evasión:</label>
                    <input type="time" id="reg-evadida-hora" name="hora_evasion" required>

                    <label for="reg-evadida-circunstancias">Circunstancias/Detalles de la Evasión:</label>
                    <textarea id="reg-evadida-circunstancias" name="circunstancias" rows="4" required placeholder="Describa cómo se detectó la evasión"></textarea>

                    <label for="reg-evadida-evidencia">Evidencia (Opcional):</label>
                    <input type="file" id="reg-evadida-evidencia" name="evidencia_evasion" accept="image/*,application/pdf">
                    <small>Adjunte una imagen o PDF si es necesario (Ej. foto del puesto sin personal).</small>

                    <button type="submit">Registrar Unidad Evadida</button>
                </form>
            `,
            'condicion-insegura': `
                <form id="form-registro-condicion-insegura" enctype="multipart/form-data">
                    <h3>Reporte de Condición Insegura</h3>
                    <label for="reg-condicion-ubicacion">Ubicación/Puesto:</label>
                    <input type="text" id="reg-condicion-ubicacion" name="ubicacion" required placeholder="Ej: Recepción, Pasillo 3, Puesto X">

                    <label for="reg-condicion-descripcion">Descripción Detallada de la Condición Insegura:</label>
                    <textarea id="reg-condicion-descripcion" name="descripcion" rows="5" required placeholder="Describa el riesgo y sus características"></textarea>

                    <label for="reg-condicion-tipo">Tipo de Condición:</label>
                    <select id="reg-condicion-tipo" name="tipo_condicion" required>
                        <option value="">Seleccione...</option>
                        <option value="infraestructura">Infraestructura (ej. cable suelto, piso mojado)</option>
                        <option value="equipo">Equipo (ej. máquina defectuosa)</option>
                        <option value="procedimiento">Procedimiento (ej. falta de señalización)</option>
                        <option value="acto-inseguro">Acto Inseguro de Persona</option>
                        <option value="otro">Otro</option>
                    </select>

                    <label for="reg-condicion-severidad">Impacto Potencial/Severidad:</label>
                    <select id="reg-condicion-severidad" name="severidad" required>
                        <option value="">Seleccione...</option>
                        <option value="bajo">Bajo</option>
                        <option value="medio">Medio</option>
                        <option value="alto">Alto</option>
                    </select>

                    <label for="reg-condicion-reportante-cedula">Cédula de Ciudadanía del Reportante:</label>
                    <input type="text" id="reg-condicion-reportante-cedula" name="cedula_reportante" required placeholder="Su C.C.">

                    <label for="reg-condicion-reportante-nombre">Nombre del Reportante:</label>
                    <input type="text" id="reg-condicion-reportante-nombre" name="nombre_reportante" readonly placeholder="Se autocompletará">

                    <label for="reg-condicion-evidencia">Evidencia Fotográfica (Opcional):</label>
                    <input type="file" id="reg-condicion-evidencia" name="evidencia_condicion" accept="image/*">
                    <small>Adjunte una imagen del riesgo.</small>

                    <button type="submit">Reportar Condición Insegura</button>
                </form>
            `
        };

        const setupFormListeners = (formId) => {
            const form = document.getElementById(formId);
            if (form) {
                form.addEventListener('submit', function(event) {
                    event.preventDefault();
                    const formData = new FormData(form);
                    let data = {};
                    for (let [key, value] of formData.entries()) {
                        if (value instanceof File) {
                            data[key] = value.name; // For display, in real app, handle file upload separately
                        } else {
                            data[key] = value;
                        }
                    }
                    alert(`Novedad de tipo "${formId.replace('form-registro-', '').replace('form-reporte-', '')}" registrada (simulado):\n${JSON.stringify(data, null, 2)}`);
                    this.reset();
                    novedadFormContainer.innerHTML = '<p>Seleccione un tipo de novedad para ver el formulario correspondiente.</p>'; // Clear form area
                    tipoNovedadRegistro.value = ""; // Reset dropdown
                    // showPage('plataforma-operativa-page'); // Option to return to main platform
                });

                // --- Autocompletion for Cédula fields within dynamically loaded forms ---
                const cedulaInputs = form.querySelectorAll('input[id$="-cedula"]');
                cedulaInputs.forEach(input => {
                    const nameInputId = input.id.replace('-cedula', '-nombre') || input.id.replace('-reportante-cedula', '-reportante-nombre');
                    const nameInput = document.getElementById(nameInputId);
                    if (nameInput) {
                        input.addEventListener('blur', () => {
                            const cedula = input.value;
                            if (cedula === '1013656722') { // Julián Esteban Hernández García
                                nameInput.value = 'JULIÁN ESTEBAN HERNÁNDEZ GARCÍA';
                            } else if (cedula === '80048004') { // Omar Aconcha Castiblanco
                                nameInput.value = 'OMAR ACONCHA CASTIBLANCO';
                            } else if (cedula === '123456789') { // Example user
                                nameInput.value = 'Juan Pérez';
                            } else {
                                nameInput.value = 'Usuario no encontrado';
                            }
                        });
                    }
                });
            }
        };

        tipoNovedadRegistro.addEventListener('change', () => {
            const selectedType = tipoNovedadRegistro.value;
            if (selectedType && formsHtml[selectedType]) {
                novedadFormContainer.innerHTML = formsHtml[selectedType];
                // Once the HTML is in the DOM, set up the listeners for the new form
                setupFormListeners(`form-registro-${selectedType}`.replace('form-registro-condicion-insegura', 'form-registro-condicion-insegura').replace('form-registro-unidad-evadida', 'form-registro-unidad-evadida'));
            } else {
                novedadFormContainer.innerHTML = '<p>Seleccione un tipo de novedad para ver el formulario correspondiente.</p>';
            }
        });

        // Ensure the general novedades consultation form is targeted correctly
        const novedadesConsultaForm = document.getElementById('novedades-consulta-form');
        if (novedadesConsultaForm) {
            novedadesConsultaForm.addEventListener('submit', function(event) {
                event.preventDefault();
                const tipoNovedad = document.getElementById('consulta-novedad-tipo').value;
                const fechaInicio = document.getElementById('consulta-novedad-fecha-inicio').value;
                const fechaFin = document.getElementById('consulta-novedad-fecha-fin').value;
                const cedula = document.getElementById('consulta-novedad-cedula').value;
                const puesto = document.getElementById('consulta-novedad-puesto').value;

                const resultsDiv = document.getElementById('novedades-results');
                resultsDiv.innerHTML = `<p>Buscando novedades de tipo "${tipoNovedad}" entre ${fechaInicio} y ${fechaFin}...</p>`;
                // En un escenario real, aquí se haría una llamada a la API y se mostrarían los resultados.
                setTimeout(() => { // Simula una respuesta de API
                    resultsDiv.innerHTML = `
                        <h3>Resultados de Novedades (Simulados):</h3>
                        <ul>
                            <li><strong>Ausencia de Unidad</strong> - CC: 123456789 - Puesto: Recepción ABC - Fecha: 2025-05-28</li>
                            <li><strong>Incapacidad</strong> - CC: 80048004 - Tipo: Enfermedad General - Fecha: 2025-05-27</li>
                            <li><strong>Licencia Remunerada</strong> - CC: 1013656722 - Motivo: Luto - Fecha: 2025-05-25</li>
                            <li><strong>Unidad Evadida</strong> - CC: 987654321 - Puesto: Portería La Floresta - Fecha: 2025-05-29</li>
                            <li><strong>Condición Insegura</strong> - Ubicación: Pasillo Principal - Fecha: 2025-05-30</li>
                        </ul>
                    `;
                }, 1500);
            });
        }
        // ... (rest of your JavaScript code, including validPageHashes and DOMContentLoaded) ...
    }
});