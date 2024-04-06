function ejecutar(nroEjercicio) {
    switch (nroEjercicio) {
        case 1:
            ejercicio1();
            break;
        case 2:
            ejercicio2();
            break;

        default:
            break;
    }

}

function ejercicio1() {
    let numero = Number.parseInt(prompt("Escribe un numero"));
    if (isNaN(numero)) {
        alert("No es un numero");
        }
        else {
            if (numero > 99 && numero < 1000) {
            alert("Tiene 3 digitos");
        }
            else {
            alert("No tiene 3 digitos");
        }
    }
    }
    console.log("Ejercicio 1")

function ejercicio2(){
    console.log("Ejercicio 2")
}