const nav = document.querySelector(".navegacion");

//registar un evento
nav.addEventListener("mousedown", () => {
    console.log("Saliendo a la navegacion");

    nav.style.backgroundColor = "Transparent";
});

nav.addEventListener("dblclick", () => {
    console.log("Entrando a la navegacion");
    
    nav.style.backgroundColor = "white";
});

//mousedown - es similar al click
//click
//dblclick - doble click
//mouseup - cuando sueltas el mouse