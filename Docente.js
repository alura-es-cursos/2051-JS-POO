import Usuario from "./Usuario.js";

export default class Docente extends Usuario {
    constructor(nombre, email, nacimiento, rol = "docente", activo = true) {
        super(nombre, email, nacimiento, rol)
    }
    aprobarEstudiante() {
        console.log("Estudiante aprobado")
    }
}
