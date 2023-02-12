const usuario = false;
const puedePagar = false;

//Deben cumplir ambas condiciones
if(usuario && puedePagar) {
    console.log("Si eres usuario");
} else if(!usuario) {
    console.log("Inicia sesion o saca una cuenta");
} else if(!puedePagar) {
    console.log("Fondos Insuficientes");
} else {
    console.log("No puede pagar");
}