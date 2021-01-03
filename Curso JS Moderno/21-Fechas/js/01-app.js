const diaHoy = new Date();
let valor;
valor = diaHoy;

valor = diaHoy.getFullYear();

valor = diaHoy.getMonth();
valor = diaHoy.getMinutes();
valor = diaHoy.getHours();
valor = diaHoy.getTime();

// set modifica el valor de las fechas
Date.now(); // no necesita instanciarse 

console.log(valor)