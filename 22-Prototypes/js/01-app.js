const cliente = {
    nombre: 'Dilan',
    saldo: 500
}

console.log(cliente);
console.log(typeof cliente);


function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const dilan = new Cliente('Dilan', 500);

console.log(dilan);