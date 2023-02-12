const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);


/* console.log(encabezado.innerText); // Si en el CSS --- visibility: hidden; no lo va a encontrar
console.log(encabezado.textContent); // Si lo va a encontrar
console.log(encabezado.innerHTML); // Se trae el html */

/* 
const nuevoHeading = "Nuevo header"
document.querySelector('.contenido-hero h1').textContent = nuevoHeading;

document.querySelector('.contenido-hero h1').textContent = "Nuevo header"; */



const imagen = document.querySelector('.card img');
imagen.src = "img/hacer3.jpg"