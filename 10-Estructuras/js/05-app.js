//Switch case

const metodoPago = 'efectivo';

switch(metodoPago) {
    case 'efectivo':
        pagar();
        break;
    case 'cheque':
        console.log(`Pages con ${metodoPago}`);
        break;
    case 'tarjeta':
        console.log(`Pages con ${metodoPago}`);
        break;
    default:
        console.log('metodo no soportado');
        break;
}

function pagar() {
    console.log('Pagando...')
}