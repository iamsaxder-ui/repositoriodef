"use strict";
alert ("esto es una alerta");



var n1 =Number(prompt("longitud del lado del cuadrado", ""));

console.log(n1);
console.log("el area es " + (n1 * n1));
console.log("el perimetro es " + (n1 * 4)); 
let text = "";
let area = n1 * n1;
let perimetro = n1 * 4;
 
text += " el area es " + area + " y el perimetro es " + perimetro + "<br>";
    document.getElementById("resul").innerHTML = text;