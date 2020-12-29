// Operador mayor y menor que

const dinero = 1000;
const totalAPagar = 500;
const tarjeta = true;
const cheque = true;

if ( dinero >= totalAPagar ) {
    console.log('Si podemos pagar');
} else if (cheque) {
    console.log('tengo cheque');
} else if (tarjeta) {
    console.log('tengo tarjeta');
} else {
    console.log('Fondos insuficinetes');
}
