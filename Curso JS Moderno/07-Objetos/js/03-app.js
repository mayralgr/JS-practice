// Object
const producto = {
    nombre : "Monitor de 20 pulgadas",
    precio : 300,
    disponible : true,
}

// AGREGAR NUEVA propiedades al objeto

producto.imagen = "imagen.jpg";

// Eliminar propiedades del objeto
delete producto.disponible

console.log(producto);