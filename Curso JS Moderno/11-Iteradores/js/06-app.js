// forEach

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar'];

pendientes.forEach( (pendiente, indice ) => {
    console.log(` ${indice}: ${pendiente}`);
});

const carrito = [
    {nombre: "monitor", precio: 500},
    {nombre: "monitor1", precio: 600},
    {nombre: "monitor2", precio: 700},
    {nombre: "monitor3", precio: 800},
    {nombre: "monitor4", precio: 900}
]

carrito.forEach( (producto ) => {
    console.log(producto.nombre);
});

carrito.map( producto => console.log(producto.nombre));

// map crea un arreglo nuevo y foreach no