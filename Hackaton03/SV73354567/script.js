function ejecutar(nroEjercicio) {
    switch (nroEjercicio) {
        case 1:
            ejecicio1();
            break;
        case 2:
            ejecicio2();
            break;
        default:
            break;
    }

}

function ejecicio1() {
    let numero = Number.parseInt(prompt("Escribe tu numero"));
    console.log(numero)
    if (!isNaN(numero)) {
        if (numero > 99 && numero < 1000) {
            alert("tiene 3 digitos");
        }
        else {
            alert("No tiene 3 digitos");
        }
    }
    else{
        alert("Lo que ingreso no son numeros");
    }
    console.log("Ejercicio 1")
}

function ejecicio2() {
    console.log("Ejercicio 2")
}

