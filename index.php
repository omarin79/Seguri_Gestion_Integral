<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SecuriGestión Integral - Inicio</title>
    <style>
        /* --- COLORES INSTITUCIONALES (EJEMPLO - ¡REEMPLAZAR!) --- */
        :root {
            --color-institucional-primario: #003366; /* Azul oscuro */
            --color-institucional-secundario: #f0f0f0; /* Gris claro */
            --color-institucional-texto-header: #ffffff; /* Texto blanco para header */
            --color-institucional-texto-footer: #333333; /* Texto oscuro para footer */
            --color-enlaces: #0056b3; /* Azul medio para enlaces */
            --watermark-opacity: 0.1; /* Opacidad de la marca de agua */
        }
        /* --- FIN COLORES INSTITUCIONALES --- */

        /* Estilos Generales del Body */
        body {
            font-family: sans-serif; /* Consistent font family */
            margin: 0;
            padding: 0;
            background-color: var(--color-institucional-secundario);
            position: relative;
            min-height: 100vh; /* Asegura que el body ocupa al menos toda la altura */
        }

        /* Marca de Agua con Logo Central */
        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: url('images/logo_central.jpg'); /* Relative path as per original CSS */
            background-repeat: no-repeat;
            background-position: center center;
            background-size: 80vw auto; /* Ajusta el tamaño */
            opacity: var(--watermark-opacity);
            z-index: -1;
            pointer-events: none;
        }

        /* Encabezado Unificado (SIEMPRE visible, fijo en la parte superior) */
        header.main-header {
            background-color: var(--color-institucional-primario);
            padding: 5px 20px;
            border-bottom: 1px solid #dee2e6;
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: fixed; /* Lo hace fijo en la ventana */
            top: 0; /* Lo fija en la parte superior */
            left: 0;
            right: 0;
            z-index: 100; /* Asegura que esté por encima de otros elementos */
            height: 60px; /* Altura fija para calcular el padding del contenido */
        }

        /* Estilos Contenedor Logo Header */
        .logo-container { }
        #header-logo {
            height: 50px; /* Ajusta según la altura del header */
            width: auto;
            vertical-align: middle;
            display: inline-block;
        }

        /* Contenedor para Nav y User Info (Derecha) */
        .header-right {
            display: flex;
            align-items: center;
        }

        /* Estilos de Navegación (Header) */
        header nav.main-nav {
            margin-right: 25px;
            text-align: left;
        }
        header nav ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        header nav ul li {
            display: inline-block;
            margin-left: 15px;
        }
        header nav ul li a {
            text-decoration: none;
            color: var(--color-institucional-texto-header);
            font-weight: bold;
            padding: 5px 0;
            display: inline-block;
            cursor: pointer; /* Indica que es clickeable */
        }
        header nav ul li a:hover {
            text-decoration: underline;
            color: #dddddd;
        }

        /* Estilos Info Usuario (Header) */
        .user-info {
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }
        .user-info img {
            height: 40px;
            width: 40px;
            border-radius: 50%;
            margin-right: 10px;
            border: 1px solid var(--color-institucional-texto-header);
        }
        .user-info span {
            color: var(--color-institucional-texto-header);
            font-weight: bold;
            white-space: nowrap;
        }
        /* --- Fin Estilos Encabezado --- */


        /* Pie de Página Unificado (SIEMPRE visible, fijo en la parte inferior) */
        footer {
            text-align: center;
            padding: 20px;
            background-color: var(--color-institucional-secundario);
            color: var(--color-institucional-texto-footer);
            border-top: 1px solid #ccc;
            position: fixed; /* Lo hace fijo en la ventana */
            bottom: 0; /* Lo fija en la parte inferior */
            left: 0;
            right: 0;
            z-index: 100; /* Asegura que esté por encima de otros elementos */
            height: 60px; /* Altura fija para calcular el padding del contenido */
        }

        /* Wrapper para el contenido principal para evitar que quede oculto detrás del header/footer fijos */
        #content-wrapper {
            padding-top: 70px; /* Añade padding igual o un poco mayor que la altura del header */
            padding-bottom: 70px; /* Añade padding igual o un poco mayor que la altura del footer */
            overflow-y: auto; /* Permite scroll si el contenido es largo */
            height: calc(100vh - 140px); /* Calcula la altura para que quepa entre header y footer */
            box-sizing: border-box; /* Incluye padding en el cálculo de altura */
        }

        /* Contenedores de Página: Oculta todas por defecto */
        .page-content {
            display: none; /* Todas las "páginas" están ocultas por defecto */
            padding: 0 20px; /* Mantenemos padding horizontal */
        }

        /* Muestra solo la página activa */
        .page-content.active {
            display: block;
        }

        /* --- Estilos Específicos de Contenedores (de los HTML originales) --- */
        /* Contenedores de Login, Registro, Olvido (similares) */
        #login-page .login-container,
        #registro-page .login-container,
        #olvido-contrasena-page .login-container {
            max-width: 400px;
            /* Centrado sin margen superior/inferior, el padding del wrapper se encarga */
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border: 1px solid #ccc;
            box-shadow: 2px 2px 5px rgba(0,0,0,0.1);
            text-align: center;
            /* Asegura que estos contenedores se ajusten dentro del wrapper */
            min-height: calc(100vh - 140px - 40px); /* Ejemplo: Altura viewport - header - footer - padding vertical */
            display: flex; /* Usa flexbox para centrar verticalmente dentro de sí mismo */
            flex-direction: column;
            justify-content: center;
        }


        /* Contenedor de Registro Visita */
        #registro-visita-page .registro-container {
            max-width: 800px; /* Ajusta según el tamaño original si era diferente */
            /* Centrado sin margen superior/inferior */
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border: 1px solid #ccc;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            text-align: center;
        }

        /* Logo dentro de los contenedores de login/registro/olvido */
        .login-container .logo,
        .registro-container .logo {
            max-width: 100px;
            margin-bottom: 15px;
            display: block; /* Asegura que se muestre correctamente con flex */
            margin-left: auto;
            margin-right: auto;
        }

        /* Estilos de Secciones dentro del Inicio y Páginas de Módulo */
        #inicio-page section, /* Actualizado */
        #mi-perfil-page section,
        #plataforma-operativa-page section,
        #talento-humano-page section, /* ID Corregido */
        #nomina-page section,
        /* New pages */
        #gestion-informes-general-page section,
        #registro-novedades-general-page section,
        #visualizacion-alertas-page section {
            padding: 20px;
            margin: 20px auto;
            border-radius: 8px;
            max-width: 800px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.15);
            border: 1px solid #ddd;
            background-color: #fff;
            text-align: left;
        }
        #inicio-page section h1, #inicio-page section h2, /* Actualizado */
        #mi-perfil-page section h1, #mi-perfil-page section h2,
        #plataforma-operativa-page section h1, #plataforma-operativa-page section h2,
        #talento-humano-page section h1, #talento-humano-page section h2, /* ID Corregido */
        #nomina-page section h1, #nomina-page section h2,
        /* New pages */
        #gestion-informes-general-page section h1, #gestion-informes-general-page section h2,
        #registro-novedades-general-page section h1, #registro-novedades-general-page section h2,
        #visualizacion-alertas-page section h1, #visualizacion-alertas-page section h2 {
            border-bottom: 2px solid var(--color-institucional-primario);
            padding-bottom: 8px;
            margin-bottom: 20px;
            color: var(--color-institucional-primario);
        }
        #inicio-page section ul, /* Actualizado */
        #mi-perfil-page section ul,
        #plataforma-operativa-page section ul,
        #talento-humano-page section ul, /* ID Corregido */
        #nomina-page section ul,
        /* New pages */
        #gestion-informes-general-page section ul,
        #registro-novedades-general-page section ul,
        #visualizacion-alertas-page section ul {
            list-style: disc;
            padding-left: 25px;
        }
        #inicio-page section ul li, /* Actualizado */
        #mi-perfil-page section ul li,
        #plataforma-operativa-page section ul li,
        #talento-humano-page section ul li, /* ID Corregido */
        #nomina-page section ul li,
        /* New pages */
        #gestion-informes-general-page section ul li,
        #registro-novedades-general-page section ul li,
        #visualizacion-alertas-page section ul li {
            margin-bottom: 12px;
        }
        #inicio-page section ul li a, /* Actualizado */
        #mi-perfil-page section ul li a,
        #plataforma-operativa-page section ul li a,
        #talento-humano-page section ul li a, /* ID Corregido */
        #nomina-page section ul li a,
        /* New pages */
        #gestion-informes-general-page section ul li a,
        #registro-novedades-general-page section ul li a,
        #visualizacion-alertas-page section ul li a {
            text-decoration: none;
            color: var(--color-enlaces);
        }
        #inicio-page section ul li a:hover, /* Actualizado */
        #mi-perfil-page section ul li a:hover,
        #plataforma-operativa-page section ul li a:hover,
        #talento-humano-page section ul li a:hover, /* ID Corregido */
        #nomina-page section ul li a:hover,
        /* New pages */
        #gestion-informes-general-page section ul li a:hover,
        #registro-novedades-general-page section ul li a:hover,
        #visualizacion-alertas-page section ul li a:hover {
            text-decoration: underline;
        }

        /* Estilos de formularios */
        label { display: block; margin-top: 10px; text-align: left; font-weight: bold; }
        input[type="text"], input[type="password"], input[type="date"], input[type="time"], input[type="datetime-local"], input[type="number"], select, textarea, input[type="email"] {
            width: 100%; padding: 8px; margin-top: 5px; margin-bottom: 10px;
            border: 1px solid #ccc; box-sizing: border-box;
        }
        button {
            background-color: var(--color-enlaces); color: white; padding: 10px 15px;
            border: none; cursor: pointer; margin-top: 10px;
        }
        button:hover { background-color: #004494; }
        .login-links { margin-top: 15px; }
        .login-links a { margin: 0 10px; color: var(--color-enlaces); text-decoration: none; cursor: pointer; }
        .login-links a:hover { text-decoration: underline; }

        /* Estilo del mensaje de error */
        .error-message {
            background-color: #f8d7da; color: #721c24; border: 1px solid #f5c6cb;
            padding: 10px; margin-bottom: 10px; border-radius: 5px; display: none; /* Inicialmente oculto */
        }

        /* Estilos para el modal de confirmación */
        .modal {
            position: fixed; left: 50%; top: 50%; transform: translate(-50%, -50%);
            background-color: white; padding: 20px; border: 1px solid #ccc;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2); z-index: 1000; display: none; /* Inicialmente oculto */
        }

        /* Estilos de Fieldset */
        fieldset { margin-top: 15px; border: 1px solid #ccc; padding: 10px; text-align: left; }
        legend { font-weight: bold; }
        fieldset div { margin-bottom: 5px; }


        /* Media Queries */
        @media (max-width: 600px) {
            #login-page .login-container,
            #registro-page .login-container,
            #olvido-contrasena-page .login-container {
                margin: 0 auto; /* Sin margen superior/inferior */
                max-width: 90%;
                min-height: calc(100vh - 140px - 40px); /* Altura ajustada */
            }
            #registro-visita-page .registro-container {
                margin: 0 auto;
                max-width: 90%;
            }

            header.main-header {
                height: auto; /* Altura automática para que el menú se ajuste si es necesario */
                flex-direction: column; /* Apila logo y nav en pantallas pequeñas */
                align-items: flex-start; /* Alinea al inicio */
                padding: 10px; /* Más padding */
            }
            header nav.main-nav {
                margin-right: 0;
                margin-top: 10px; /* Espacio entre logo y nav */
                text-align: center;
                width: 100%; /* Ocupa todo el ancho */
            }
            header nav ul {
                text-align: center; /* Centra los elementos del menú */
            }
            header nav ul li {
                margin: 5px 8px; /* Espacio entre elementos apilados o en línea */
            }
            .header-right {
                width: 100%;
                justify-content: center; /* Centra nav y user-info */
                flex-direction: column; /* Apila nav y user-info */
            }
            .user-info {
                margin-top: 10px;
                justify-content: center; /* Centra la info de usuario */
            }

            #content-wrapper {
                padding-top: 100px; /* Ajusta el padding para el header adaptable */
                padding-bottom: 70px;
                height: calc(100vh - 170px); /* Ajusta la altura calculada */
            }
        }

    </style>
