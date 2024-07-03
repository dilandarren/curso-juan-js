//https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR

const criptomonedaSelect = document.querySelector('#criptomonedas');
const monedaSelect = document.querySelector('#moneda');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

const objBusqueda = {
    moneda: '',
    criptomoneda: '',
}

//crear un Promise
const obtenerCripmonedas = criptomonedas => new Promise(resolve => {
    resolve(criptomonedas);
})

document.addEventListener('DOMContentLoaded', () => {
    consultarCriptomonedas();

    formulario.addEventListener('submit', submitFormulario);

    criptomonedaSelect.addEventListener('change', leerValor);
    monedaSelect.addEventListener('change', leerValor);
});


function consultarCriptomonedas() {
    const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
    fetch(url)
        .then( respuesta => respuesta.json())
        .then(resultado => obtenerCripmonedas(resultado.Data))
        .then(criptomonedas => selectCriptomonedas(criptomonedas))
}

function selectCriptomonedas(criptomonedas) {
    criptomonedas.forEach(cripto => {
        const { FullName, Name} = cripto.CoinInfo;

        const option = document.createElement('option');
        option.value = Name;
        option.textContent = FullName;
        criptomonedaSelect.appendChild(option);
    });
}


function leerValor(e) {
    objBusqueda[e.target.name] = e.target.value;
}


function submitFormulario(e) {
    e.preventDefault();

    //validar
    const{ moneda, criptomoneda} = objBusqueda;

    if(moneda === '' || criptomoneda === '') {
        mostrarAlerta('Ambos compos son obligatorios');
        return;
    }

    consultarAPI();
}



function mostrarAlerta(msg) {
    const existeError = document.querySelector('.error');

    if (!existeError) {
        const divMensaje = document.createElement('div');
    divMensaje.classList.add('error');

    //mensaje de error
    divMensaje.textContent = msg;

    formulario.appendChild(divMensaje);
    setTimeout(() => {
        divMensaje.remove();
    }, 3000);
    }

    
}

function consultarAPI() {
    const { moneda, criptomoneda} = objBusqueda;

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

    fetch(url)
        .then( respuesta => respuesta.json())
        .then( cotizacion => {
            mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]);
        })
}

function mostrarCotizacionHTML(cotizacion) {


    limpiarHTML();




    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE} = cotizacion;

    const precio = document.createElement('p');
    precio.classList.add('precio');
    precio.innerHTML = `El Precio es: <span>${PRICE}</span>`;

    const precioAlto = document.createElement('p');
    precioAlto.innerHTML = `El Precio más alto del dia: <span>${HIGHDAY}</span>`;

    const precioBajo = document.createElement('p');
    precioBajo.innerHTML = `El Precio más bajo del dia: <span>${LOWDAY}</span>`;

    const ultimaHoras = document.createElement('p');
    ultimaHoras.innerHTML = `Ultimas horas: <span>${CHANGEPCT24HOUR}</span>`;

    const ultimaActualizacion = document.createElement('p');
    ultimaActualizacion.innerHTML = `Ultima Actualizacion: <span>${LASTUPDATE}</span>`;

    




    resultado.appendChild(precio);
    resultado.appendChild(precioAlto);
    resultado.appendChild(precioBajo);
    resultado.appendChild(ultimaHoras);
    resultado.appendChild(ultimaActualizacion);
}

function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}