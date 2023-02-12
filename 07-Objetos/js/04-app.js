const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
} 

/* const nombre = producto.nombre;
console.log(nombre); */


//Deconstructuring
const {nombre, precio} = producto;
console.log(nombre);
console.log(precio);