
function *crearGenerador() {
    yield 1;
    yield 'Juan';
    yield '3+3';
    yield 'true';
}

const iterador = crearGenerador();


// console.log(iterador);
// console.log(iterador.next().value);
// console.log(iterador.next());
// console.log(iterador.next().value);
// console.log(iterador.next());
// console.log(iterador);


//generador para carrito de copras

function *generadorCarrito( carrito ) {
    for(let i = 0; i < carrito.length; i++){
        yield carrito[i];
    }
}


const carrito = ['Producto 1', 'Proyecto 2', 'Proyecto 3'];

const iterador1 = generadorCarrito(carrito);

console.log(iterador.next());

