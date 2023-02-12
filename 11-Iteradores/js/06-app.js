//forEach

const tareas = ["TAREA", "COMER", "PROYECTO", "JUGAR GOW"];

tareas.forEach( (tarea, indice) => {
    console.log(`${indice} : ${tarea}`)
});

const carrito = [
    {nombre: "monitor", precio: 5000},
    {nombre: "tablet", precio: 2500},
    {nombre: "television", precio: 3600},
    {nombre: "celular", precio: 8000},
    {nombre: "monitor curvo", precio: 10000},
]

carrito.forEach( producto => {
    console.log(producto.nombre);
})

carrito.map( producto => {
    console.log(producto.nombre);
})