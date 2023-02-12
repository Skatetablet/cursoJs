class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInfo() {

        return `Cliente: ${this.nombre} y tiene un saldo de ${this.saldo}`;
    }

    static bienvenida() {
        return `Bienvenido al cajero`;
    }

}

const ricardo = new Cliente("Ricardo", 500);
console.log(ricardo.mostrarInfo());
console.log(ricardo);

console.log(Cliente.bienvenida());

