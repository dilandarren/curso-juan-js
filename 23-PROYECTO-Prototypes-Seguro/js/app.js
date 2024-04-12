
//CONSTRUCTORES
function Seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}
//REALIZA LA COTIZACIÓN CON LOS DATOS
Seguro.prototype.cotizarSeguro = function() {
    /*
        1 = americano 1.15
        2 = asiatico 1.05
        3 = europeo 1.35

    */

    let cantidad;
    const base = 2000;
   console.log(this.marca);
   switch(this.marca) {
        case'1':
            cantidad = base *1.15
            break;
        case'2':
            cantidad = base *1.05
            break;
        case'3':
            cantidad = base *1.35
            break;
        default:
            break;
   }

   //LEER AÑO 
   const diferencia = new Date().getFullYear() - this.year;

   //CADA AÑO QUE LA DIFERENCIA ES MAYOR, EL COSTO SE VA A REDUCIR UN 3%
   cantidad -= ((diferencia *3) *cantidad) / 100;

   /**
    * Si el seugro es básico se multiplica por un 30% más
    * Si el seugro es completo se multiplica por un 50% más
    */
   if(this.tipo === 'basico') {
    cantidad *= 1.30;
   }else{
    cantidad *= 1.50;
   }

   return cantidad;
}


function UI() {}

//LLENAR LAS OPCIONES DE LOS AÑOS
UI.prototype.llenarOpciones = () =>{
    const max = new Date().getFullYear(),
        min = max - 20

    const selectYear = document.querySelector('#year');

    for(let i = max; i > min; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}

//MUESTRA ALERTA!!
UI.prototype.mostrarMensaje = (mensaje, tipo) => {
    const div = document.createElement('div');
    if(tipo === 'error') {
        div.classList.add('error');
    } else {
        div.classList.add('correcto')
    }

    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

    //INSERTAR EN HTML
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(() => {
        div.remove();
    }, 3000);

}

UI.prototype.mostrarResultado = (total, seguro) => {
    
    const {marca, year, tipo} = seguro;

    let textoMarca;

    switch(marca){
        case'1':
            textoMarca = 'Americano';
            break;
        case'2':
            textoMarca = 'Asiatico';
            break;
        case'3':
            textoMarca = 'Europeo';
            break;





        default:
            break;
    }

    //Crear el resultado
    const div = document.createElement('div');
    div.classList.add('mt-10');

    div.innerHTML = `
        <p class="header">Tu resumen</p>
        <p class="font-bold">Marca: <span class="font-normal">  ${textoMarca} </span></p>
        <p class="font-bold">Año: <span class="font-normal">  ${year} </span></p>
        <p class="font-bold">tipo: <span class="font-normal capitalize">  ${tipo} </span></p>
        <p class="font-bold">Total: <span class="font-normal"> € ${total} </span></p>
    `;

    const resultadoDiv = document.querySelector('#resultado');


    //Mostrar el spinner
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';


    setTimeout(() => {
        spinner.style.display = 'none';
        resultadoDiv.appendChild(div);
    }, 3000);
}

// INSTANCIAR UI
const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones(); //LLENA EL SELECT CO LOS AÑOS
})

eventListeners();
function eventListeners() {
    const formulario = document.querySelector('#cotizar-seguro')
    formulario.addEventListener('submit', cotizarSeguro)
}

function cotizarSeguro(e){
    e.preventDefault();

    //LEER LA MARCA SELECCIONADA
    const marca = document.querySelector('#marca').value;
    // console.log(marca);

    //LEER LA AÑO SELECCIONADO
    const year = document.querySelector('#year').value;
    // console.log(year);

    //LEER LA TIPO SELECCIONADO
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    // console.log(tipo);

    if(marca === '' || year === '' || tipo === '') {
        ui.mostrarMensaje('TODOS LOS CAMPOS SON OBLIGATORIOS', 'error');
        return;
    }

    ui.mostrarMensaje('Cotizando...', 'exito');

    //OCULTAR LAS COTISACIONES PREVIAS
    const resultados = document.querySelector('#resultado div');
    if(resultados != null) {
        resultados.remove();
    }

    //INSTANCIAR EL SEGURO

    const seguro = new Seguro(marca, year, tipo);
    const total = seguro.cotizarSeguro();
    seguro.cotizarSeguro();
    //UTILIZAR EL PROTOTYPE QUE VA A COTIZAR.
    ui.mostrarResultado(total, seguro);
}