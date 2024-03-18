import Usuario from "./Usuario.js";

class Docente extends Usuario {
    constructor(nombre, email, nacimiento, rol = "docente", activo = true) {
        super(nombre, email, nacimiento, rol)
    }
    aprobarEstudiante() {
        console.log("Estudiante aprobado")
    }
}
//hoisting
const docenteUno = new Docente("Jean Marie", "jm@jm.com", "14/06/1993")
docenteUno.aprobarEstudiante()
console.log(docenteUno)