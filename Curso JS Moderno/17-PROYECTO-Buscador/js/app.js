// Variables

// Selectores

const anio = document.getElementById('year');
const marca = document.getElementById('marca');
const minimo = document.getElementById('minimo');
const maximo = document.getElementById('maximo');
const puertas = document.getElementById('puertas');
const transmision = document.getElementById('transmision');
const color = document.getElementById('color');

// Contenedor
const resultado = document.getElementById('resultado');
const max = new Date().getFullYear();
const min = max - 10;

// Generar obejcto con la busqueda
const datosBusqueda = {
    marca: '',
    anio: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
};

document.addEventListener('DOMContentLoaded',() => {
    mostrarAutos(autos); // Muestra los automoviles
    // Llena los años
    llenarSelect();
});

// Event listener para los select de busqueda

marca.addEventListener('change', (e) => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
 });

anio.addEventListener('change', (e) => {
   datosBusqueda.anio = parseInt( e.target.value );
   filtrarAuto();
});

minimo.addEventListener('change', (e) => {
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();
 });

maximo.addEventListener('change', (e) => {
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
 });

puertas.addEventListener('change', (e) => {
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAuto();
 });

transmision.addEventListener('change', (e) => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
 });

color.addEventListener('change', (e) => {
    datosBusqueda.color = e.target.value;
    filtrarAuto();
 });
 

function mostrarAutos(autos) {
    limpiarHtml();
    autos.forEach( auto => { 
        const { marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHtml = document.createElement('p');
        autoHtml.textContent = ` 
            ${marca} - ${modelo} - ${year} - ${puertas} Puertas - Transmisión ${transmision} - Precio: $ ${precio}
            - Color : ${color}
        `;
        // insertar en el html
        resultado.appendChild(autoHtml);
    }); 
}

// Borrar html
function limpiarHtml() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

function llenarSelect() {
    for (let i = max; i > min; i--) {
        const option = document.createElement('option');
        option.textContent = i;
        option.setAttribute('value',i);
        anio.appendChild(option); // agrega cada opción
    }
}

// Funcion que filtra en base a la busqueda
function filtrarAuto() {
    // funcion de alto nivel : Funcion que toma otra funcion
    // autos . filter es de alto nivel
    const resultado = autos
    .filter( filtrarMarca )
    .filter( filtrarYear )
    .filter( filtrarMinimo )
    .filter( filtrarMaximo )
    .filter( filtrarPuertas )
    .filter( filtrarTransmision )
    .filter( filtrarColor );
    if ( resultado.length ) {
        mostrarAutos(resultado);
    } else {
        noResultado();
    }
}

function noResultado() {
    limpiarHtml();
    const noResultado = document.createElement('p');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No hay resultados, intenta con otros terminos';
    resultado.appendChild(noResultado);
}

// auto se pasa automaticamente
function filtrarMarca(auto) {
    const { marca } = auto;
    if ( datosBusqueda.marca ) {
        return marca === datosBusqueda.marca;
    }
    return auto;
}

function filtrarYear(auto) {
    const { year } = auto;
    if ( datosBusqueda.anio ) {
        return year === datosBusqueda.anio;
    }
    return auto;
}

function filtrarMinimo(auto) {
    const { minimo } = datosBusqueda;
    if ( minimo ) {
        return auto.precio >= minimo;
    }
    return auto;
}

function filtrarMaximo(auto) {
    const { maximo } = datosBusqueda;
    if ( maximo ) {
        return auto.precio <= maximo;
    }
    return auto;
}

function filtrarPuertas(auto) {
    const { puertas } = datosBusqueda;
    if ( puertas ) {
        return auto.puertas === puertas;
    }
    return auto;
}

function filtrarTransmision(auto) {
    const { transmision } = datosBusqueda;
    if ( transmision ) {
        return auto.transmision === transmision;
    }
    return auto;
}

function filtrarColor(auto) {
    const { color } = datosBusqueda;
    if ( color ) {
        return auto.color === color;
    }
    return auto;
}