const cliente = {
    nombre: "Ricardo",
    saldo: 600
}

console.log(cliente);

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const ricardo = new Cliente("Ricardo", 500);
console.log(ricardo);