// && dos condiciones

const usuario = false;
const puedePagar = false;

if(usuario && puedePagar) {
    console.log('si puedes comprar');
} else if (!usuario && !puedePagar) {
    console.log("no no puedes comprar");
} else if(!usuario) {
    console.log('INICIA SESION');
} else if( !puedePagar) {
    console.log('fondos insuficientes');
}