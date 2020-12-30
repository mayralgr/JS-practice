// Eventos del mouse

const nav = document.querySelector('.navegacion');

// registrar un evento
nav.addEventListener('mouseenter', () => {
    console.log('entrando a la navegacion');

    nav.style.backgroundColor = 'transparent';
});

nav.addEventListener('mouseout', () => {
    console.log('saliendo a la navegacion');
    nav.style.backgroundColor = 'white';
});


nav.addEventListener('mousedown', () => {
    //console.log('saliendo a la navegacion');
    nav.style.backgroundColor = 'blue';
});


nav.addEventListener('mouseup', () => {
    //console.log('saliendo a la navegacion');
    nav.style.backgroundColor = 'green';
});

// double click
nav.addEventListener('dblclick', () => {
    //console.log('saliendo a la navegacion');
    nav.style.backgroundColor = 'orange';
});

