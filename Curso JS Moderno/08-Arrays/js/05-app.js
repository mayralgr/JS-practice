// const meses = ['Enero','Feb',"Marzo","Abril"];

// meses.push("Mayo");
// meses.push("Junio");
// console.table(meses);


const carrito = [];

// Definir un producto
const producto = {
    nombre: "Monitor 32 pulgadas",
    precio: 400
}

const producto2 = {
    nombre: "Celular",
    precio: 800
}

// push agrega al final del arreglo
carrito.push(producto2);
carrito.push(producto);

const producto3 = {
    nombre: "Teclado",
    precio: 50
}

// primera posición
carrito.unshift(producto3);

console.table(carrito);