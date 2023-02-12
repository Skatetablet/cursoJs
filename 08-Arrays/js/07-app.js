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

const producto3 = {
    nombre: "Teclado",
    precio: 1000
}

const producto4 = {
    nombre: "Teclado",
    precio: 1000
}

//Agregar objecto al carrito
carrito.push(producto);
carrito.push(producto2);
carrito.unshift(producto3);
carrito.push(producto4);


//Eliminar ultimo elemento de un arreglo
/* carrito.pop();
console.table(carrito); */

//Eliminar del inicio del arreglo
/* carrito.shift();
console.table(carrito); */

//Eliminar de en medio del arreglo
carrito.splice(1, 1);
console.table(carrito);