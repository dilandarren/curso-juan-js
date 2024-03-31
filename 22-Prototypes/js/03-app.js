

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



//Instanciarlo
const pepe = new Cliente('Pepe', 6000);
console.log( pepe.tipoCliente() );
console.log( pepe.nombreClienteSaldo() );
pepe.retirarSaldo( 1000 );
console.log( pepe.nombreClienteSaldo() );


console.log(pepe);




// function Empresa(nombre, saldo, categoria) {
//     this.nombre = nombre;
//     this.saldo = saldo;
//     this.categoria = categoria;
// }

// const CCJ = new Empresa('Codigo con Dilan', 4000, 'Cursos en línea');
// console.log(CCJ);