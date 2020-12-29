const autenticado = true;

if (autenticado) {
    console.log('El usuario esta autenticado');
}

const puntuaje = 500;

function revisarPuntuaje() {
    if ( puntuaje > 400 ) {
        console.log('Exceelente');
        return;
    } else if ( puntuaje > 300 ) {
        console.log('Buen puntuaje...');
    }
}

revisarPuntuaje();