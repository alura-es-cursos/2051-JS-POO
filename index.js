import Usuario from "./Usuario.js"
import Admin from "./Admin.js"
import Docente from "./Docente.js"

const usuario = new Usuario("Jose", "j@j.com", "04/01/2003")


console.log(usuario.mostrarDatos())

const admin = new Admin("Cris", "c@c.com", "05/12/1992")

admin.nombre = "Jose"

admin.mostrarNombre()