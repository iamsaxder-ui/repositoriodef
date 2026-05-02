alert ("esto es una alerta");


var n1 =parseInt(prompt("ingresa un numero 1", 0));
var n2 =parseInt(prompt("ingresa un numero 2", 0));

console.log(n1, n2);
console.log("la suma es " + (n1 + n2));
console.log("la resta es " + (n1 - n2));
console.log("la multiplicacion es " + (n1 * n2));
console.log("la division es " + (n1 / n2));

let resul ="";

if(n1 > n2){
    console.log("el numero " + n1 + " es mayor que el numero " + n2);
    console.log("el numero " + n2 + " es menor que el numero " + n1);


    resul += "el numero "  + n1 + " es mayor que el numero " + n2 + "<br>";
    document.getElementById("resul").innerHTML = resul;
 
}else if (n1==n2){
console.log("el numero " + n1 + " y el numero " + n2 + " son iguales");


resul += "el numero " + n1 + " y el numero " + n2 + " son iguales" + "<br>";
document.getElementById("resul").innerHTML = resul;

}else{

    console.log("el numero " + n2 + " es mayor que el numero " + n1);
    console.log("el numero " + n1 + " es menor que el numero " + n2);


    resul += "el numero " + n2 + " es mayor que el numero " + n1 + "<br>";
    document.getElementById("resu").innerHTML = resul; 

}