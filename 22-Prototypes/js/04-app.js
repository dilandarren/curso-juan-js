
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function() {
    let tipo;

    if(this.saldo > 1000) {
        tipo = 'Gold';
    }else if(this.saldo > 5000) {
        tipo = 'Platinum';
    } else {
        tipo = 'Normal';
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function () {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente() }`
}


Cliente.prototype.retirarSaldo = function(retira) {
    this.saldo -= retira;
}






function Persona(nombre, saldo, telefono){
    Cliente.call(this, nombre, saldo)
    this.telefono = telefono;


}

Persona.prototype = Object.create(Cliente.prototype );
Persona.prototype.costructor = Cliente;

//Instanciarlo
const pepe = new Persona('Pepe', 5000, 10920192);
console.log(pepe);
console.log(pepe.nombreClienteSaldo());

Persona.prototype.mostrarTelefono = function(){
    return `El telefono es: ${this.telefono}`
}