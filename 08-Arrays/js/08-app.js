const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
} 

/* const nombre = producto.nombre;
console.log(nombre); */


//Deconstructuring
const {nombre} = producto;

console.log(nombre);

//Destructoring arreglos
const numeros = [10,20,30,40,50];

const [, , tercero, ...cuarto] = numeros;
console.log(tercero);
console.log(cuarto);