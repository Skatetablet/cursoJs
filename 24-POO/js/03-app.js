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

//Herencia

class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    static bienvenida() { //Reescribir un metodo, con solo nombrarlo igual
        return `Bienvenido al cajero de empresas`;
    }
}

const ricardo = new Cliente("Ricardo", 500);
const empresa = new Empresa("Codeando con ricardo", 800, 1091315, "Aprendizaje en linea");
console.log(empresa.mostrarInfo());
console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());