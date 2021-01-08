// Formas de crear classes


    // class declaration
class Cliente {

    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es ${this.saldo}`;
    }

    // static methods do not need an instance
    static bienvenida() {
        return `Bienvenido al cajero`;
    }
}

const juan = new Cliente('juan', 400);

console.log(juan);
console.log(juan.mostrarInformacion());
console.log(Cliente.bienvenida());
// Class expression
const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es ${this.saldo}`;
    }
}


const juan2 = new Cliente2('Juan', 400);
console.log(juan2);
console.log(juan2.mostrarInformacion());