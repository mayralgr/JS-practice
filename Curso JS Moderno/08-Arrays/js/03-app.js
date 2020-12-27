const meses = ['Enero','Feb',"Marzo","Abril"];

console.table(meses);

// recorrer arreglos

// Cuanto mide
console.log(meses.length);

for (let i = 0; i < meses.length; i++) {
    const element = meses[i];
    console.log(element);
}