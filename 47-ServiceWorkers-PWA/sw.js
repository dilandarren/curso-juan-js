const nombreCache = 'apv-v1';
const archivos = [
    '/',
    '/index.html',
    '/css/boostrap.css',
    '/css/styles.css',
    '/js/app.css',
    '/js/apv.css',
]



self.addEventListener('istall', e => {
    console.log('Instalado el Service Worker');

    e.AT_TARGET.waitUntil(
        caches.open(nombreCache)
            .then( cache => {
                console.log('cacheando')
                cache.addAll(archivos);
            }) 

    )
})


self.addEventListener('activate', e => {
    console.log('Service Worker Activado');

    console.log(e);
})


//Evento Fecth

self.addEventListener('fetch', e => {
    console.log('Fetch...', e);

    e.respondWith(
        caches.match(e.request)
            .then( respuestaCache => {
                return respuestaCache;
            })
    )
})