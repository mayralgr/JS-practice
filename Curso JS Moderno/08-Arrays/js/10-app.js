const carrito = [
    {nombre: "monitor", precio: 500},
    {nombre: "monitor1", precio: 600},
    {nombre: "monitor2", precio: 700},
    {nombre: "monitor3", precio: 800},
    {nombre: "monitor4", precio: 900}
]

// Array methods
const nuevoArreglo = carrito.map( function(producto) {
    return `${producto.nombre} - Precio: ${producto.precio}`;
})
// Array methods
const nuevoArreglo2 = carrito.forEach( function(producto) {
    return `${producto.nombre} - Precio: ${producto.precio}`;
})

console.log(nuevoArreglo);

console.log(nuevoArreglo2);