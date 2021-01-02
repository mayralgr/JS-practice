const nombre = localStorage.getItem('nombre');
console.log(nombre);
// si no existe, marca null

const productoJson = localStorage.getItem('productString');
// Obtiene el string y se hace el parse a json
console.log(JSON.parse(productoJson));


const meses = localStorage.getItem('mesesString');
// Obtiene el string y se hace el parse a json
console.log(JSON.parse(meses));

