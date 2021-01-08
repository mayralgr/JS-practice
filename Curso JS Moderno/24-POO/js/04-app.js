// encapsulación

class Cliente {

    #nombre;

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    getNombre() {
        return this.#nombre;
    }

    mostrarInformacion() {
        return `Cliente: ${this.#nombre}, tu saldo es ${this.saldo}`;
    }

    // static methods do not need an instance
    static bienvenida() {
        return `Bienvenido al cajero`;
    }
}

const juan = new Cliente();
juan.setNombre('juan');
//console.log(juan.mostrarInformacion());
console.log(juan.getNombre());