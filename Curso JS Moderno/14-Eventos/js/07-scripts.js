const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', (e) => {
    console.log(e.target.classList);
    if (e.target.classList.contains('titulo')){
        console.log('titulo');
    }
    if (e.target.classList.contains('precio')){
        console.log('precio');
    }
    if (e.target.classList.contains('card')){
        console.log('card');
    }
});