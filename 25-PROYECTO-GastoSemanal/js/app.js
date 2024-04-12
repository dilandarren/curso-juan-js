//Variables y Selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul')


//Eventos

eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

    formulario.addEventListener('submit', agragarGasto);
}

// Classes

class Presupuesto{
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto(gasto) {
        this.gastos = [...this.gastos, gasto];
        console.log(this.gastos);
    }
}

class UI {
    instanciarPresupuesto( cantidad ) {
        //Extrayendo los valores
        const {presupuesto, restante} = cantidad;

        //AGREGAR AL HTML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje, tipo) {
        //crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');

        if(tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }

        //MENSAJE DE ERROR
        divMensaje.textContent = mensaje;

        // insertar EL HTML
        document.querySelector('.primario').insertBefore( divMensaje, formulario);

        //QUITAR DEL HTML
        setTimeout( () => {
            divMensaje.remove();
        }, 3000);
    }
    
}

//INSTANCIAR
const ui = new UI();
let presupuesto;



//Funciones

function preguntarPresupuesto() {
    const presupuestoUsuario = prompt('¿Cual es tu presupuesto?');

    // console.log(parseFloat(presupuestoUsuario));

    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        window.location.reload();
    }

    //Presupuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario);
    console.log(presupuesto);

    ui.instanciarPresupuesto(presupuesto);
}



//AÑADE GASTOS
function agragarGasto(e) {
    e.preventDefault();



    //LEER LOS DATOS DEL FORMULARIO
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    //VALIDAR
    if(nombre === '' || cantidad === '') {
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');

        return;
    }else if ( cantidad <= 0 || isNaN(cantidad) ) {
        ui.imprimirAlerta('Cantidad no vàlida', 'error');

        return;
    }


    //GENERAR UN OBJETO CON EL GASTO
    const gasto = {nombre, cantidad, id: Date.now()}


    //AÑADE UN NUEVO GASTO
    presupuesto.nuevoGasto( gasto );

    ui.imprimirAlerta('Gasto agregado correctamente');


    //reinicia el formulario
    formulario.reset();
}