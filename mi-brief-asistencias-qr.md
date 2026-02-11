# Brief UX: Sistema de Asistencias por QR

## 1. Investigación de Usuarios

### Jobs-to-be-Done (JTBD)

* **Estudiante**:
    * **Cuando** llego corriendo del trabajo a la escuela, o llego corriendo por que se le hizo tarde por algo personal
    * **quiero** registrar mi asistencia instantáneamente sin hacer fila, pasas al instante ala clase y no se interrumpe la clase
    * **para poder** sentarme, relajarme y no perder los primeros minutos de la explicación.
* **Profesor**:
    * **Cuando** inicio mi clase,
    * **quiero** tener un registro automático de quiénes están presentes,
    * **para poder** dedicar el 100% del tiempo a enseñar y no a pasar lista nombre por nombre.
* **Administrador**:
    * **Cuando** necesito reportes mensuales,
    * **quiero** acceder a una base de datos digital confiable,
    * **para poder** auditar la retención escolar y cumplir con normativas oficiales.

### Pain Points Identificados

| Stakeholder | Pain Point | Impacto (1-5) | Frecuencia |
| :--- | :--- | :---: | :--- |
| **Estudiante** | Filas largas para firmar hoja de papel | 4 | Diario |
| **Profesor** | Pérdida de 10 min hasta 15 mins de clase pasando lista | 5 | Por clase |
| **Profesor** | Alumnos firman por amigos (Fraude) | 4 | Ocasional |

### Suposiciones vs. Hechos

**Suposiciones a validar**:
* [ ] Los administradores de la escuela aceptaran poner un scanner o un celular en un poste como scanner para hacer los registros.
* [ ] La conexión a internet en las aulas es estable y que todos tienen internet.

**Hechos conocidos**:
* [x] El pase de lista manual consume entre 10 y 15 minutos.
* [x] La mayoría de los estudiantes posee un smartphone.

---

## 2. Definición del Problema

### Point of View (POV)
Los **estudiantes de Indaptados** necesitan **un método de ingreso de "cero fricción"** porque **sus horarios son ajustados y el proceso administrativo actual les genera estrés y pérdida de tiempo valioso.**

### How Might We (HMW)
* ¿HMW reducir el tiempo de registro a menos de 5 segundos?
* ¿HMW evitar que un alumno registre a otro (anti-fraude)?

---

## 3. Diseño de Solución

### User Stories
1. **Como estudiante**, quiero generar un QR único con mis datos para identificarme rápido.
2. **Como profesor**, quiero escanear credenciales para automatizar mi lista.

### User Flow
`[Login Alumno]` -> `[Generar QR]` -> `[Escaneo Profesor]` -> `[Validación BD]` -> `[Éxito]`

### Wireframes (Esquema)
* **Alumno:** Pantalla oscura con un código QR grande y datos institucionales.
* **administracion:** Cámara activa con selector de materia/scanner activo con selector automatico de la materia y lista de registros en tiempo real.

---

## 4. Validación y Métricas

### Hipótesis Principal
Creemos que el sistema de **Kiosco de Escaneo** reducirá el tiempo de registro en un 70%. Lo sabremos cuando el tiempo promedio sea de **< 30 segundos** por grupo.

### OKRs
* **Objetivo:** Modernizar la entrada al aula.
    * **KR:** Reducir tiempo de lista de 10 min a < 2 min.

---

## 5. Plan de Experimentación

### MVP Experiment
* **Piloto:** 1 clase (Programación Avanzada).
* **Setup:** Alumnos usan `credencial.html` y el scanner/celular usara `scanner.html`.
* **Criterio de Éxito:** El sistema bloquea duplicados y guarda el JSON correctamente.