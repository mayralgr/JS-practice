const producto = '         Monitor 20 pulgadas        ';
console.log(producto);
console.log(producto.length);

// Eliminar del inicio
console.log( producto.trimStart());
// Eliminar del final
console.log( producto.trimEnd());
// chaining, son nuevos metodos
console.log( producto.trimStart().trimEnd());

// En ambas direcciones
console.log( producto.trim());

