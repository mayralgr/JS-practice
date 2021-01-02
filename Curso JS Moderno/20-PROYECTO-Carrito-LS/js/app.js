// variables

// const carrito = document.querySelector('#carrito');

const carrito = document.getElementById('carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
    // Cuando agregas curso presionando "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);
    // Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);
    // Vaciar carrito de compras
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = [];
        limpiarHtml();
    });

    // Muestra los cursos de local storage
    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse( localStorage.getItem('carrito')) || [];
        carritoHtml();
    });
}

function agregarCurso(e) {
    e.preventDefault(); // Evita que regrese al inicio
    if ( e.target.classList.contains('agregar-carrito')) {
        // obtener el codigo para agregar al carrito
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatos(cursoSeleccionado);
    }
}

function eliminarCurso(e) {
    e.preventDefault(); 
    if ( e.target.classList.contains('borrar-curso')) {
        // obtener el id
        const id = e.target.getAttribute('data-id');
        // elimina del arreglo
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== id);
        carritoHtml();
    }
}

// Lee el contenido del html al que le dimos click y extraer el html
function leerDatos(curso) {
    const infoCurso = {
        imagen : curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1,
    }
    // Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id );
    if (existe) {
        // Actualizamos la cantidad
        const cursos = articulosCarrito.map( curso => {
            if ( curso.id === infoCurso.id ) {
                curso.cantidad++;
                return curso;
            } else {
                return curso;
            }
        });
        articulosCarrito = [...cursos];
    } else {
        // Agregar elementos del arreglo
        // ArticulosCarrito.push(infoCurso);
        articulosCarrito = [...articulosCarrito, infoCurso];
    }
    carritoHtml();
}

// Muestra el carrito de compras en el html
function carritoHtml() {
    // Limpiar html
    limpiarHtml();
    // Recorre el carrito y agrega los cursos
    articulosCarrito.forEach( curso => {
        // Destructured
        const { imagen, titulo, precio, cantidad, id } = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
               <img src="${imagen}" width="100">
            </td>
            <td> ${titulo} </td>
            <td> ${precio}</td>
            <td> ${cantidad}</td>
            <td> <a href="#" class="borrar-curso" data-id="${id}">X</a></td>
        `;
        // Agregar en el table body
        contenedorCarrito.appendChild(row);
    });

    // Agregar el carrito de compras al storage
    sincronizarStorage();
}

function sincronizarStorage() {
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

// Elimina los cursos del tbody
function limpiarHtml() {
    // contenedorCarrito.innerHTML = ''; // forma lenta
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}