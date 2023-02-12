const producto = "                  Monitor 20 pulgadas              ";

console.log(producto);
console.log(producto.length);

//Eliminar del inicio 
console.log(producto.trimStart());

//Eliminar al final
console.log(producto.trimEnd());

//Eliminar final y al inicio
console.log(producto.trimStart().trimEnd());
console.log(producto.trim());
