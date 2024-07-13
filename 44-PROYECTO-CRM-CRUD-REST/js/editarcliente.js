import { mostrarAlerta, validar } from './funciones.js';
import { obtenerCliente, editarCliente } from "./API.js"; 

(function() {

    //Campos del formulario
    const nombreInput = document.querySelector('#nombre')
    const emailInput = document.querySelector('#email')
    const empresaInput = document.querySelector('#empresa')
    const telefonoInput = document.querySelector('#telefono')
    const idInput = document.querySelector('#id')

    document.addEventListener('DOMContentLoaded', async () => {
        const parametrosURL = new URLSearchParams(window.location.search);

        const clienteId = (parametrosURL.get('id') );

        const cliente = await obtenerCliente(clienteId);
        mostrarCliente(cliente);

        //Submit al formulario
        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit', validarCliente);

    });

    function mostrarCliente(cliente) {
        const { nombre, empresa, email, telefono, id} = cliente;

        nombreInput.value = nombre;
        empresaInput.value = empresa;
        emailInput.value = email;
        telefonoInput.value = telefono;
        idInput.value = id;
        
    }

    function validarCliente(e) {
        e.preventDefault();

        const cliente = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: idInput.value
        }

        console.log(cliente);

        if (validar(cliente)) {
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }


        //Reescribe

        editarCliente(cliente)
    }
})()