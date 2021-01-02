// Localstorage persisite aun cerrando el navegador y apagando la computadora
// Solo almacena strings
localStorage.setItem('nombre','Lucero');

const producto = {
    nombre: 'Monitor',
    precio: 300
}

const productString = JSON.stringify(producto);
localStorage.setItem('productString',productString);

const meses = ['Enero', 'Febrero', 'Marzo'];
const mesesString = JSON.stringify(meses);
localStorage.setItem('mesesString',mesesString);
// session storage se pierde al cerrar el navegador
// sessionStorage.setItem('otroNombre','Luz');

