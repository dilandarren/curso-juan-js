//Singelton
let instancia = null;

class Persona {
    constructor(nombre, email) {
        if (!instancia) {
            this.nombre = nombre;
            this.email = email;
            instancia = this;
        } else{
            return instancia
        }
    }
}

const persona = new Persona('Dilan', 'coreo@coreo.com');
console.log(persona);

const persona2 = new Persona('Raul', 'Raul@coreo.com');
console.log(persona2);