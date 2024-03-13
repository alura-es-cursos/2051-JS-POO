function Usuario(nombre, email) {
    this.nombre = nombre
    this.email = email
    this.mostrarDatos = function () {
        return `${this.nombre} ${this.email}`
    }
}

//new Instancia 

// const nuevoUsuario = new Usuario("Harland", "h@h.com")
// console.log(nuevoUsuario.mostrarDatos())

function Admin(nombre, email, rol) {
    Usuario.call(this, nombre, email)
    this.rol = rol || "estudiante"
}

Admin.prototype = Object.create(Usuario.prototype)

// const nuevoUsuario = new Admin("Sofia", "s@s.com", "admin")
// console.log(nuevoUsuario)

const user = {
    init: function (nombre, email) {
        this.nombre = nombre
        this.email = email
    },
    mostrarDatos: function () {
        return this.nombre
    }
}

const nuevoUsuario = Object.create(user)
nuevoUsuario.init("Pedro", "p@p.com")
console.log(nuevoUsuario.mostrarDatos())
