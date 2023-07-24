const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500},
    { nombre: 'TV', precio: 100},
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Audifonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: 'Movil', precio: 700},
]
    






for(let i = 0; i < carrito.length; i++ ) {
    console.log( `${carrito[i].nombre} - precio: ${carrito[i].precio}` );
}

carrito.forEach( function(producto){
    console.log( `${producto.nombre} - precio: ${producto.precio}` );
});