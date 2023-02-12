const tareas = ["TAREA", "COMER", "PROYECTO", "JUGAR GOW"];

const carrito = [
    {nombre: "monitor", precio: 5000},
    {nombre: "tablet", precio: 2500},
    {nombre: "television", precio: 3600},
    {nombre: "celular", precio: 8000},
    {nombre: "monitor curvo", precio: 10000},
]

for(let tarea of tareas) {
    console.log(tarea);
}

for(let producto of carrito) {
    console.log(producto.nombre);
}