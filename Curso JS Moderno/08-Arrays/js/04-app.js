const meses = ['Enero','Feb',"Marzo","Abril"];


// si se puede modificar los objetos

meses[7] = "otro mes";
meses[0] = "Dic";
// no genera 8 y 9
meses[10] = "Ultimo";


console.table(meses);