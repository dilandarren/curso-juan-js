//Oprerador Mayor que y Menor que

const dinero = 300;
const totalAPagar = 500;
const targeta = true;
const cheque = true

if( dinero >= totalAPagar ) {
    console.log('Si podemos pagar');
}else if(cheque) {
    console.log('si tengo cheque')
}else if(targeta) {
    console.log('si puedo pagar porque tengo la tarjeta del hormigero')
}else {
    console.log('Fondos insuficientes');
}