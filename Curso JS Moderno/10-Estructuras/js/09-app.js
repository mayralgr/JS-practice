const autenticado = true;
const puedePagar = true;
console.log(autenticado ? 'Si esta autenticado': 'No');
console.log(autenticado && puedePagar ? 'Si puede pagar': 'No');

// if anidado en un ternario
console.log(autenticado ? puedePagar ? 'SI esta autenticado y puede pagar' : 'Si esta autenticado, no puede pagar' : 'No esta autenticado');
