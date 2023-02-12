const reproductor = {
    cancion: "",
    reproducir: id => console.log(`Reproduciendo cancion con el id ${id}...`),
    pausar: () => console.log("Pausando..."),
    borrar: id => console.log(`Borrando cancion con el id ${id}...`),
    crearPlaylist: nombre => console.log(`Tu playlist ${nombre}, ha sido creada`),
    reproduciendoPlaylist: nombre => console.log(`Reproduciendo la playlist ${nombre}`),

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },

    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }
}

reproductor.nuevaCancion = "Enter Sandman"
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.reproducir(15);
reproductor.pausar();

reproductor.borrar(5)
reproductor.crearPlaylist("Bellakeo")
reproductor.reproduciendoPlaylist("Bellakeo");