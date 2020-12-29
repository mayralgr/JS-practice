const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar'];

const carrito = [
    {nombre: "monitor", precio: 500},
    {nombre: "monitor1", precio: 600},
    {nombre: "monitor2", precio: 700},
    {nombre: "monitor3", precio: 800},
    {nombre: "monitor4", precio: 900}
]

for (let pendiente of pendientes) {
    console.log(pendiente);
}

for (let producto of carrito) {
    console.log(producto.nombre);
}