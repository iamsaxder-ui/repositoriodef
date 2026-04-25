var date = 2005;
switch (true){
    case date >= 1980 && date <=1996:
    console.log("son milenials");
    break;

    case date >= 2000 && date <= 2014:
    console.log(" son generacion z");
    break;

    case date >= 1965 && date <= 1979:
    console.log("son generacion x");
    break;

    default
    :console.log("no se encuentra en ninguna generacion declarada");
    }





var user= "samuel";

var rol= "user";

var password= 1234;


switch (true){
    case rol == "admin" && password == 1234 && user == "samuel":
    console.log("hola samuel tienes acceso concedido eres admin");
    break;

    case rol == "user" && password == 1234 && user == "samuel":
    console.log("hola samuel tienes acceso concedido eres usuario");
    break;

    case rol == "user" && password == 1234 && user == "luis":
    console.log("hola luis tienes acceso concedido eres usuario");
    break;

    default
    :console.log("usuario, contraseña o rol erroneos");
}

