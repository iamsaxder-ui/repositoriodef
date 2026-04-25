let fechaNac=1;
if (fechaNac >= 1997 || fechaNac <= 2012){
    console.log("eres generacion z");
} else {
    console.log("eres otra generacion");
}


//&& se deben cumplir ambas condiciones
//|| se debe cumplir al menos una de las condiciones


let user= "luis";
let password= "04142952846";
let tipoUser= "invitado";


if (user =="luis" && password == "04142952846" || tipoUser == "admin"){
    console.log("eres admin y tienes todos los permisos");

}else{
    console.log("no eres admin");
}

const ciudad= "maravilla";

//ciudad= "san juan";
console.log(ciudad);

//un solo igual es de asignacion
// dos iguales comprueba que el valor sea igual
//tres iguales se llam operador rextricto y comprueba que el valor y el tipo de dato sean iguales

let juego;
console.log(juego);
let juego2 = 1;
console.log(juego2);
if (juego == 1){
    console.log("es un numero")
}else{
    console.log("no es un numero")
}



