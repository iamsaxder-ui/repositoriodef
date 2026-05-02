"use strict";
alert ("esto es una alerta");


var n1 =(prompt("ingresa tu nombre", 0));
var n2 =(prompt("ingresa tu edad", 0));

console.log(n1, n2);

let resul ="";

if(n2 >= 19){
    console.log("hola " + n1 + " eres viejo, tienes " + n2 + " años de edad");


    resul += "hola " + n1 + " eres viejo, tienes " + n2 + " años de edad" + "<br>";
    document.getElementById("resul").innerHTML = resul;
 
}else if (n2 == 18){
console.log("hola " + n1 + " eress mayor de edad tienes " + n2 + " años");


resul += "hola " + n1 + " eres mayor de edad tienes " + n2 + " de edad" + "<br>";
document.getElementById("resul").innerHTML = resul;

}else {

    console.log("hola " + n1 + " eres menor y  tienes " + n2 + " años");
    


    resul += "hola " + n1 + " eres menor y  tienes " + n2 + " años" + "<br>";
    document.getElementById("resu").innerHTML = resul; 

}