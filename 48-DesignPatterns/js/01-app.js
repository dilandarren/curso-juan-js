//Class Pattren

class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

const persona = new Persona('Dilan', 'correo@coreo.com');

console.log(persona);