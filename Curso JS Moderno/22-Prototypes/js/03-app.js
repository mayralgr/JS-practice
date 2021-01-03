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

// Instanciar un cliente
const pedro = new Cliente("pedro", 6000);
console.log(pedro.tipoCliente());
console.log(pedro.nombreClienteSaldo());
pedro.retiraSaldo(1000);
console.log(pedro.nombreClienteSaldo());
console.log(pedro);

function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const CCJ = new Empresa('Codigo con Juan', 4000, 'Cursos en linea');
console.log(CCJ);

