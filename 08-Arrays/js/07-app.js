// const meses = ['Enero', 'Febrero', 'Marzo'];

// // meses[3] = 'Abril';

// //Agregar al final del arreglo
// meses.push('Abril');
// meses.push('Mayo');

// console.table(meses);


const carrito = [];

//definir un producto
const producto = {
    nombre: "Monitor 32 pulgadas",
    precio: 400
}



const producto2 = {
    nombre: "Movil",
    precio: 800
}

const producto4 = {
    nombre: "Movil 2",
    precio: 600
}

//push agrega al final de un areglo
carrito.push(producto2);
carrito.push(producto);
carrito.push(producto4);



const producto3 = {
    nombre: "Teclado",
    precio: 50
}

carrito.unshift(producto3);

console.table(carrito);


// //Eliminar último elemento de un arreglo...
// carrito.pop();
// console.table(carrito);

// //Eliminar del incion del array
// carrito.shift();
// console.table(carrito);

carrito.splice(3, 1);
console.table(carrito);