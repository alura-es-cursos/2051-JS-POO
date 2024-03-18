export default class Usuario {
    constructor(nombre, email, nacimiento, rol, activo = true) {
        this.nombre = nombre
        this.email = email
        this.nacimiento = nacimiento
        this.rol = rol || "estudiante"
        this.activo = activo
    }

    mostrarDatos() {
        return `${this.nombre} ${this.email}`
    }
}

const usuarioUno = new Usuario("Daniela", "d@d,com", "10/08/1989", "estudiante", true)
const usuarioDos = new Usuario("Jose", "j@j.com", "04/01/2003")


