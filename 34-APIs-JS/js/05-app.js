document.visibilityState('visibilitychange', () => {
    if(document.visibilityState === 'visible') {
        console.log('Ejecutar funcion video');
    } else{
        console.log('pausar el video');
    }
})