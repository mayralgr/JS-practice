const reproductor = {
    cancion: '',
    // metodos de propiedad
    reproducir : id =>  console.log(`Reproducir canción con el id ${id}`)
    ,
    pausar: () => console.log('pausando')
    ,
    crearPlaylist : nombre => console.log(`Creando playlist con el nombre de ${nombre}`)
    ,
    reproductirPlaylist : nombre => console.log(`Reproduciendo playlist con el nombre de ${nombre}`)
    ,
    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion() {
        console.log(`${this.cancion}`);
    }
}

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar = (id) => console.log(`Borrando canción...${id}`)
reproductor.borrar(30);
reproductor.crearPlaylist('playlist1');
reproductor.reproductirPlaylist('playlist1');