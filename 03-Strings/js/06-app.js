const producto = "Monitor 20 pulgadas ";

//.repeat es para repetir un string 

const texto = "en Promocion".repeat(3);

console.log(texto)
console.log(`${producto} ${texto}!!`);

//Split es para dividir un string

const actividad = "Estoy aprendiendo javascript chilo";
console.log(actividad.split(" "));

const hobbies = "Leer, caminar, escuchar musica, escribir, aprender, comer";
console.log(hobbies.split(","));

const tweet = "Aprendiendo javascript #JSConJuan";
console.log(tweet.split("#"))