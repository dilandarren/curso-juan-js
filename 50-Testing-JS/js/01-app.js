

function suma(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

let resultado = suma(2, 2);
let esperado = 3;

if(resultado !== esperado) {
    console.error(`El ${resultado} es diferente`);
}else{
    console.log('OK');
}

resultado = restar(10, 5);
esperado = 58;

if(resultado !== esperado) {
    console.error(`El ${resultado} es diferente`);
}else{
    console.log('OK');
}