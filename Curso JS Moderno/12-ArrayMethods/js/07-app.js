const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const meses2 = ['Agosto', 'Septiembre'];

const meses3 = ['Oct', 'Noviembre'];

// El orden importa

// .concat
const resultado = meses.concat(meses2, meses3, 'Dic');

console.log(resultado);

// spread operator
const resultado2 = [...meses, ...meses2, ...meses3, 'Dic'];
console.log(resultado2);