const producto = 'Monitor 20 pulgadas';

// .repeat , repetir una cadena

const texto = ' en Promoción'.repeat(3);


const texto1 = ' en Promoción'.repeat(2.4); // lo redondea

console.log(texto);

console.log(`${producto} ${texto} !!!`);

// split, dividir un string
const actividad = "Estoy aprendiendo Javascript Moderno";
console.log(actividad.split(" "));

const hobbies = 'Leer, caminar, escuchar musica';
console.log(hobbies.split(","));

const tweet = "Aprendiendo JS #JSModernoConJuan";
console.log(tweet.split("#"));