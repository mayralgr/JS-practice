// Todos los objetos tienen un prototypes

const cliente = {
    nombre : 'Juan',
    saldo : 500,
}

console.log(cliente);

console.log(typeof cliente);

function Cliente(nombre,saldo) {
    nombre,
    saldo
}

const juan = new Cliente('Juan', 500);

console.log(juan);
