// Eliminar local storage
localStorage.removeItem('nombre');


// Actualizar
const mesesArray = JSON.parse( localStorage.getItem('mesesString'));
console.log(mesesArray);

mesesArray.push('Abril');
console.log(mesesArray);
localStorage.setItem('mesesString', JSON.stringify(mesesArray));
// Elimina todo
localStorage.clear();