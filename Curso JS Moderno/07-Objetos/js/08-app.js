"use strict";
// Object
const producto = {
    nombre : "Monitor de 20 pulgadas",
    precio : 300,
    disponible : true,
}

Object.freeze(producto);

console.log(Object.isFrozen(producto));

producto.disponible = false;

producto.imagen = "imagen.jpg";

console.log(producto);
