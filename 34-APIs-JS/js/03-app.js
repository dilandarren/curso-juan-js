window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);

function actualizarEstado() {
    if(navigator.onLine) {
        console.log('hay internet :)');
    } else{
        console.log('no esta conectado :(');
    }
}