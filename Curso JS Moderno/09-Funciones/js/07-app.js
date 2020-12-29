iniciarApp();


function iniciarApp() {
    console.log('Iniciando app ..');

    segundaFuncion();
}

function segundaFuncion() {
    console.log('Desde la segunda function');

    usuarioAutenticado('Pablo');
}

function usuarioAutenticado(usuario) {
    console.log('Autenticando usuario . . espere ..');
    console.log(`Usuario autenticado exitosamente. ${usuario}`);
}