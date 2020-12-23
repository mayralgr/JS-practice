const producto = 'Monitor 20 pulgadas';
console.log(producto);
console.log(producto.replace('pulgadas','"'));
console.log(producto.replace('Monitor','Monitor curvo'));

// .slice para cortar
console.log(producto.slice(0, 10));

// start y hasta el termino
console.log(producto.slice(8));

// si el fin es menor al inicio, no hace nada
console.log(producto.slice(2,1));

// substring
// alternativa a slice
console.log("substring")

console.log(producto.substring(0, 10));

// start y hasta el termino
console.log(producto.substring(8));

// si el fin es menor al inicio, los cambia y regresa la cadena
console.log(producto.substring(2,1));

const usuario = "Juan";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));