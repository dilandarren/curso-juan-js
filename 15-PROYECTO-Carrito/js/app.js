const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciaCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');


cargarEventListeners();
function cargarEventListeners() {
    //agregar btn""Agregar Carrito"
    listaCursos.addEventListener('click', agregarCurso);
}


// funciones
function agregarCurso(e){
    e.preventDefault();



    if( e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement
        leerDatosCurso(cursoSeleccionado);
    }
}


function leerDatosCurso(curso) {
    console.log(curso);

    //crear objeto
    const infoCurso = {
        Imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id : curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    console.log(infoCurso)
}