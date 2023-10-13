const nav = document.querySelector('.navegacion');

//Registrar un evento
nav.addEventListener('click', () => {
    console.log('click en nav');
});

nav.addEventListener('mouseout', () => {
    console.log('saliendo en nav');
    nav.style.backgroundColor = 'transparent'
});

nav.addEventListener('mouseenter', () => {
    console.log('entrando en nav');
    nav.style.backgroundColor = 'white'
});

