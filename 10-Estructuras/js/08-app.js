const autenticado = true;

if(autenticado === true) {
    console.log('El usuario esta autenticado');
}

const puntos = 300;

function revisarPuntaje() {
    if(puntos > 400) {
        console.log('Exelente!!');
        return;
    }
    
    if (puntos > 300) {
        console.log('Buen puntaje... Felicitaciones');
        return
    }
}

revisarPuntaje();

