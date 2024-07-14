

const obtenerCliente = () => {
    const nombre = "Mile";

    function muestraNombre() {
        console.log(nombre);
    }

    return muestraNombre;
}

const cliente = obtenerCliente();

cliente();

// const cliente = 'Mile';

// function mostrarCliente() {
//     const cliente = 'Dorian';

//     console.log(cliente);
// }

// console.log(cliente);

// mostrarCliente();