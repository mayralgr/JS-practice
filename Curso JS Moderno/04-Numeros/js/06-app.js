const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

console.log(typeof(numero1));

console.log(Number.parseInt(numero1));
console.log(Number.parseFloat(numero2));

console.log(Number.parseInt(numero3)); // Nan

console.log(Number.isInteger(numero4)); // true

console.log(Number.isInteger(20.2)); // true