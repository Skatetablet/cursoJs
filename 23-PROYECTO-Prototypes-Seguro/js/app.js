// Constructors

function Insurance(brand, year, type) {
    this.brand = brand;
    this.year = year;
    this.type = type;
}

Insurance.prototype.cotizarSeguro = function() {
    /*
    1 = Americano 1.15
    2 = Asiatico 10.55
    3 = Europe 1.35
    */

    let cantidad;
    const base = 2000;

    switch (this.brand) {
        case "1":
            cantidad = base * 1.15;
            break;
        case "2":
            cantidad = base * 1.05;
            break;
        case "3":
            cantidad = base * 1.35;
            break;
        default:
            break;
    }

    //Cada año que la dif es mayor, el costo reduce un 3%
    const diferencia = new Date().getFullYear() - this.year;

    cantidad -= ((diferencia * 3) * cantidad ) / 100;

    //Si el seguro es basica se multiplica por 30%
    //Si es completo se multiplica por un 50% más

    if(this.type === "basico") {
        cantidad -= 1.30;
    } else {
        cantidad -= 1.50;
    }

    return cantidad;


}

function UI() {}

//Fills years option
UI.prototype.fillOptions = () => {
    const max = new Date().getFullYear(),
          min = max - 20;

    const selectYear = document.querySelector("#year");

    for (let i = max; i > min; i--) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
        
}

UI.prototype.showMessage = (message, type) => {
    const div = document.createElement("div");
    if( type === "error") {
        div.classList.add("error");
    } else {
        div.classList.add("correcto");
    }

    div.classList.add("mensaje", "mt-10");
    div.textContent = message;

    const form = document.querySelector("#cotizar-seguro");
    form.insertBefore(div, document.querySelector("#resultado"));

    setTimeout(() => {
        div.remove()
    }, 3000);
}

UI.prototype.showResult = (total, seguro) => {

    const {brand, year, type} = seguro;
    let textBrand;
    switch (brand) {
        case "1":
            textBrand = "Americano"
            break;
        case "2":
            textBrand = "Asiatico"
            break;
        case "3":
            textBrand = "Europeo"
            break;
        default:
            break;
    }
    const div = document.createElement("div");
    div.classList.add("mt-10");
    div.innerHTML= `<p class = "header">Tu resumen</p>
    <p class="font-bold">Brand:<span class="font-normal"> ${textBrand}</span></p>
    <p class="font-bold">Year:<span class="font-normal"> ${year}</span></p>
    <p class="font-bold">Type:<span class="font-normal capitalize"> ${type}</span></p>
    <p class="font-bold">Total:<span class="font-normal"> $${total}</span></p>`;
    const resultadoDiv = document.querySelector("#resultado");
    

    const spinner = document.querySelector("#cargando");
    spinner.style.display = "block";

    setTimeout(() => {
        spinner.style.display = "none";
        resultadoDiv.appendChild(div);
    },3000)
}

const ui = new UI();
console.log(ui);

document.addEventListener("DOMContentLoaded", () => {
    ui.fillOptions();
});

eventListeners();
function eventListeners() {
    const form = document.querySelector("#cotizar-seguro");
    form.addEventListener("submit", cotizarSeguro)
}

function cotizarSeguro(e) {
    e.preventDefault();
    const brand = document.querySelector("#marca").value;
    const year = document.querySelector("#year").value;
    const type = document.querySelector("input[name='tipo']:checked").value
    if(brand === "" || year === "" || type === "") {
        ui.showMessage("Lo siento no esta validado", "error");
        return;
    } 
    ui.showMessage("Cotizando...", "exito");

    const resultados = document.querySelector("#resultado div");
    if (resultados != null) {
        resultados.remove();
    }


    const seguro = new Insurance(brand, year, type);
    const total = seguro.cotizarSeguro();
    ui.showResult(total, seguro);
   
} 
