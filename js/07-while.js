let text = "";
let num1 = 5;
let num2 = 2;
let texto = "";


let resultado = num1 + num2;
console.log(resultado);
texto= "el resultado de la suma es ";
console.log(texto);
document.getElementById("resul").innerHTML = texto;


while (resultado <= 80) {
    text += "el numero a imprimir es " + resultado + "<br>";
    document.getElementById("text").innerHTML = text;
    resultado ++;
}







let num4 = 10;
let num5 = 15;
let text3 ="";
let suma = num4 + num5;
while (suma <= 45) {
    text3 += "la suma es " + suma + "<br>";
    document.getElementById("suma").innerHTML = text3;
    suma ++;
}
/document.getElementById("resul").innerHTML = text;/

