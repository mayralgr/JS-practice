// Event bubbling
// propagacion

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

cardDiv.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('click in card');
});


infoDiv.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('click in info');
});


titulo.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('click in titulo');
});