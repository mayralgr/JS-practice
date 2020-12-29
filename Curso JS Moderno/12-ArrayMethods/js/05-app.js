// Find

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Con un foreach
let resultado = '';
carrito.forEach( (producto, index) => {
    if (producto.nombre === 'Tablet'){
        resultado = carrito[index];
        return;
    }
})
console.log(resultado);


// con .find
// solo regresa el primero que cumpla con la condición
const resultado2 = carrito.find(producto => producto.nombre === 'Table');
console.log(resultado2);