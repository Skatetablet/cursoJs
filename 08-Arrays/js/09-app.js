const carrito = [
    {nombre: "monitor", precio: 5000},
    {nombre: "tablet", precio: 2500},
    {nombre: "television", precio: 3600},
    {nombre: "celular", precio: 8000},
    {nombre: "monitor curvo", precio: 10000},
]
/* 
for (let i = 0; i < carrito.length; i++) {
    console.log(`Nombre: ${carrito[i].nombre} - Precio: ${carrito[i].precio}`)
} */

carrito.forEach(producto => {
    console.log(`Nombre: ${producto.nombre} - Precio: ${producto.precio}`)
});

