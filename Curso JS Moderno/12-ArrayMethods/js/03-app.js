
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Reduce: tomar una gran cantidad de datos
// Unirlos
// Entregar un resultado
 
let total = 0;

carrito.forEach( producto => total += producto.precio);
console.log(total);

// recude (valorActual, objetoActual) , solo + porque se va aculumando, no necesita el +=
let resultado = carrito.reduce( (total, producto) => total + producto.precio, 0);
// 0 es de valor inicial total = 0
console.log(resultado);
