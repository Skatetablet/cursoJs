const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

//Arreglo con los keys del objeto
console.log(Object.keys(producto));

//Arregle con los valores del objeto
console.log(Object.values(producto));

//Arreglo retorna todo en pares: ejemplo nombre - "nombre"
console.log(Object.entries(producto));