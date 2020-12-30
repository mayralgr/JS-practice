// moverse entre elementos se llama traversing the dom



const navegacion = document.querySelector('.navegacion');
// hijos, son nodos

console.log(navegacion.firstElementChild);

console.log(navegacion.lastElementChild);
// childnodes lista los espacios en blanco como text
// console.log(navegacion.childNodes);
// solo contiene elementos html, sin espacios en blanco considerados
// console.log(navegacion.children);

// nodename es la etiqueta
// console.log(navegacion.children[1].nodeName);
// tipo 1 es un nodo tipo elementos
// console.log(navegacion.children[1].nodeType);

const card = document.querySelector('.card');
card.children[1].children[1].textContent = "traversing the dom";
card.children[0].src = "img/hacer3.jpg ";

console.log(card.children[1].children[1].textContent);
// Considera espacios en blanco
console.log(card.parentNode);
// Elemento de html
console.log(card.parentElement);

// seleccionar hermanos
console.log(card.nextElementSibling);

console.log(card.nextElementSibling.nextElementSibling);

// ir al elemento previo
const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard.previousElementSibling);