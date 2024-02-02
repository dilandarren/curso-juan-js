function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}
const dilan = new Cliente('Dilan', 500);

function formatearCliente(cliente) {
    const{nombre, saldo} = cliente;
    return `El Cliente ${nombre} tiene un saldo de ${saldo}`; 
}

console.log( formatearCliente(dilan) )



function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const CCJ = new Empresa('Codigo con Dilan', 4000, 'Cursos en línea');

console.log(formatearCliente(CCJ ));