class Cliente {

    #nombre;

    constructor(nombre, saldo) {
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInfo() {

        return `Cliente: ${this.#nombre} y tiene un saldo de ${this.saldo}`;
    }

    static bienvenida() {
        return `Bienvenido al cajero`;
    }

}

const juan = new Cliente("Juan", 200);
console.log(juan.mostrarInfo());
console.log(juan.nombre)
