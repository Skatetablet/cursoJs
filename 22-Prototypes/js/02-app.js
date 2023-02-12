function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const ricardo = new Cliente("Ricardo", 500);

function formatearCliente(cliente) {
    const {nombre, saldo}  = cliente;
    return `El cliente ${nombre}, tiene un saldo de ${saldo}`;
}

function formatearEmpresa(cliente) {
    const {nombre, saldo, categoria}  = cliente;
    return `El cliente ${nombre}, tiene un saldo de ${saldo} y pertenece a la categoria ${categoria}`;
}

console.log(formatearCliente(ricardo));

function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const CCR = new Empresa("Codigo con Ricardo", 4000, "Cursos");

console.log(formatearEmpresa(CCR));