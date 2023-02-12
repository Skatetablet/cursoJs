//Switch case

const metodoPago = "efectivo";

switch(metodoPago) {
    case "efectivo":
        Pagar();
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case "cheque":
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case "tarjeta":
        console.log(`Pagaste con ${metodoPago}`);
        break;
    default:
        console.log("Aun no has seleccionado un metodo de pago o es un metodo de pago no soportado");
        break;
}

function Pagar() {
    console.log("Pagando...");
}