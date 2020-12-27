// Object
const producto = {
    nombre : "Monitor de 20 pulgadas",
    precio : 300,
    disponible : true,
    informacion : {
        medidas : {
            peso: '1kg',
            medida: '1m'
        },
        fabricacion : {
            pais: 'MX'
        }
    }
}

// console.log(producto.informaction.peso);

// console.log(producto.informaction.medida);
console.log(producto.informacion.fabricacion.pais);