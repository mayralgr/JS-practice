
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

const producto3 = {
    nombre: "Teclado",
    precio: 50
}

// console.table(carrito);
// forma declarativa
resultado = [...carrito, producto]; // push en forma declarativa

resultado = [...resultado, producto2]; // push en forma declarativa

resultado = [producto3, ...resultado]; // unshift en forma declarativa
console.table(resultado);
