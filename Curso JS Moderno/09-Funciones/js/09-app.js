const reproductor = {
    // metodos de propiedad
    reproducir : function(id) {
        console.log(`Reproducir canción con el id ${id}`);
    },
    pausar: function() {
        console.log('pausando');
    },
    crearPlaylist : function(nombre) {
        console.log(`Creando playlist con el nombre de ${nombre}`);
    },
    reproductirPlaylist : function(nombre) {
        console.log(`Reproduciendo playlist con el nombre de ${nombre}`);
    }
}

reproductor.reproducir(30);

reproductor.reproducir(20);

reproductor.pausar();

reproductor.borrar = function (id) {
    console.log(`Borrando canción...${id}`);
}

reproductor.borrar(30);

reproductor.crearPlaylist('playlist1');

reproductor.reproductirPlaylist('playlist1');
