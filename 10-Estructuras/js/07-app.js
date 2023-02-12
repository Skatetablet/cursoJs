const efectivo = 300;
const credito = 400;
const disponible = efectivo + credito;
const totalPagar = 600;

//Con una condicion que se cumpla es suficiente
if (efectivo > totalPagar || credito > totalPagar || disponible > totalPagar) {
    console.log("Si podemos pagar ");
} else {
    console.log("Fondos insuficientes");
}