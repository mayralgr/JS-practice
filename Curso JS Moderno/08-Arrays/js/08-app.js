// Object
const producto = {
    nombre : "Monitor de 20 pulgadas",
    precio : 300,
    disponible : true,
}

// const nombre = producto.nombre;

// console.log(nombre);

// Object destructured

// const { nombre } = producto;

// const { precio } = producto;

// console.log(nombre);
// console.log(precio);

const { nombre, precio, disponible } = producto;
console.log(nombre);

// Destructuring con arraglos
const numeros = [10,20,30,40,50];
// se puede nombar como sea, el valor esta definido por la posición 
const [primero, segundo, tercero] = numeros
const [ , , third] = numeros;
const [ first, second, ...t] = numeros;
console.log(tercero);
console.log(third);
console.log(t);