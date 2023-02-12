const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        peso: "1kg",
        medida: {
            metros: "1m",
            pies: "3pies"
        },
        fabricacion: {
            pais: "China"
        }
    }
} 

const {nombre, informacion, informacion: {fabricacion, fabricacion: {pais}}} = producto;
console.log(nombre);
console.log(informacion);
console.log(fabricacion);
console.log(pais);

