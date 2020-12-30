// Query selector
// Solo regresa el primero que encuentra
const card = document.querySelector('.card');
console.log(card);

// Podemos tener selectores especificos como en css
const info = document.querySelector('.premium .info');
console.log(info);

// Seleccionar el segundo card de hospedaje
const segundoCardHospedaje = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCardHospedaje);

// Query selector permite seleccionar id como en css

// Seleccionar formulario, solo el primero que encuentre
const formulario = document.querySelector('#formulario');

// Seleccionar elementos html
const navegacion = document.querySelector('nav');
console.log(navegacion);