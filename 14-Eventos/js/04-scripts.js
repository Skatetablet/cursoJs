const form = document.querySelector("#formulario");

form.addEventListener("submit", validarForm);

function validarForm(e) {
    e.preventDefault();

    console.log(e.target.action);
}