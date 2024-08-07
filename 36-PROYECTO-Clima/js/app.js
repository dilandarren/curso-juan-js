const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima);
})


function buscarClima(e) {
    e.preventDefault();

    //validar
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    if(ciudad === '' || pais === '') {
        //hubo un error
        mostrarError('Ambos campos son obligatorios');

        return;
    }

    //consultar API
    consultarAPI(ciudad, pais); 
}


function mostrarError(mensaje) {
    const alerta = document.querySelector('.bg-red-100');

    //crear una alerta
    

    if(!alerta) {
        const alerta = document.createElement('div');
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'px-3', 'rounded', 'max-w-md', 'mx-md', 'mx-auto', 'mt-6', 'text-center');


        alerta.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block">${mensaje}</span>
        `;

        container.appendChild(alerta);


        setTimeout(() => {
            alerta.remove();
        }, 5000);
    }

    
}

function consultarAPI(ciudad, pais) {


    const appId = '1eae81bc2c518cfbc29a0bc9367b8745'

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;


    Spinner(); 

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos=> {
            limpiarHTML();//Limpiar el HTML previo

            if(datos.cod === "404") {
                mostrarError('Ciudad no encontrada');
                return;
            }


            //Imprime la respuesta del HTML
            mostrarClima(datos)

            

        })

        // .catch((e) => {
        //     console.log(e.getmessage);;
        // })

            
    }


    



    function mostrarClima(datos) {
        const {name, main: { temp, temp_max, temp_min }} = datos;

        const centigrados = kelvinACentigrados(temp);
        const max = kelvinACentigrados(temp_max);
        const min = kelvinACentigrados(temp_min);

        const nombreCiudad = document.createElement('p');
        nombreCiudad.textContent = `Clima en ${name}`;
        nombreCiudad.classList.add('font-bold', 'text-2xl');

        const actual = document.createElement('p');
        actual.innerHTML = `${centigrados} &#8451;`;
        actual.classList.add('font-bold', 'text-6xl');

        const tempMaxima = document.createElement('div');
        tempMaxima.innerHTML = `Max: ${max} &#8451;`
        tempMaxima.classList.add('text-xl');

        const tempMinima = document.createElement('div');
        tempMinima.innerHTML = `Min: ${min} &#8451;`;
        tempMinima.classList.add('text-xl');

        const resultadoDiv = document.createElement('div');
        resultadoDiv.classList.add('text-center', 'text-white');

        resultadoDiv.appendChild(nombreCiudad);
        resultadoDiv.appendChild(actual);
        resultadoDiv.appendChild(tempMaxima);
        resultadoDiv.appendChild(tempMinima);

        resultado.appendChild(resultadoDiv);
    }

    function kelvinACentigrados(grados) {
        return parseInt(grados - 273.15)
    }


    function limpiarHTML() {
        while(resultado.firstChild) {
            resultado.removeChild(resultado.firstChild);
        }
    }


    function Spinner() {

        limpiarHTML();

        const divSpinner = document.createElement('div');
        divSpinner.classList.add('sk-fading-circle');

        divSpinner.innerHTML = `

            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>

        `;
        resultado.appendChild(divSpinner);
    }