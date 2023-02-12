const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 500 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


meses.forEach( (mes, index) => {
    if (mes === "Diciembre"){
        console.log(`Encontrado en el indice ${index}`);
    }
});

//Encontrar el indice de abril
const indice = meses.findIndex( mes => mes === "Enero");
console.log(indice);

//Encontrar el indice en el arreglo de objetis

const indice2 = carrito.findIndex( producto => producto.precio === 500);
console.log(indice2);

