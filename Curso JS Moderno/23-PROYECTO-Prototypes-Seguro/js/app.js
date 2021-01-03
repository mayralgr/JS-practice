
// Constructores

function Seguro( marca, anio, tipo ){
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
}
// realiza la cotizacion con los datos
Seguro.prototype.cotizarSeguro = function() {
    /**
     * precio base
     * Amer = 1.15
     * asiatico 1.05
     * Europeo 1.35
     */
    let cantidad;
    const base = 2000;
    switch(this.marca) {
        case '1': 
            cantidad = base * 1.15;
            break;
        case '2': 
            cantidad = base * 1.05;
            break;
        case '3': 
            cantidad = base * 1.35;
            break;
        default: 
            break;
    }
    // Leer el año
    const diferencia = new Date().getFullYear() - this.anio;
    // cada año que la diferencia es mayor, el costo se reduce
    cantidad -= ( (diferencia * 3) * cantidad ) / 100 ;

    // si el seguro es basico, 30% más, completo * 50%
    if (this.tipo === 'basico'){
        cantidad *= 1.30;
    } else {
        cantidad *= 1.50;
    }

    return cantidad;
}


function UI() {

}
// Llena las secciones de los años
UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear(),
    min = max - 20;

    const selectYear = document.getElementById('year');
    
    for (let i = max ; i > min ; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}

UI.prototype.mostrarMensaje = function(mensaje,tipo) {
    const div = document.createElement('div');
    if (tipo === 'error'){
        div.classList.add('mensaje','error');
    } else {
        div.classList.add('correcto');
    }
    div.classList.add('mensaje','mt-10');
    div.textContent = mensaje;
    // Insertar en el html
    const formulario = document.getElementById('cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(() => {
        div.remove();
    }, 3000);
}

UI.prototype.monstrarResultado = function(total,seguro) {
    const { marca, anio, tipo } = seguro;

    let textoMarca;
    switch( marca ) {
        case '1': 
            textoMarca = 'Americano';
            break;
        case '2': 
            textoMarca = 'Asiatico';
            break;
        case '3': 
            textoMarca = 'Europeo';
            break;
        default: 
            break;
    }

    // crear resultado
    const div = document.createElement('div');
    div.classList.add('mt-10');
    div.innerHTML = `
        <p class="header">Tu resumen</p>
        <p class="font-bold">Marca: <span class="font-normal">${textoMarca} </span></p>
        <p class="font-bold">Año: <span class="font-normal">${anio} </span></p>
        <p class="font-bold">Tipo: <span class="font-normal">${tipo} </span></p>
        <p class="font-bold">Total: <span class="font-normal">$ ${total} </span></p>
    `;
    const resultadoDiv = document.getElementById('resultado');
    
    // Mostrar spinner
    const spinner = document.getElementById('cargando');
    spinner.style.display = 'block';
    setTimeout(() => {
        spinner.style.display = 'none'; // borrar spinner
        resultadoDiv.appendChild(div); // mostrar resultado
    },3000);
}

// instancias UI
const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones(); // llena selec con los años
});


// 
eventListeners();
function eventListeners() {
    const formulario = document.getElementById('cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}

function cotizarSeguro(e){
    e.preventDefault();

    // Leer la marca seleccionada
    const marca = document.getElementById('marca').value;

    // Leer el año seleccionado
    const anio = document.getElementById('year').value;
    // Leer el tipo 
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    
    console.log(marca, anio, tipo);

    if (marca === '' || anio === '' || tipo === '') {
        console.log('invalid');
        ui.mostrarMensaje('todos los campos son obligatorios','error');
    }
    ui.mostrarMensaje('Cotizando.....','exito');
    // Ocultar las cotizaciones previas
    const resultados = document.querySelector('#resultado div');
    if (resultados != null ){
        resultados.remove();
    }

    // instancia seguro
    const seguro = new Seguro(marca, anio, tipo);
    // utilizar el prototype que va a calcular el seguro.
    const total = seguro.cotizarSeguro();

    // Utuilizar el prototype
    ui.monstrarResultado(total, seguro);
    
}