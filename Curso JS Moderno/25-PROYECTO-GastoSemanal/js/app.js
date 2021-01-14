// Variables y selectores
const formulario = document.getElementById("agregar-gasto");
const gastoListado = document.querySelector("#gastos ul");


// Eventos 
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
    formulario.addEventListener('submit', agregarGasto);
}

// Clases
class Presupuesto{
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    agregarGasto(gasto) {
        this.gastos = [...this.gastos, gasto];
        this.calcularRestante();
    }

    calcularRestante() {
        const gastado = this.gastos.reduce((total, gasto) => {
            return total + gasto.cantidad;
        },0)
        this.restante = this.presupuesto - gastado;
    }

    eliminarGasto(id) {
        this.gastos = this.gastos.filter( gasto => gasto.id !== id );
        this.calcularRestante();
    }

}

class UI {
    
    insertarPresupuesto( { presupuesto, restante } ) {
        document.querySelector('#total').textContent    = presupuesto;
        document.querySelector('#restante').textContent = restante;   
    }

    imprimirAlerta(mensaje, tipo) {
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');
        if ( tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }
        // Agregar mensaje
        divMensaje.textContent = mensaje;
        // Mostrar en html
        document.querySelector('.primario').insertBefore(divMensaje,formulario);
        setTimeout(() => {
            divMensaje.remove();
        }, 1000);
    }

    mostrarGastos(gastos) {
        this.limpiarHtml();
        gastos.forEach(gasto => {
            const { cantidad, nombre, id } = gasto;
            // Crear li
            const nuevoGasto = document.createElement('li');

            // Agregar el html del gasto
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            //nuevoGasto.setAttribute('data-id',id); // igual al de abajo
            nuevoGasto.dataset.id = id; // Nueva version de JS
            nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill"> ${cantidad} </span>`;

            // Boton para borrar el gasto
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.innerHTML = 'Borrar &times;';
            btnBorrar.onclick = () => {
                eliminarGasto(id);
            }
            nuevoGasto.appendChild(btnBorrar);
            // Agregar al html

            gastoListado.appendChild(nuevoGasto);

        });
    }

    limpiarHtml() {
        while(gastoListado.firstChild) {
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }

    actualizarRestante( restante ) {
        document.querySelector('#restante').textContent = restante;
    }

    comprobarPresupuesto( presupuestoObj ) {
        const { presupuesto, restante } = presupuestoObj;
        const restanteDiv = document.querySelector('.restante');
        // Comprobar %25
        if ( ( presupuesto / 4 ) > restante ) {
            restanteDiv.classList.remove('alert-success', 'alert-warning');
            restanteDiv.classList.add('alert-danger');
        } else if ( ( presupuesto / 2 ) > restante ) {
            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.add('alert-warning');
        } else {
            restanteDiv.classList.remove('alert-danger','alert-warning');
            restanteDiv.classList.add('alert-success');
        }

        // Si el total es 0 o menor
        if ( restante <= 0 ) {
            ui.imprimirAlerta('El presupuesto se ha agotado', 'error');
            formulario.querySelector('button[type="submit"]').disabled = true;
        }
    }

}
// instancia
const ui = new UI();
let presupuesto;
// Funciones
function preguntarPresupuesto() {
    const presupuestoUsuario = prompt('¿Cuál es tu presupuesto? ');
    if (presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        window.location.reload();
    }
    presupuesto = new Presupuesto(presupuestoUsuario);

    ui.insertarPresupuesto(presupuesto);
}

function agregarGasto(e) {
    // Añade gastos
    e.preventDefault();

    // Leer los datos del formulario 
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);
    if ( nombre === '' || cantidad === '' ) {
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
        return;
    } else if ( cantidad <= 0 || isNaN(cantidad)) {
        ui.imprimirAlerta('Cantidad no valida', 'error');
        return;
    }

    // Generar objeto con el gasto => object literal enhacement
    const gasto = { nombre, cantidad, id: Date.now() };

    // Añade el gasto
    presupuesto.agregarGasto(gasto);

    // Mensaje success
    ui.imprimirAlerta('Gasto agregado');

    // Imprimir presupuestos
    const { gastos, restante } = presupuesto;
    ui.mostrarGastos(gastos);

    ui.actualizarRestante(restante);

    ui.comprobarPresupuesto(presupuesto);
    // Reiniciar formulario
    formulario.reset();

}

function eliminarGasto(id) {
    presupuesto.eliminarGasto(id);
    const { gastos, restante } = presupuesto;
    ui.mostrarGastos(gastos);
    ui.actualizarRestante(restante);
    ui.comprobarPresupuesto(presupuesto);
}