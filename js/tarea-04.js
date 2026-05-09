"use strict";
alert ("esto es una alerta");


var n1 =prompt("ingresa tu nombre", "");
var n2 =Number(prompt("ingresa tu edad", ""));

console.log(n1, n2);

let resul ="";

if (n2 >= 1980 && n2 <= 1996){
    console.log("milenial");


    resul += "hola " + n1 + " eres milenial, y naciste en " + n2 + "<br>";
    document.getElementById("resul").innerHTML = resul;

}else if (n2 >= 1997 && n2 <= 2012){
console.log("genz");


resul += "hola " + n1 + " eres genz, y naciste en " + n2 + "<br>";
    document.getElementById("resul").innerHTML = resul;

}else if (n2 > 1960 && n2 <= 1979){
console.log("genx");


resul += "hola " + n1 + " eres genx, y naciste en " + n2 + "<br>";
    document.getElementById("resul").innerHTML = resul;

}else if (n2 >= 2013){
console.log("gen alpha");


resul += "hola " + n1 + " eres gen alpha, y naciste en " + n2 + "<br>";
    document.getElementById("resul").innerHTML = resul;

}else {

    console.log("año no valido ");



    resul += "año no valido";
    document.getElementById("resu").innerHTML = resul; 

}