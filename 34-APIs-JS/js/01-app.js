const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
    Notification.requestPermission()
    .then( resultado => {
        console.log('El resultado es', resultado);
    })
})

const verNotificacion = document.querySelector('#verNotificacion');
verNotificacion.addEventListener('click', () => {
    if(Notification.permission === 'granted') {
        const notificacion = new Notification('Esta es la notificacion', {
            icon: 'img/ccj.png',
            body: 'Codigo con Dilan, se aprende'
        });


        notificacion.onclick = function() {
            window.open('http://www.splityn.com');
        }
        
    }
})