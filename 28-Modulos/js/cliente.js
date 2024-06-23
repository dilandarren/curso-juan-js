
export const nombreCliente = 'Dilan';
export const ahorro = 200;

export  function mostrarInformacion(nombre, ahorro) {
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}

export function tieneSaldo(ahorro) {
    if(ahorro > 0) {
        console.log('Si tiene saldo')

    }else {
        console.log('El cliente no tiene saldo');
    }
}

export class Cliente{
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;
    }
}

export default function nuevaFunction() {
    console.log('este es el export default');
}
// (function() {
//     console.log('Desde un IIFE');
//     window.nombreCliente = 'Dilan';
// })();
// const nombreCliente = 'Dilan';