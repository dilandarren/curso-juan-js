const reproductor = {
    cancion:'',
    reproducir:id => console.log(`Reproduciendo canción con el id ${id}`),
    pausar:() =>console.log('pausando...'),
    borrar:(id) => console.log(`borrando canción... ${id}`),
    crearPlaylist:(nombre) => console.log(`Creando Playlist de ${nombre}`),
    reproducirPlaylist:nombre => console.log(`Reproduciendo la playlist: ${nombre}`),

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion() {
        console.log(`${this.cancion}`)
    }
}


reproductor.nuevaCancion = 'Enter Sandman';
reproductor.obtenerCancion;


reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('Merengue');
reproductor.reproducirPlaylist('Rock 90');