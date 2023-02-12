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


let resultado;
resultado = {...carrito, producto};
resultado = {...resultado, producto2};
resultado = {producto3, ...resultado };

console.table(resultado);