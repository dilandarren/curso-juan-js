class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    static bienvenida() {
        return `Binvenida`;
    }

}

const dilan = new Cliente('Dilan', 400);
console.log(dilan.mostrarInformacion());
console.log(dilan);

console.log( Cliente.bienvenida() );



const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
}

const dilan2 = new Cliente2('dilan2', 400);
console.log(dilan2.mostrarInformacion());
console.log(dilan2);