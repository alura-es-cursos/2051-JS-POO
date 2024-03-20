import Usuario from "./Usuario.js"

export default class Admin extends Usuario {
    constructor(nombre, email, nacimiento, rol = "admin", activo = true) {
        super(nombre, email, nacimiento, rol)
    }

    mostrarNombre() {
        console.log(`El nombre del admin es: ${this.nombre}`)
    }

    crearCurso(curso, vacantes) {
        return `Curso: ${curso} Vacantes: ${vacantes}`
    }
}
