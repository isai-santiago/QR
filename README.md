para que lo testen https://escuelatest.netlify.app
funciona con cuentas preregistradas en la base de datos, registre las siguientes:
        const DB_USUARIOS = [
            { user: 'Zeryux@indaptados.edu.mx', pass: '1234', rol: 'alumno', uid: 'IND-001', nombre: 'Zeryux Dev' },
            { user: 'Josue@indaptados.edu.mx', pass: '1234', rol: 'alumno', uid: 'IND-003', nombre: 'Josue Dev' },
            { user: 'Adolfo@indaptados.edu.mx', pass: '1234', rol: 'alumno', uid: 'IND-004', nombre: 'Adolfo UX' },
            { user: 'Profesorhernesto@indaptados.edu.mx', pass: 'admin', rol: 'profesor', uid: 'DOC-01', nombre: 'Profesor Titular' }
        ];
para que se haga el test, los 3 primeros simulan estudiantes
y el 4to es para el cargar el scanner

configuracion y reportes no estan configurados, ya que queria seguir con los siguientes retos asi que quedaron sin config


preguntas :

. Sobre la escalabilidad de los Horarios (Hardcoding)
"¿Consideran que mantener el array constante HORARIO directamente dentro de Credencial.html y Escaner.html es sostenible para el MVP, o deberíamos refactorizarlo a un archivo horarios.json compartido para evitar inconsistencias si cambiamos una materia?"

Por qué es buena: Demuestra que te preocupa la mantenibilidad. Actualmente, si cambia una hora, tienes que editar 2 archivos distintos, lo cual es propenso a errores.

2. Sobre la Seguridad de la Expiración (Timestamp)
"Para la validación de los 15 minutos (Date.now() - alumno.ts > 900000), estamos confiando totalmente en la hora del dispositivo del cliente. ¿Deberíamos agregar un margen de tolerancia (ej. ±2 minutos) para mitigar problemas con relojes desincronizados entre el celular del alumno y el del profesor?"

Por qué es buena: Ataca un punto crítico de la [US-07]. Si el celular del alumno tiene la hora mal (adelantada 10 min), su código podría nacer "casi expirado" o durar más de lo debido. Muestra atención al detalle técnico.

3. Sobre la Persistencia y el "Auto-Selector"
"En la lógica del autoSelectClass del profesor, si un docente llega tarde e inicia sesión a la mitad de la clase, el sistema selecciona la materia actual automáticamente. ¿Ven algún riesgo de que esto sobrescriba accidentalmente materiaActual si el profesor estaba revisando una lista de una clase anterior manualmente?"

Por qué es buena: Se enfoca en la experiencia de usuario (UX) y los "casos borde" (edge cases) de la nueva funcionalidad inteligente que agregaste. Valida si tu lógica de if (claseActual && !materiaActual) es suficiente.
