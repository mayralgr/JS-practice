const enlace = document.createElement('a');
// Agregandole el texto
enlace.textContent = 'Nuevo Enlace';
// añadiendo href
enlace.href = '/nuevo-enlace';

enlace.target = "_blank";

enlace.setAttribute('data-enlace', 'nuevo-enlace');

enlace.classList.add('alguna-clase');

enlace.onclick = miFuncion;
console.log(enlace);
// Seleccionar la navegacion
const navegacion = document.querySelector('.navegacion');
//navegacion.appendChild(enlace);
console.log(navegacion.children);
// en posicion especifica
navegacion.insertBefore(enlace, navegacion.children[1]);

function miFuncion() {
    alert('Diste click');
}

// Crear un card de forma dinamica 
const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

// Crear div con la clase de info
const divInfo = document.createElement('div');
divInfo.classList.add('info');

divInfo.appendChild(parrafo1);
divInfo.appendChild(parrafo2);
divInfo.appendChild(parrafo3);

// crear imagen 
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.alt = 'text alternative';

const card = document.createElement('div');
card.classList.add('card');

// Asignar la imagen
card.appendChild(imagen);
// Asignar dive
card.appendChild(divInfo);

// Insertar en html
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card);
