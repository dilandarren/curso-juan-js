const carrito = new Set();

carrito.add('Camisa');
carrito.add('disco#1');
carrito.add('disco#2');
carrito.add('disco#3');

carrito.delete('disco #3')

console.log(carrito.size);

carrito.forEach( (producto, index, performance) => {
    // console.log(producto)
    console.log(pertenece);
} )

// carrito.clear();

// console.log(carrito.has((Guitararra)));

console.log(carrito);


//eliminar duplicado
const numeros = [10,20,30,40,50,10,20]

const noDuplicados = new Set(numeros);

console.log(noDuplicados);