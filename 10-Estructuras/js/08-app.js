const autenticado = true;

if (autenticado) {
    console.log("El usuario esta autenticado");
}

const puntaje = 401;


function revisarPuntaje() {
    if (puntaje > 400)  {
        console.log("Excelente");
        return;
    }

    if (puntaje > 300)  {
        console.log("Muy bien");
        return;
    }
}

revisarPuntaje();