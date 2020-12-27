const producto = {
    nombre : "Monitor de 20 pulgadas",
    precio : 300,
    disponible : true,
}

const medidas = {
    peso: '1kg',
    medida: '1m',
}

console.log(producto);
console.log(medidas);

// fists

const resultad = Object.assign(producto, medidas);

const resultado2 = {...producto, ...medidas};

console.log(resultad);
console.log(resultado2);