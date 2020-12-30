// Seleccionar elementos por su clase
const header = document.getElementsByClassName('header');
console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);

// Si las clases existen más de una vez, regresa el arreglo html collection
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);

// Si una clase no existe
const noExiste = document.getElementsByClassName('do');
console.log(noExiste);