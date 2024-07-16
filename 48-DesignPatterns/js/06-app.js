//Mixin Pattern

class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

const functionPersona = {
    mostrarInformacion(){
        console.log(`Pombre Persona: ${this.nombre} Email ${this.email}`);
    },
    mostrarNombre(){
        console.log(`Nombre: ${this.nombre}`);
    },
    
}

Object.assign(Persona('pepe', 'correo@coreo.com'));

const cliente = new Persona('Dilan', 'correo@correo.com')

console.log(cliente);

cliente.mostrarInformacion();
cliente.mostrarNombre();