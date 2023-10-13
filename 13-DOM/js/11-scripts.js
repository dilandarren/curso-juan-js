const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', mostrarOcultarFooter);

function mostrarOcultarFooter() {
    // console.log('Diste click en el boton');
    if(footer.classList.contains('activo')) {
        footer.classList.remove('activo');
        btnFlotante.classList.remove('activo')
        this.textContent = 'Idioma i Moneda';
    } else{
        footer.classList.add('activo');
        btnFlotante.classList.add('activo');
        this.textContent = 'X Cerrar';
    }
    
}