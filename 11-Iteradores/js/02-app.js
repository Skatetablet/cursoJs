/* for(let i=0; i <= 10; i++) {
    if (i === 5) {
        console.log("CINCO");
        continue;
    }
    console.log(`Numero: ${i}`);
} */

const carrito = [
    {nombre: "monitor", precio: 5000},
    {nombre: "tablet", precio: 2500, descuento: true},
    {nombre: "television", precio: 3600},
    {nombre: "celular", precio: 8000},
    {nombre: "monitor curvo", precio: 10000},
]
for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].descuento) {
        console.log(`El carrito ${carrito[i].nombre} tiene descuento`);
        continue;
    }
    console.log(carrito[i].nombre);
}