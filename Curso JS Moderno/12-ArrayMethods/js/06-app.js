// Every

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Todos deben cumplir la condición  ---> && 
const resultado = carrito.every( producto => producto.precio < 500);
console.log(resultado);

// contrario a some donde al menos alguno