const carrito = [
    {nombre: "monitor", precio: 500},
    {nombre: "monitor1", precio: 600},
    {nombre: "monitor2", precio: 700},
    {nombre: "monitor3", precio: 800},
    {nombre: "monitor4", precio: 900}
]

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i]);
}

// Array methods
carrito.forEach( function(producto) {
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
})