</head>
<body>

    <header class="main-header" id="app-header">
        <div class="logo-container">
            <img src="images/logo_segurigestion.png" alt="Logo SecuriGestión Integral" id="header-logo">
        </div>

        <div class="header-right">
            <nav class="main-nav">
                <ul>
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#plataforma-operativa">Plataforma Operativa</a></li>
                    <li><a href="#talento-humano">Talento Humano</a></li>
                    <li><a href="#nomina">Nómina</a></li>
                    <li><a href="#registro-visita">Registrar Visita</a></li>
                    <li><a href="#mi-perfil">Mi Perfil</a></li>
                    <li><a href="#logout">Cerrar Sesión</a></li>
                </ul>
            </nav>
            <div class="user-info">
                <img src="images/user2-160x160.jpg" alt="Foto de Usuario">
                <span id="logged-in-username">Invitado</span>
            </div>
        </div>
    </header>

    <div id="content-wrapper">

        <div id="login-page" class="page-content active">
            <div class="login-container">
                <img src="images/logo_jh.png" alt="Logo SecuriGestiónIntegral" class="logo">
                <h1>SecuriGestiónIntegral</h1>
                <form id="login-form">
                    <div class="error-message" id="login-error-message">Ingreso errado / Contraseña errada</div>

                    <label for="username">Nombre de usuario:</label>
                    <input type="text" id="username" name="username" required>

                    <label for="password">Contraseña:</label>
                    <input type="password" id="password" name="password" required>

                    <div class="intentos-restantes" style="display: none;">Quedan X intentos</div>

                    <button type="submit">Ingresar</button>

                    <div class="login-links">
                        <a href="#olvido-contrasena">Olvidó su contraseña?</a>
                        <a href="#">Ayuda</a> <a href="#registro">Registrarse</a>
                    </div>
                </form>
            </div>
        </div>

        <div id="registro-page" class="page-content">
            <div class="login-container"> <img src="images/logo_jh.png" alt="Logo SecuriGestiónIntegral" class="logo">
                <h1>Registro de Usuario</h1>
                <form id="registro-form">
                    <label for="nombre-completo">Nombre Completo:</label>
                    <input type="text" id="nombre-completo" name="nombre-completo" required>

                    <label for="email-registro">Correo Electrónico:</label>
                    <input type="email" id="email-registro" name="email-registro" required>

                    <label for="password-registro">Contraseña:</label>
                    <input type="password" id="password-registro" name="password-registro" required>

                    <label for="confirmar-password">Confirmar Contraseña:</label>
                    <input type="password" id="confirmar-password" name="confirmar-password" required>

                    <button type="submit">Registrarse</button>

                    <div class="login-links">
                        <a href="#login">Ya tengo cuenta</a>
                    </div>
                </form>
            </div>
        </div>

        <div id="olvido-contrasena-page" class="page-content">
            <div class="login-container"> <img src="images/logo_jh.png" alt="Logo SecuriGestiónIntegral" class="logo">
                <h1>Recuperar Contraseña</h1>
                <p>Ingresa tu correo electrónico o nombre de usuario y te enviaremos instrucciones para restablecer tu contraseña.</p>
                <form id="recuperar-form">
                    <label for="email-recuperar">Correo Electrónico o Nombre de Usuario:</label>
                    <input type="text" id="email-recuperar" name="email-recuperar" required>

                    <button type="submit">Enviar Instrucciones</button>

                    <div class="login-links">
                        <a href="#login">Volver al Inicio de Sesión</a>
                    </div>
                </form>
            </div>
        </div>

        <div id="inicio-page" class="page-content"> <main>
                <h1>Inicio Principal</h1> <section id="seccion-mi-perfil-inicio"> <h2>Información del Usuario:</h2>
                    <p>Aquí puedes ver tu información personal.</p>
                    <ul>
                        <li>Nombre: <span id="dashboard-username">OMAR ACONCHA CASTIBLANCO</span></li> <li>Correo: <span id="dashboard-email">omaracon@securigestion.com.co</span></li>
                        <li>Rol: <span id="dashboard-role">Supervisor</span></li>
                        <li><a href="#mi-perfil">Ver Perfil Completo</a></li> </ul>
                </section>

                <section id="seccion-plataforma-operativa-inicio"> <h1>Plataforma Operativa</h1>
                    <h2>Módulos Disponibles:</h2>
                    <ul>
                        <li><a href="#plataforma-operativa">Gestión de Informes</a></li> <li><a href="#plataforma-operativa">Registro/Consulta de Novedades</a></li>
                        <li><a href="#plataforma-operativa">Reporte de Condiciones Inseguras</a></li>
                        <li><a href="#plataforma-operativa">Visualización de Alertas</a></li>
                    </ul>
                </section>

                <section id="seccion-talento-humano-inicio"> <h1>Talento Humano</h1>
                    <h2>Gestión Documental:</h2>
                    <ul>
                        <li><a href="#talento-humano">Gestión de Cartas Laborales</a></li>
                        </ul>
                    <h2>Módulos Disponibles:</h2> <ul> <li><a href="#talento-humano">Consultar Documentos Empleado</a></li>
                        <li><a href="#talento-humano">Actualizar Datos Personales (Básico)</a></li>
                    </ul>
                </section>

                <section id="seccion-nomina-inicio"> <h1>Nómina</h1>
                    <h2>Consultas y Reportes:</h2>
                    <ul>
                        <li><a href="#nomina">Consultar/Descargar Desprendibles de Pago</a></li>
                        <li><a href="#nomina">Generar Certificado de Ingresos</a></li>
                        <li><a href="#nomina">Generar Otros Reportes de Nómina</a></li>
                    </ul>
                </section>
            </main>
        </div>

        <div id="mi-perfil-page" class="page-content">
            <main>
                <section>
                    <h2>Información del Usuario:</h2>
                    <p>Aquí puedes ver tu información personal y realizar cambios básicos.</p>
                    <form id="mi-perfil-form">
                        <fieldset>
                            <legend>Datos Personales (Visualización)</legend>
                            <div>Nombre: <strong id="mi-perfil-nombre-display">OMAR ACONCHA CASTIBLANCO</strong></div>
                            <div>Correo: <strong id="mi-perfil-email-display">omaracon@securigestion.com.co</strong></div>
                            <div>Rol: <strong id="mi-perfil-rol-display">Supervisor</strong></div>
                            <div>Cédula: <strong id="mi-perfil-cedula-display">[DATO_CSV_CEDULA]</strong></div>
                        </fieldset>

                        <fieldset>
                            <legend>Actualizar Información de Contacto</legend>
                            <label for="mi-perfil-telefono">Teléfono:</label>
                            <input type="tel" id="mi-perfil-telefono" name="telefono" placeholder="Tu número de teléfono">

                            <label for="mi-perfil-direccion">Dirección de Residencia:</label>
                            <input type="text" id="mi-perfil-direccion" name="direccion" placeholder="Tu dirección">
                            <button type="submit">Actualizar Contacto</button>
                        </fieldset>
                    </form>
                </section>
                 <section>
                    <h2>Cambiar Contraseña</h2>
                    <form id="cambiar-contrasena-form">
                        <label for="current-password">Contraseña Actual:</label>
                        <input type="password" id="current-password" name="current-password" required>

                        <label for="new-password">Nueva Contraseña:</label>
                        <input type="password" id="new-password" name="new-password" required>

                        <label for="confirm-new-password">Confirmar Nueva Contraseña:</label>
                        <input type="password" id="confirm-new-password" name="confirm-new-password" required>
                        <button type="submit">Cambiar Contraseña</button>
                    </form>
                </section>

                <section>
                    <h2>Módulos Disponibles (Acceso Rápido):</h2>
                    <p>Accede a las diferentes funcionalidades del sistema:</p>
                    <ul>
                        <li><a href="#inicio">Inicio</a></li> <li><a href="#plataforma-operativa">Plataforma Operativa</a></li>
                        <li><a href="#talento-humano">Talento Humano</a></li>
                        <li><a href="#nomina">Nómina</a></li>
                        <li><a href="#registro-visita">Registrar Nueva Visita</a></li>
                        <li><a href="#logout">Cerrar Sesión</a></li>
                    </ul>
                </section>
            </main>
        </div>

        <div id="plataforma-operativa-page" class="page-content">
            <main>
                <section>
                    <h1>Plataforma Operativa</h1>
                    <h2>Módulos Disponibles</h2>
                    <p>Seleccione la opción que desea gestionar:</p>
                    <ul>
                        <li><a href="#gestion-informes-general">Gestión de Informes (General)</a></li>
                        <li><a href="#registro-novedades-general">Registro/Consulta de Novedades (General)</a></li>
                        <li><a href="#visualizacion-alertas">Visualización de Alertas</a></li>
                        </ul>
                </section>

                <section>
                    <h2>Otros Módulos (Acceso Rápido)</h2>
                    <ul>
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#talento-humano">Talento Humano</a></li>
                        <li><a href="#nomina">Nómina</a></li>
                        <li><a href="#registro-visita">Registrar Nueva Visita</a></li>
                        <li><a href="#mi-perfil">Mi Perfil</a></li>
                        <li><a href="#logout">Cerrar Sesión</a></li>
                    </ul>
                </section>
            </main>
        </div>

        <div id="gestion-informes-general-page" class="page-content">
            <main>
                <section>
                    <h1>Gestión de Informes (General)</h1>
                    <p>Genere y consulte informes variados del sistema.</p>
                    <form id="informes-general-form">
                        <label for="informe-tipo">Tipo de Informe:</label>
                        <select id="informe-tipo" name="informe-tipo">
                            <option value="">Seleccione...</option>
                            <option value="novedades-historicas">Novedades Históricas</option>
                            <option value="rendimiento-personal">Rendimiento de Personal</option>
                            <option value="resumen-turnos">Resumen de Turnos</option>
                            <option value="visitas-supervision">Visitas de Supervisión</option>
                            <option value="alertas-generadas">Alertas Generadas</option>
                            <option value="otro">Otro</option>
                        </select>

                        <label for="informe-fecha-inicio">Fecha de Inicio:</label>
                        <input type="date" id="informe-fecha-inicio" name="informe-fecha-inicio">

                        <label for="informe-fecha-fin">Fecha de Fin:</label>
                        <input type="date" id="informe-fecha-fin" name="informe-fecha-fin">

                        <label for="informe-cedula">Cédula de Ciudadanía (Opcional):</label>
                        <input type="text" id="informe-cedula" name="informe-cedula" placeholder="Ingrese C.C. si aplica">

                        <label for="informe-puesto">Puesto de Trabajo (Opcional):</label>
                        <select id="informe-puesto" name="informe-puesto">
                            <option value="">Todos</option>
                            <option value="recepcion-abc">Recepción Principal Edificio ABC</option>
                            <option value="porteria-floresta">Portería Vehicular La Floresta</option>
                            </select>

                        <label for="informe-turno">Turno (Opcional):</label>
                        <select id="informe-turno" name="informe-turno">
                            <option value="">Todos</option>
                            <option value="mañana">Mañana</option>
                            <option value="tarde">Tarde</option>
                            <option value="noche">Noche</option>
                        </select>

                        <button type="submit">Generar Informe</button>
                    </form>
                    <div id="informe-resultado-area" style="margin-top:20px; padding:10px; border:1px dashed #ccc; display:none;">
                        <h4>Resultado del Informe (Simulado)</h4>
                        <p>Informe generado exitosamente. <a href="#">Descargar Informe (PDF)</a></p>
                    </div>
                </section>
                <section>
                    <h2>Acceso Rápido a Otros Módulos</h2>
                    <ul>
                        <li><a href="#plataforma-operativa">Volver a Plataforma Operativa</a></li>
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#logout">Cerrar Sesión</a></li>
                    </ul>
                </section>
            </main>
        </div>


        <div id="registro-novedades-general-page" class="page-content">
            <main>
                <section>
                    <h1>Registro de Novedades</h1>
                    <p>Seleccione el tipo de novedad que desea registrar y complete el formulario.</p>

                    <label for="tipo-novedad-registro">Tipo de Novedad a Registrar:</label>
                    <select id="tipo-novedad-registro" name="tipo-novedad-registro" required>
                        <option value="">-- Seleccione una opción --</option>
                        <option value="ausencia">Ausencia de Unidad (No Evasión)</option>
                        <option value="incapacidad">Incapacidad</option>
                        <option value="licencia-remunerada">Licencia Remunerada</option>
                        <option value="permiso-remunerado">Permiso Remunerado</option>
                        <option value="licencia-no-remunerada">Licencia No Remunerada</option>
                        <option value="permiso-no-remunerado">Permiso No Remunerado</option>
                        <option value="unidad-evadida">Unidad Evadida</option>
                        <option value="condicion-insegura">Reporte de Condición Insegura</option>
                        </select>

                    <div id="novedad-form-container" style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 15px;">
                        <p>Seleccione un tipo de novedad para ver el formulario correspondiente.</p>
                    </div>

                    <h2>Consultar Novedades Existentes</h2>
                    <form id="novedades-consulta-form">
                        <label for="consulta-novedad-tipo">Tipo de Novedad:</label>
                        <select id="consulta-novedad-tipo" name="consulta-novedad-tipo">
                            <option value="">Todos</option>
                            <option value="ausencia">Ausencia de Unidad</option>
                            <option value="incapacidad">Incapacidad</option>
                            <option value="licencia-remunerada">Licencia Remunerada</option>
                            <option value="permiso-remunerado">Permiso Remunerado</option>
                            <option value="licencia-no-remunerada">Licencia No Remunerada</option>
                            <option value="permiso-no-remunerado">Permiso No Remunerado</option>
                            <option value="unidad-evadida">Unidad Evadida</option>
                            <option value="condicion-insegura">Condición Insegura</option>
                            </select>

                        <label for="consulta-novedad-fecha-inicio">Fecha de Inicio:</label>
                        <input type="date" id="consulta-novedad-fecha-inicio" name="consulta-novedad-fecha-inicio">

                        <label for="consulta-novedad-fecha-fin">Fecha de Fin:</label>
                        <input type="date" id="consulta-novedad-fecha-fin" name="consulta-novedad-fecha-fin">

                        <label for="consulta-novedad-cedula">Cédula de Ciudadanía (Involucrado):</label>
                        <input type="text" id="consulta-novedad-cedula" name="consulta-novedad-cedula" placeholder="Ingrese C.C.">

                        <label for="consulta-novedad-puesto">Puesto de Trabajo:</label>
                        <select id="consulta-novedad-puesto" name="consulta-novedad-puesto">
                            <option value="">Todos</option>
                            <option value="recepcion-abc">Recepción Principal Edificio ABC</option>
                            <option value="porteria-floresta">Portería Vehicular La Floresta</option>
                            </select>

                        <button type="submit">Buscar Novedades</button>
                    </form>
                    <div id="novedades-results" style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 15px;">
                        <p>Resultados de la búsqueda se mostrarán aquí.</p>
                    </div>
                </section>
                <section>
                    <h2>Acceso Rápido a Otros Módulos</h2>
                    <ul>
                        <li><a href="#plataforma-operativa">Volver a Plataforma Operativa</a></li>
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#logout">Cerrar Sesión</a></li>
                    </ul>
                </section>
            </main>
        </div>

        <div id="talento-humano-page" class="page-content">
            <main>
                <section>
                    <h1>Talento Humano</h1>
                    <p>Gestione la documentación y solicitudes del personal.</p>
                </section>

                <section id="solicitar-carta-laboral">
                    <h2>Solicitar Carta Laboral</h2>
                    <form id="form-solicitar-carta">
                        <label for="th-cedula-carta">Cédula del Empleado:</label>
                        <input type="text" id="th-cedula-carta" name="cedula_empleado_carta" placeholder="Ingrese su cédula o la del empleado" required>
                        
                        <label for="th-nombre-carta">Nombre del Empleado:</label>
                        <input type="text" id="th-nombre-carta" name="nombre_empleado_carta" readonly placeholder="Se autocompletará">

                        <label for="th-tipo-carta">Tipo de Carta Laboral:</label>
                        <select id="th-tipo-carta" name="tipo_carta" required>
                            <option value="">Seleccione...</option>
                            <option value="con_salario">Con funciones y salario</option>
                            <option value="sin_salario">Con funciones, sin salario</option>
                            <option value="basica">Básica (Solo cargo y tiempo)</option>
                            <option value="para_visa">Para Trámite de Visa</option>
                        </select>

                        <label for="th-email-envio-carta">Correo Electrónico para Envío:</label>
                        <input type="email" id="th-email-envio-carta" name="email_envio_carta" placeholder="Su correo electrónico" required>
                        
                        <label for="th-observaciones-carta">Observaciones Adicionales (Opcional):</label>
                        <textarea id="th-observaciones-carta" name="observaciones_carta" rows="3" placeholder="Ej: Dirigida a Entidad Bancaria XYZ"></textarea>

                        <button type="submit">Solicitar Carta</button>
                    </form>
                </section>

                <section id="consultar-documentos-th">
                    <h2>Consultar Documentos del Empleado</h2>
                    <form id="form-consultar-documentos-th">
                        <label for="th-cedula-consulta-docs">Cédula del Empleado:</label>
                        <input type="text" id="th-cedula-consulta-docs" name="cedula_empleado_consulta_docs" placeholder="Ingrese cédula para consultar" required>
                        
                        <label for="th-nombre-consulta-docs">Nombre del Empleado:</label>
                        <input type="text" id="th-nombre-consulta-docs" name="nombre_empleado_consulta_docs" readonly placeholder="Se autocompletará">
                        <button type="submit">Consultar Documentos</button>
                    </form>
                    <div id="th-documentos-resultado" style="margin-top:15px; display:none;">
                        <h4>Documentos Disponibles para <span id="th-nombre-docs-display"></span> (Simulado):</h4>
                        <ul>
                            <li><a href="#" onclick="alert('Descargando Hoja de Vida (simulado)...'); return false;">Hoja de Vida (Actualizada 2025-01-10)</a></li>
                            <li><a href="#" onclick="alert('Descargando Contrato Laboral (simulado)...'); return false;">Contrato Laboral (Firmado 2024-03-01)</a></li>
                            <li><a href="#" onclick="alert('Descargando Último Examen Médico (simulado)...'); return false;">Examen Médico Periódico (2025-02-15)</a></li>
                            <li>Certificado ARL (Vigente)</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <h2>Otros Módulos (Acceso Rápido)</h2>
                    <ul>
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#plataforma-operativa">Plataforma Operativa</a></li>
                        <li><a href="#nomina">Nómina</a></li>
                        <li><a href="#registro-visita">Registrar Nueva Visita</a></li>
                        <li><a href="#mi-perfil">Mi Perfil</a></li>
                        <li><a href="#logout">Cerrar Sesión</a></li>
                    </ul>
                </section>
            </main>
        </div>

        <div id="nomina-page" class="page-content">
            <main>
                <section>
                    <h1>Nómina</h1>
                    <p>Realice consultas y genere reportes relacionados con su nómina.</p>
                </section>

                <section id="consultar-desprendibles">
                    <h2>Consultar/Descargar Desprendibles de Pago</h2>
                    <form id="form-consultar-desprendibles">
                        <label for="nomina-cedula-desprendible">Cédula del Empleado:</label>
                        <input type="text" id="nomina-cedula-desprendible" name="cedula_empleado_desprendible" placeholder="Ingrese su cédula" required>
                        
                        <label for="nomina-nombre-desprendible">Nombre del Empleado:</label>
                        <input type="text" id="nomina-nombre-desprendible" name="nombre_empleado_desprendible" readonly placeholder="Se autocompletará">

                        <label for="nomina-ano-desprendible">Año:</label>
                        <select id="nomina-ano-desprendible" name="ano_desprendible" required>
                            <option value="2025">2025</option>
                            <option value="2024">2024</option>
                            <option value="2023">2023</option>
                        </select>

                        <label for="nomina-mes-desprendible">Mes:</label>
                        <select id="nomina-mes-desprendible" name="mes_desprendible" required>
                            <option value="">Seleccione Mes...</option>
                            <option value="01">Enero</option>
                            <option value="02">Febrero</option>
                            <option value="03">Marzo</option>
                            <option value="04">Abril</option>
                            <option value="05">Mayo</option>
                            <option value="06">Junio</option>
                            <option value="07">Julio</option>
                            <option value="08">Agosto</option>
                            <option value="09">Septiembre</option>
                            <option value="10">Octubre</option>
                            <option value="11">Noviembre</option>
                            <option value="12">Diciembre</option>
                        </select>
                        <button type="submit">Consultar Desprendible</button>
                    </form>
                    <div id="nomina-desprendible-resultado" style="margin-top:15px; display:none;">
                        <h4>Desprendible de Pago para <span id="nomina-nombre-desp-display"></span> - <span id="nomina-periodo-desp-display"></span> (Simulado)</h4>
                        <p>Devengado: $X.XXX.XXX</p>
                        <p>Deducido: $Y.YYY.YYY</p>
                        <p>Neto a Pagar: $Z.ZZZ.ZZZ</p>
                        <a href="#" onclick="alert('Descargando desprendible PDF (simulado)...'); return false;">Descargar Desprendible (PDF)</a>
                    </div>
                </section>

                <section id="generar-certificado-ingresos">
                    <h2>Generar Certificado de Ingresos y Retenciones</h2>
                    <form id="form-generar-certificado-ingresos">
                        <label for="nomina-cedula-certificado">Cédula del Empleado:</label>
                        <input type="text" id="nomina-cedula-certificado" name="cedula_empleado_certificado" placeholder="Ingrese su cédula" required>

                        <label for="nomina-nombre-certificado">Nombre del Empleado:</label>
                        <input type="text" id="nomina-nombre-certificado" name="nombre_empleado_certificado" readonly placeholder="Se autocompletará">

                        <label for="nomina-ano-certificado">Año Gravable:</label>
                        <select id="nomina-ano-certificado" name="ano_certificado" required>
                            <option value="2024">2024</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                        </select>
                        <button type="submit">Generar Certificado</button>
                    </form>
                     <div id="nomina-certificado-resultado" style="margin-top:15px; display:none;">
                        <h4>Certificado de Ingresos y Retenciones para <span id="nomina-nombre-cert-display"></span> - Año <span id="nomina-ano-cert-display"></span> (Simulado)</h4>
                        <a href="#" onclick="alert('Descargando certificado PDF (simulado)...'); return false;">Descargar Certificado (PDF)</a>
                    </div>
                </section>

                <section>
                    <h2>Otros Módulos (Acceso Rápido)</h2>
                    <ul>
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#plataforma-operativa">Plataforma Operativa</a></li>
                        <li><a href="#talento-humano">Talento Humano</a></li>
                        <li><a href="#registro-visita">Registrar Nueva Visita</a></li>
                        <li><a href="#mi-perfil">Mi Perfil</a></li>
                        <li><a href="#logout">Cerrar Sesión</a></li>
                    </ul>
                </section>
            </main>
        </div>

        <div id="visualizacion-alertas-page" class="page-content">
            <main>
                <section>
                    <h1>Visualización de Alertas</h1>
                    <p>Consulte las alertas críticas y pendientes generadas por el sistema.</p>
                    <form id="filtro-alertas-form">
                        <label for="alerta-tipo">Tipo de Alerta:</label>
                        <select id="alerta-tipo" name="tipo_alerta">
                            <option value="">Todos</option>
                            <option value="critica">Novedad Crítica</option>
                            <option value="pendiente">Pendiente de Aprobación</option>
                            <option value="documental">Aniversario Documental</option>
                            <option value="sistema">Sistema</option>
                        </select>

                        <label for="alerta-estado">Estado:</label>
                        <select id="alerta-estado" name="estado_alerta">
                            <option value="">Todos</option>
                            <option value="no-leida">No Leída</option>
                            <option value="leida">Leída</option>
                            <option value="resuelta">Resuelta</option>
                        </select>

                        <label for="alerta-puesto">Puesto de Trabajo (Opcional):</label>
                        <select id="alerta-puesto" name="puesto_alerta">
                            <option value="">Todos</option>
                            <option value="recepcion-abc">Recepción Principal Edificio ABC</option>
                            <option value="porteria-floresta">Portería Vehicular La Floresta</option>
                        </select>

                        <label for="alerta-cedula">Cédula de Ciudadanía (Involucrado - Opcional):</label>
                        <input type="text" id="alerta-cedula" name="cedula_alerta" placeholder="C.C. relacionada">

                        <button type="submit">Filtrar Alertas</button>
                    </form>

                    <div id="alertas-list" style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 15px;">
                        <h2>Alertas Actuales:</h2>
                        <ul style="list-style: none; padding: 0;">
                            <li>
                                <strong>Novedad Crítica: Ausencia de Unidad (CC: 123456789)</strong>
                                <br><small>Puesto: Portería Vehicular La Floresta, Turno: Noche, Fecha: 2025-06-01 23:00</small>
                                <br><button onclick="alert('Ver detalles de la alerta: Ausencia 123456789')">Ver Detalles</button>
                                <button onclick="alert('Marcar como leída: Ausencia 123456789')">Marcar como Leída</button>
                            </li>
                            <li style="margin-top: 10px;">
                                <strong>Alerta: Pendiente de Aprobación (Reporte Cond. Insegura)</strong>
                                <br><small>Ubicación: Pasillo Central, Fecha: 2025-05-30 10:15</small>
                                <br><button onclick="alert('Ver detalles de la alerta: Pendiente de Aprobación')">Ver Detalles</button>
                                <button onclick="alert('Marcar como leída: Pendiente de Aprobación')">Marcar como Leída</button>
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    <h2>Acceso Rápido a Otros Módulos</h2>
                    <ul>
                        <li><a href="#plataforma-operativa">Volver a Plataforma Operativa</a></li>
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#logout">Cerrar Sesión</a></li>
                    </ul>
                </section>
            </main>
        </div>


        <div id="registro-visita-page" class="page-content">
            <main class="registro-container"> <img src="images/logo_jh.png" alt="Logo JH SAS" class="logo">
                <h1>Registro de Visita de Supervisión</h1>
                <form id="visita-form">
                    <label for="fecha-visita">Fecha:</label>
                    <input type="date" id="fecha-visita" name="fecha-visita" value="2025-03-06" required>
                    <label for="puesto">1. Seleccionar puesto a visitar:</label>
                    <select id="puesto" name="puesto" required>
                        <option value="">Seleccione...</option>
                        <option value="1">Recepción Principal Edificio ABC</option>
                        <option value="2">Portería Vehicular La Floresta</option>
                    </select>

                    <fieldset>
                        <legend>Checklist Presentación:</legend>
                        <div><input type="checkbox" id="item1" name="item1"><label for="item1">Porta uniforme completo</label></div>
                        <div><input type="checkbox" id="item2" name="item2"><label for="item2">Porta carnet visible</label></div>
                        <div><input type="checkbox" id="item3" name="item3"><label for="item3">Cumple protocolos establecidos</label></div>
                        </fieldset>

                    <label for="novedades-operativas">Novedades Operativas:</label>
                    <textarea id="novedades-operativas" name="novedades-operativas" rows="3"></textarea>

                    <label for="novedades-nomina">Novedades Nómina:</label>
                    <textarea id="novedades-nomina" name="novedades-nomina" rows="3"></textarea>

                    <button type="button" onclick="mostrarConfirmacionGuardar()">Guardar Visita</button>

                    <div id="confirmacion-guardar" class="modal">
                        <p>¿Desea guardar esta visita?</p>
                        <button type="submit">Sí</button>
                        <button type="button" onclick="cerrarConfirmacionGuardar()">No</button>
                    </div>
                </form>
            </main>
        </div>
    </div>
    <footer id="app-footer">
        <p>&copy; 2025 SecuriGestión Integral</p>
    </footer>


    <script>
    // --- LÓGICA DE LA APLICACIÓN DE PÁGINA ÚNICA (SPA) ---

    // Obtiene todos los contenedores de página y elementos principales
    const pageContents = document.querySelectorAll('.page-content');
    const loggedInUsernameSpan = document.getElementById('logged-in-username');

    /**
     * Función para mostrar una página específica por su ID y ocultar las demás.
     */
    function showPage(pageId) {
        pageContents.forEach(page => {
            page.classList.toggle('active', page.id === pageId);
        });

        const hash = pageId.replace('-page', '');
        if (hash !== 'login' && window.location.hash !== '#' + hash) {
            history.pushState(null, '', '#' + hash);
        } else if (hash === 'login') {
            history.pushState(null, '', window.location.pathname + window.location.search);
        }
        
        window.scrollTo(0, 0);
    }

    /**
     * Lógica de navegación principal.
     */
    document.body.addEventListener('click', function(event) {
        const target = event.target.closest('a');
        if (target) {
            const href = target.getAttribute('href');
            if (href && href.startsWith('#')) {
                event.preventDefault();
                const targetHash = href.substring(1);

                if (targetHash === 'logout') {
                    alert('Cerrando sesión...');
                    showPage('login-page');
                    if (loggedInUsernameSpan) loggedInUsernameSpan.textContent = 'Invitado';
                    if (document.getElementById('login-form')) document.getElementById('login-form').reset();
                } else {
                    const pageId = targetHash + '-page';
                    if (document.getElementById(pageId)) {
                        showPage(pageId);
                    }
                }
            }
        }
    });

    /**
     * Control del formulario de inicio de sesión.
     */
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const errorMessageDiv = document.getElementById('login-error-message');
            const formData = new FormData(loginForm);

            errorMessageDiv.style.display = 'none';

            fetch('backend/backendlogin.php', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error de red: ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                if (data.success) {
                    const user = data.user;
                    if (loggedInUsernameSpan) loggedInUsernameSpan.textContent = user.nombre.split(' ')[0];
                    if (document.getElementById('dashboard-username')) document.getElementById('dashboard-username').textContent = user.nombre;
                    if (document.getElementById('dashboard-email')) document.getElementById('dashboard-email').textContent = user.email;
                    if (document.getElementById('dashboard-role')) document.getElementById('dashboard-role').textContent = user.rol;
                    showPage('inicio-page');
                } else {
                    errorMessageDiv.textContent = data.message;
                    errorMessageDiv.style.display = 'block';
                }
            })
            .catch(error => {
                console.error('Error en fetch:', error);
                errorMessageDiv.textContent = 'Error de conexión. Revisa la consola (F12).';
                errorMessageDiv.style.display = 'block';
            });
        });
    }

    // El resto de los formularios siguen siendo simulados y se pueden conectar después
    // ...

    /**
     * Inicialización de la aplicación al cargar la página.
     */
    document.addEventListener('DOMContentLoaded', () => {
        const initialHash = window.location.hash.substring(1);
        const validPageHashes = [
            'login', 'registro', 'olvido-contrasena', 'inicio', 'mi-perfil',
            'plataforma-operativa', 'talento-humano', 'nomina', 'registro-visita',
            'gestion-informes-general', 'registro-novedades-general', 'visualizacion-alertas'
        ];

        if (initialHash && validPageHashes.includes(initialHash)) {
            showPage(initialHash + '-page');
        } else {
            showPage('login-page');
        }

        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.substring(1);
            if (hash && validPageHashes.includes(hash)) {
                showPage(hash + '-page');
            } else {
                showPage('login-page');
            }
        });
    });
</script>
</body>
</html>