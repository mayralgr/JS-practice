const busqueda = document.querySelector('.busqueda');

// busqueda.addEventListener('keydown', () => {
//     console.log('escribiendo....');
// });

// busqueda.addEventListener('keyup', () => {
//     console.log('up....');
// });

// busqueda.addEventListener('blur', () => {
//     // entrar y salir 
//     console.log('bluring....');
// });

// busqueda.addEventListener('copy', () => {
//     // entrar y salir 
//     console.log('copy....');
// });


// busqueda.addEventListener('paste', () => {
//     // entrar y salir 
//     console.log('paste....');
// });


busqueda.addEventListener('input', (e) => {
    console.log(e.type);
    console.log(e.target.value);
});