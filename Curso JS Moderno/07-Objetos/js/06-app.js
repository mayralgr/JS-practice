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

// const { nombre, informacion, informacion: { fabricacion } } = producto
const { nombre, informacion, informacion: { fabricacion, fabricacion : { pais } } } = producto
console.log(nombre);
console.log(informacion);
console.log(fabricacion);