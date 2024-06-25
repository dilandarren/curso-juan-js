const aplicarDescuento = new Promise( (resolve, reject) => {

    const descuento = true;

    if(descuento) {
        resolve('Descuento Aplicado');
    } else {
        reject('Nose pudo aplicar el descuento');
    }
})


    aplicarDescuento
        .then( resultado => {
            console.log(resultado);
        })
        .catch((error) => {
            console.log(error);
        })




//hay 3 valores posibles...
//fulfilled - El promise se cumplio
// reject - El promise no se cumplio
//pending - no se ha cumplido y tampoco fue rechazado