

/* for(let i=0; i <= 100; i++) {
    console.log(`Numero: ${i}`);
} */

/* for(let i = 1; i <= 20; i++) {
    if(i % 2 === 0){
        console.log(`El numero es ${i} par`);
    } else {
        console.log(`El numero es ${i} impar`);
    }
} */

const carrito = [
    {nombre: "monitor", precio: 5000},
    {nombre: "tablet", precio: 2500},
    {nombre: "television", precio: 3600},
    {nombre: "celular", precio: 8000},
    {nombre: "monitor curvo", precio: 10000},
]

console.log(carrito.length);

for(let i=0; i < carrito.length; i++){
    console.log(carrito[i].nombre);
}