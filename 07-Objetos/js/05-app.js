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

console.log(producto);
console.log(producto.informacion);
console.log(producto.informacion.medida);

console.log(producto.informacion.fabricacion.pais);

