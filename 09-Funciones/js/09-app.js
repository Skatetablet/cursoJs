const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo cancion con el id ${id}...`);
    },
    pausar: function(){
        console.log("Pausando...");
    },
    borrar: function(id ) {
        console.log(`Borrando cancion con el id ${id}...`);
    },
    crearPlaylist: function(nombre){
        console.log(`Tu playlist ${nombre}, ha sido creada`);
    },
    reproduciendoPlaylist: function(nombre) {
        console.log(`Reproduciendo la playlist ${nombre}`);
    }
}

reproductor.reproducir(30);
reproductor.reproducir(15);
reproductor.pausar();

reproductor.borrar(5)
reproductor.crearPlaylist("Bellakeo")
reproductor.reproduciendoPlaylist("Bellakeo");