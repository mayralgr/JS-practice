const automovil = {
    modelo: 'Camaro',
    year: 1969,
    motor: '6.0'
}
// for in itera sobre objetos
// for of itera sobre arreglos

for (let propiedad in automovil) {
    console.log(`${automovil[propiedad]}`);
}

for ( let [llave, valor] of Object.defineProperties(automovil)){
    console.log(valor);
    console.log(llave);
}