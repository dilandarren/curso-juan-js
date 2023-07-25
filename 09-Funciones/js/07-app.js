
iniciarApp();


function iniciarApp() {
    console.log('Iniciando app...');

    segundaFuncion();
}



function segundaFuncion() {
    console.log('Desde la sugunda funcion');

    usuarioAutenticado('Dilan');
}

function usuarioAutenticado(usuario) {
    console.log('Autenticado usuario... espere');
    console.log(`usuario autenticado con exito: ${usuario}` )
}