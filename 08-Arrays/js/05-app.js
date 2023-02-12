const carrito = [];

//Definir un producto
const producto = {
    nombre: "Monitor",
    precio: 5000
}

const producto2 = {
    nombre: "Celular",
    precio: 10000
}
//Agregar objecto al carrito
carrito.push(producto);
carrito.push(producto2);

const producto3 = {
    nombre: "Teclado",
    precio: 1000
}

carrito.unshift(producto3);

console.table(carrito);