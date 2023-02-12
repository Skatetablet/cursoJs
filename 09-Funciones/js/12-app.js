const carrito = [
    {nombre: "monitor", precio: 5000},
    {nombre: "tablet", precio: 2500},
    {nombre: "television", precio: 3600},
    {nombre: "celular", precio: 8000},
    {nombre: "monitor curvo", precio: 10000},
]

const nuevoArreglo = carrito.forEach(producto => `Nombre: ${producto.nombre} - Precio: ${producto.precio}`);

const nuevoArreglo2 = carrito.map(producto => {
    return`Nombre: ${producto.nombre} - Precio: ${producto.precio}`;
});

console.log(nuevoArreglo);
console.log(nuevoArreglo2);

