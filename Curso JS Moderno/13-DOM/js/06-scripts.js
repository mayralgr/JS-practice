const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);
// en visibility hidden no lo va a encontrar
console.log(encabezado.innerText);
// este si lo va a encontrar
console.log(encabezado.textContent);
// trae el html
console.log(encabezado.innerHTML);

// encadenamiento
const textEncabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(textEncabezado);

const nuevoHeadin = "new heading";
document.querySelector('.contenido-hero h1').textContent = nuevoHeadin;

const imagen = document.querySelector('.card img');

imagen.src = 'img/hacer2.jpg';