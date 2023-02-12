const encabezado = document.querySelector('h1');


/* encabezado.style.backgroundColor = "red";
encabezado.style.fontFamily = "Arial";
encabezado.style.textTransform = "uppercase"; */

const card = document.querySelector('.card');
card.classList.add("nuevaClase", "segundaClase");
card.classList.remove("card")
console.log(card.classList);
