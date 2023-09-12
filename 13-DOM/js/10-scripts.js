const enlace = document.createElement('A');

enlace.textContent = 'Nuevo enlace';

enlace.href = '/Nuevo-enlace';

console.log(enlace);


enlace.target = "_blank"

enlace.setAttribute('data-enlace', 'nuevo enlace');

enlace.classList.add('alguna-clase');

// enlace.onclick = miFuncion;

const navegacion = document.querySelector('.navegacion');
// console.log(navegacion.children)
navegacion.insertBefore(enlace, navegacion.children[1]);




//Crear un card

const parrafo1= document.querySelector('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concieto');
const parrafo2= document.querySelector('P');
parrafo2.textContent = 'concierto de rock';
parrafo2.classList.add('titulo');


const parrafo3= document.querySelector('P');
parrafo3.textContent = '$800 por persona'; 
parrafo3.classList.add('precio');


const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.alt = "texto alternativo"

const card = document .createElement('div');
card.classList.add('card');

card.appendChild(imagen);

card.appendChild(info);


const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.insertBefore(card, contenedor.children[0]);

console.log(imagen);