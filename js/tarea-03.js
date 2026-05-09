"use strict";
alert ("esto es una alerta");



var n1 =Number(prompt("valor total de la compra", ""));

console.log(n1);
console.log("el total a pagar es " + (n1 +((n1 * 21) / 100)));
let text = "";
let resul = n1 +((n1 * 21) / 100);
 
text += " hola tu total es " + resul + "<br>";
    document.getElementById("resul").innerHTML = text;