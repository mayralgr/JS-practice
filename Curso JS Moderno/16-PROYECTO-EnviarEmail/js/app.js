// Variables
const btnEnviar = document.getElementById('enviar');
const btnReset = document.getElementById('resetBtn');
const formulario = document.querySelector('#enviar-mail');
// Variables para campost
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const asunto = document.querySelector('#asunto');
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', iniciarApp);
    // Campos del formulario
    email.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);

    // Reinicia el formulario
    btnReset.addEventListener('click', resetearFormulario);

    // Enviar email
    btnEnviar.addEventListener('click', enviarEmail);

}

function enviarEmail(e) {
    e.preventDefault();
    // mostrar spinner
    const spinner = document.getElementById('spinner');
    spinner.style.display = 'flex';
    // Despues de 3 segundos ocultar el spinner y mostrar el mensaje
    setTimeout(() => {
        spinner.style.display = 'none';
        // mensaje que dice que se envio correctamente
        const parrafo = document.createElement('p');
        parrafo.textContent = 'El mensaje se envio correctamente';
        parrafo.classList.add('text-center','my-10','p-2','bg-green-500','text-white','font-bold','uppercase');
        // Inserta parrafo antes del spinner
        formulario.insertBefore(parrafo, spinner);
        setTimeout(() => {
            parrafo.remove();
            resetearFormulario();
        }, 5000);
    }, 3000);
}

// Funciones
function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursos-not-allowed','opacity-50');
}

function validarFormulario(e) {
    if ( e.target.value.length > 0) {
        // Elimina los errores 
        const error = document.querySelector('p.error');
        error ? error.remove() : '';
        e.target.classList.remove('border','border-red-500');
        e.target.classList.add('border','border-green-500');
    } else {
        // Vacio
        // target.value.style.borderBottomColor = 'red';
        // target.classList.add('error');
        e.target.classList.add('border','border-red-500');
        mostrarError('Todos los campos son obligatorios');
    }
    const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
    if (e.target.type === 'email') {
        if (er.test(e.target.value)) {
            // Elimina los errores 
            const error = document.querySelector('p.error');
            error ? error.remove() : '';
            e.target.classList.remove('border','border-red-500');
            e.target.classList.add('border','border-green-500');
        }
        else {
            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border','border-red-500');
            mostrarError('Email no valido');
        }
    }

    if (er.test(email.value) &&
        asunto.value !== '' &&
        mensaje.value !== '') {
            btnEnviar.disabled = false;
            btnEnviar.classList.remove('cursos-not-allowed','opacity-50');
        }
        // else {
        //     console.log('no');
        // }
}

function mostrarError(mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border','border-red-500','background-color-100','text-red-500','p-3', 'mt-5', 'error');
    const errores = document.querySelectorAll('.error');
    if (errores.length === 0)
    {
        formulario.appendChild(mensajeError);    
    }
}

function resetearFormulario() {
    formulario.reset();
    iniciarApp();
}