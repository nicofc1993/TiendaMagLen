let ingresar = false
function ingreso1(){
for(let i=2; i>=0; i--){
    let nombre= prompt("Ingresa tu nombre");
    if (nombre != ""){
        alert("bienvenido/a " + nombre);
        ingresar=true
        break;
    }else{
        alert("Opcion invalida.")
    }
}
}
ingreso1()
let edadMayor=18, edadResponsable=14, edadLimite=100;
let edad=parseFloat(prompt("Ingresa tu edad"));

if(edad >= edadMayor && edad <= edadLimite) {
    alert("Ya podes ingresar a la tienda.");
}else if(edad >= edadResponsable || edad > edadMayor){
    alert("Atencion! Debes ingresar acompañado/a de un mayor.");
}else{
    alert("No podes ingresar");
}

let conjunto = 2000;
let pijama = 3000;
let medias = 1000;
let total = 0;

function ingreso2() {
    if (ingresar) {
    let opcion = prompt("Elegí el número de la opción que quieras comprar:\n1- Conjunto-2000.\n2- Pijama-3000.\n3- Medias-1000.\nPresiona X para finalizar tu compra.");
    while (opcion !== "x" && opcion !== "X") {
        switch (opcion) {
            case "1":
                total += conjunto;
                alert("Agregaste $" + conjunto + " a tu carrito");
                break;
            case "2":
                total += pijama;
                alert("Agregaste $" + pijama + " a tu carrito");
                break;
            case "3":
                total += medias;
                alert("Agregaste $" + medias + " a tu carrito");
                break;
            default:
                alert("Opción no válida");
                break;
            }
            opcion = prompt("Elegí el número de la opción que quieras comprar:\n1- Conjunto-2000.\n2- Pijama-3000.\n3- Medias-1000.\nPresiona X para finalizar tu compra.");
        }
        alert("El total de tu compra es: $" + total);
    }
alert("Te enviaremos un mail con los pasos a seguir para terminar tu compra. Gracias!!!")
}
ingreso2();