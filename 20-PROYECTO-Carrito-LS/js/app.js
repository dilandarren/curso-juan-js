const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciaCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = []; 

cargarEventListeners();
function cargarEventListeners() {
    //agregar btn"Agregar Carrito"
    listaCursos.addEventListener('click', agregarCurso);


    //Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    //Muestra los cursos de local storage
    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse( localStorage.getItem('carrito') ) || [];
        
        carritoHTML();
    })


    //Vaciar carrito
    vaciaCarritoBtn.addEventListener('click', () => {
        articulosCarrito = [];// reseteamos el arreglo

        limpiarHTML(); //eliminamos todo en el HTML
    })
}


// funciones
function agregarCurso(e){
    e.preventDefault();




    if( e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement
        leerDatosCurso(cursoSeleccionado);
    }
}
//elimina un curso del carrito
function eliminarCurso(e) {
    if(e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');

        //elimina del arreglo de articulosCarrito po la data-id
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId );

        carritoHTML();//Iterar sobre el carrito y mostrar su html


    }
}


function leerDatosCurso(curso) {
    // console.log('marca', curso);

    

    //crear objeto
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id : curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id );
    if(existe){
        const cursos = articulosCarrito.map( curso => {
            if( curso.id === infoCurso.id ) {
                curso.cantidad++;
                return curso;
            } else {
                return curso;
            }
        } );
        articulosCarrito = [...cursos];
    } else {
        //Agrega elementos al arreglo de carrito
        articulosCarrito = [...articulosCarrito, infoCurso];

    }

    
    console.log(articulosCarrito);

    carritoHTML();


}

//Muestra el carrito de compras
function carritoHTML() {


    //limpiarHTML
    limpiarHTML();

    articulosCarrito.forEach( curso => {
        const {imagen, titulo, precio, cantidad, id} = curso;
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>
                <img src="${imagen}" width="100" >
            </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>

        `;
        contenedorCarrito.appendChild(row);
    });


    //agregar carrito de compras al storage

    sincronizaStorage();

}


function sincronizaStorage() {
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito))
}



function limpiarHTML() {
    // contenedorCarrito.innerHTML = '';


    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}