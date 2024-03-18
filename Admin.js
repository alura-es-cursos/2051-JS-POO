import Usuario from "./Usuario.js"

class Admin extends Usuario {
    constructor(nombre, email, nacimiento, rol = "admin", activo = true) {
        super(nombre, email, nacimiento, rol)
    }
    crearCurso(curso, vacantes) {
        return `Curso: ${curso} Vacantes: ${vacantes}`
    }
}

const administrador = new Admin("Harland", "h@h.com", "10/04/1996")
console.log(administrador)
console.log(administrador.mostrarDatos())

console.log(administrador.crearCurso("OOP con JS", 29))