const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', validarFormulario); 

function validarFormulario(e) {
    e.preventDefault();

    console.log('Consulatar API')

    console.log(e);
}