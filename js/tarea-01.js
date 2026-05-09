"use strict";
alert ("esto es una alerta");



var n1 =prompt("nombre", "");

console.log(n1);
 
let text = "";

 
text += " hola " + n1 + "<br>";
    document.getElementById("text").innerHTML = text;