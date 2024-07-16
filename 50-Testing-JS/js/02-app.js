

function suma(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

let resultado = suma(2, 2);
let esperado = 3;

expected(esperado).toBe(resultado);

resultado = restar(10, 5);
esperado = 6;

expected(esperado).toBe(resultado);

expected(esperado).toEqual(resultado);


function expected(esperado) {
    return{
        toBe(resultado){
            if(resultado !== esperado) {
                console.error(`El ${resultado} es diferente`);
            }else{
                console.log('OK');
            }
        },
        toEqual(resultado) {
            if(resultado !== esperado) {
                console.error(`El ${resultado} no es igual a lo esperado`);
            }else{
                console.log('OK');
            }
        }
        
    }
}