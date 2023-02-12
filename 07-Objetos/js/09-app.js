"use strict";

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
} 
//Permite modidicar las propiedades
Object.seal(producto);

//Pero no agregar propiedades
producto.disponible = false;
producto.imagen = "imagen.jpg";
//Ni eliminar
delete producto.precio;

console.log(producto);

console.log(Object.isSealed(producto));