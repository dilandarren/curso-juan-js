function descargarClientes() {
    
    return new Promise((resolve, reject) => {
        const error = false;

        setTimeout(() => {
            if (!error) {
                resolve('Listado cliente exito');
            }else {
                reject('Error en la conexion')
            }
        }, 3000);
    })
}


async function ejecutar() {
    try {
        console.log(1 + 1);
        const respuesta = await descargarClientes();

        console.log( 2 + 2);
        console.log( respuesta);
    } catch (error) {
        console.log(error);
    }
}

ejecutar();