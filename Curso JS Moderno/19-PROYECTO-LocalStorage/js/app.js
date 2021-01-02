// Variales
const formulario = document.getElementById('formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

eventListeners();

// Event listeners
function eventListeners() {
    // Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);
    // Cuando el documento este listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse( localStorage.getItem('tweets') ) || [];
        console.log(tweets);
        createHtml();
    });
}

function agregarTweet(e) {
    e.preventDefault();
    // Textarea
    const tweet = document.getElementById('tweet').value;

    // validacion
    if (tweet === '') {
        mostrarError('No puede ir vacio');
        return;
    }

    const tweetObj  = {
        id: Date.now(),
        tweet,
    }

    // Agregar tweet 
    tweets = [...tweets, tweetObj]; 
    console.log(tweets);

    createHtml();

    // Resetear formulario
    formulario.reset();
}

function mostrarError(mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('error');

    // Insertar en contenido
    const contenido = document.getElementById('contenido');
    contenido.appendChild(mensajeError);
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);

}

// Muestra listado de los tweets
function createHtml() {
    limpiarHtml();
    if (tweets.length > 0 ) {
        tweets.forEach( tweet => {
            // Agregar boton de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            // Añadir la funcion de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }
            // Crear html
            const li = document.createElement('li');
            li.innerText = tweet.tweet;
            li.appendChild(btnEliminar);

            // Agregar a lista
            listaTweets.appendChild(li);
        });
    }

    sincronizarStorage();
}

function limpiarHtml() {
    while(listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}

// Agrega tweets actuales a localstorage
function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Elimina un tweet 
function borrarTweet(id) {
    tweets = tweets.filter( tweet => tweet.id !== id );
    createHtml();
}