localStorage.setItem("nombre", "ricardo");

const producto = {
    nombre: "Monitor",
    precio: 300
}

const productoString = JSON.stringify(producto);
console.log(productoString);

localStorage.setItem("producto", productoString)

const meses = ["enero", "febrero"]
localStorage.setItem("meses", JSON.stringify(meses))
