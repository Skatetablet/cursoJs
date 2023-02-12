
iniciarApp();


function iniciarApp() {
    console.log("Iniciando app...");
    segundaFuncion();
}


function segundaFuncion()  {
    console.log("Desde la segunda funcion");
    usuarioAuth("Ricardo");
}

function usuarioAuth(usuario) {
    console.log("Auteticando usuario....");
    console.log(`Usuario autenticado: ${usuario}`);
}