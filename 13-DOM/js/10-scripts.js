const enlace = document.createElement("a");

//Agregando texto
enlace.textContent = "Nuevo enlace";

//Agregando href
enlace.href = "/nuevo-enlace";
enlace.target = "_blank";

//Agregar a la navegacion
const navegacion = document.querySelector(".navegacion");
navegacion.insertBefore(enlace, navegacion.children[1]);

//Crear un card de forma dinamica 
const parrafo1 = document.createElement("p");
parrafo1.textContent = "Concierto";
parrafo1.classList.add("categoria", "concierto");

const parrafo2 = document.createElement("p");
parrafo2.textContent = "Concierto de rock";
parrafo2.classList.add("titulo");

const parrafo3 = document.createElement("p");
parrafo3.textContent = "$800 por persona";
parrafo3.classList.add("precio");

//Crear div con clase INFO
const info = document.createElement("div");
info.classList.add("info");

//Agregar texto al div
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//Crear imagen
const imagen = document.createElement("img");
imagen.src = "img/hacer2.jpg";

//Crear card
const card = document.createElement("div");
card.classList.add("card");

card.appendChild(imagen);

//Asignar info 
card.appendChild(info);

//Insertar en el html

const contenedor = document.querySelector(".hacer .contenedor-cards");
contenedor.appendChild(card)
