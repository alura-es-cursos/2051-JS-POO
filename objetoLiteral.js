const user = {
    nombre: "Mariana",
    email: "m@m.com",
    nacimiento: "11/10/1989",
    rol: "estudiante",
    activo: true,
    mostrarDatos: function () {
        console.log(this.nombre, this.email)
    }
}

const admin = {
    nombre: "Harland",
    email: "h@h.com",
    nacimiento: "10/04/1996",
    rol: "admin",
    activo: true,
    crearCurso: function () {
        console.log("Curso creado")
    }
}

Object.setPrototypeOf(admin, user)

admin.crearCurso()
admin.mostrarDatos()


//Herencia de prototipos