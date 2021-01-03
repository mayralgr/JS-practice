function Cliente(nombre,saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

// se puede definir un nuevo tipo
// usa function porque busca en el objeto, es decir
// esta ligado al this y las arrow functions son globales 
Cliente.prototype.tipoCliente = function () {
    let tipo ;
    if (this.saldo > 10000) {
        tipo = 'gold';
    } else if (this.saldo > 5000) {
        tipo = 'platinum';
    } else {
        tipo = 'normal'
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, tipo de cliente: ${this.tipoCliente()}`;
}

Cliente.prototype.retiraSaldo = function(retira) {
    this.saldo -=retira;
}

function Persona(nombre, saldo, telefono) {
    Cliente.call(this,nombre,saldo); // Heredar constructor
    this.telefono = telefono;
}

// herencia
Persona.prototype = Object.create(Cliente.prototype);
Persona.prototype.constructor = Cliente;


// Instancia
const juan = new Persona('Juan', 5000, 81613104);
console.log(juan);
console.log(juan.nombreClienteSaldo());

Persona.prototype.mostrarTelefono = function() {
    return `El telefono de esta persona es ${this.telefono}`;

}

console.log(juan.mostrarTelefono());