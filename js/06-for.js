const ciudad =["maracay", "caracas", "valencia", "barquisimeto", "merida"];
//console.log(ciudad);
//console.log(ciudad.length);



//for (let i = 10; i >= 10 && i <= 20; i++) {
 //   console.log(`yo soy la posicion que recorre el for ${i}`);
 //   console.log(ciudad[i]) + "<br>";
//}


//for =asignamos un valor a una variable, luego colocamos la condicion que se va a cumplir para que el ciclo se ejecute y por ultimo colocamos el incremento o decremento de la variable asignada al inicio del ciclo for
for(let i = 0; i < ciudad.length; i++){
    console.log(ciudad[i])+ "<br>";
}



for (let z = 2; z <= 10; z++) {
    console.log(`cod-${z}`);
}

for (let z = 1; z <= 46; z++) {
    console.log(`la talla de zapato es ${z}`);
}



let text ="";
for (let x = 0; x <= 10; x++) {
    text+= "el numero es " + x + "<br>";
}
document.getElementById("numero").innerHTML = text;

const marcas = ["nokia", "honor", "xiaomi", "iphone", "samsung"];
let marca ="";
for (let x = 0; x < marcas.length; x++) {
    marca+= "la marca es " + marcas[x] + "<br>";

}
document.getElementById("marca").innerHTML = marca;


