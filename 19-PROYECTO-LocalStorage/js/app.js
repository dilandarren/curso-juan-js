/***********************************************************************************************
 ***********************************************************************************************
 *
 *                                      Variables
 * 
 *********************************************************************************************** 
 ***********************************************************************************************/


const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];





























/***********************************************************************************************
 ***********************************************************************************************
 *
 *                                        Eventos
 * 
 ***********************************************************************************************
 ***********************************************************************************************/

EventListeners();
function EventListeners() {
    //Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    //Cuando el documento este listo
    document.addEventListener('DOMContentLoaded', () =>  {
        tweets = JSON.parse( localStorage.getItem('tweets')) || [];
        console.log(tweets);



        crearHTML();
    })
}




























 /***********************************************************************************************
 ***********************************************************************************************
 *
 *                                        Funciones
 * 
 ***********************************************************************************************
 ***********************************************************************************************/

function agregarTweet(e) {
    e.preventDefault();

    //Textarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;

    

    //Validacion...
    if(tweet === '') {
        mostrarError('Un mensaje no puede ir vacio');

        return;
    }

    const tweetObj = {
        id: Date.now(),
        tweet
    }

    //Añadir al arreglo de tweets
    tweets = [...tweets, tweetObj];

    //una vez agregado vamos a craer el HTML
    crearHTML();

    //reiniciar el formulario
    formulario.reset();
}


//Mostrar Mensaje de error
function mostrarError(error) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    //Insertarlo en el Contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    //Elimina la alerta despues de 3 segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000); 
}

//Muestra un listado de tweets
function crearHTML() {
    limpiarHTML();

    if(tweets.length > 0) {
        tweets.forEach( tweet => {


            //Agregar un moton de eliminar
            const btnEliminar = document.createElement('a')
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';


            //Añadir la funcion de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            //crear el HTML

            const li = document.createElement('li');

            //añadir el texto
            li.innerText = tweet.tweet;

            //Asingar el boton
            li.appendChild(btnEliminar);

            //insertarlo en el HTML
            listaTweets.appendChild(li);
        })
    }

    sincronizaStorage();
}


function sincronizaStorage () {
    localStorage.setItem('tweets', JSON.stringify(tweets) )
}



//Eliminar un tweet
function borrarTweet(id) {
    tweets = tweets.filter( tweet => tweet.id  !== id);

    crearHTML();
}



//limpiar el HTML
function limpiarHTML() {
    while( listaTweets.firstChild ) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}

