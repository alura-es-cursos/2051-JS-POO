export default class Usuario {
    #nombre
    #email
    #nacimiento
    #rol
    #activo
    constructor(nombre, email, nacimiento, rol, activo = true) {
        this.#nombre = nombre
        this.#email = email
        this.#nacimiento = nacimiento
        this.#rol = rol || "estudiante"
        this.#activo = activo
    }
    //getter

    get nombre() {
        return this.#nombre
    }

    get email() {
        return this.#email
    }

    get nacimiento() {
        return this.#nacimiento
    }

    get rol() {
        return this.#rol
    }

    get activo() {
        return this.#activo
    }

    //setters

    set nombre(nuevoNombre) {
        if (nuevoNombre === "") {
            throw new Error("Nuevo nombre invalido")
        }
        this.#nombre = nuevoNombre
    }

    mostrarDatos() {
        return `${this.nombre} ${this.email}`
    }
}


