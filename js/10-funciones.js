"use strict"
function cambiarpassword(password, usuario){
    console.log(`el password ha ambiado ${usuario}`);
}
cambiarpassword("123", "juan");

function porconsola(n1, n2){
    console.log(" la suma es " + (n1 + n2));
    console.log(" la resta es " + (n1 - n2));
    console.log(" la multiplicacion es " + (n1 * n2));
    console.log(" la division es " + (n1 / n2));
  
}


//porconsola(15, 25);


let suma= "";
let resta= "";
let multi= "";
let divi= "";

function porpantalla(n1, n2){
    suma += " la suma es " + (n1 + n2);
document.getElementById("suma").innerHTML = suma;


    resta += " la resta es " + (n1 - n2);
document.getElementById("resta").innerHTML = resta;


    multi += " la multiplicacion es " + (n1   * n2);
document.getElementById("multi").innerHTML = multi;


    divi += " la division es " + (n1 / n2);
document.getElementById("divi").innerHTML = divi;

}

//porpantalla(565656565656, 87878787878);




function calculadora(n1, n2, mostrar = false){
if (mostrar == false) {
    porconsola(n1, n2);
}else{
    porpantalla(n1, n2);
}
return true;

}

calculadora(15, 60000000000, true);