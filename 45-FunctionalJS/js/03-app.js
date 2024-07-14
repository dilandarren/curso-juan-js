const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];
// const resultado = carrito.fill( producto => {
//     return producto.precio > 400;
// });

// console.log(resultado);

const mayor400 = producto => {
    return producto.precio > 400;
}
const resultado = carrito.filter(mayor400)
console.log(resultado);