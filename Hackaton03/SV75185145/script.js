function ejecutar(nroEjercicio) {
    switch (nroEjercicio) {
        case 1:
            ejercicio1();
            break;
        case 2:
            ejercicio2();
            break;
        case 3:
            ejercicio3();
            break;
        case 4:
            ejercicio4();
            break;
        case 5:
            ejercicio5();
            break;
        case 6:
            ejercicio6();
            break;
        case 7:
            ejercicio7();
            break;
        case 8:
            ejercicio8();
            break;
        case 9:
            ejercicio9();
            break;
        case 10:
            ejercicio10();
            break;
        case 11:
            ejercicio11();
            break;
        case 12:
            ejercicio12();
            break;
        case 13:
            ejercicio13();
            break;
        case 14:
            ejercicio14();
            break;
        case 15:
            ejercicio15();
            break;
        case 16:
            ejercicio16();
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
    let numero = Number.parseInt(prompt("Escribe un numero"))
    if (isNaN(numero)) {
        alert("No es un numero");
        }
        else {
            if (numero < 0) {
            alert("El numero es negativo");
        }
            else {
            alert("El numero no es negativo");
        }
    }
    console.log("Ejercicio 2")
}

function ejercicio3(){
    let numero = Number.parseInt(prompt("Escribe un numero"))
    if (numero % 10 == 4) {
        alert("El numero termina en 4")
    }
    else {
        alert("El numero no termina en 4")
    }
    console.log("Ejercicio 3")
}

function ejercicio4() {
    let numero1 = Number.parseInt(prompt("Esriba el primer numero"))
    let numero2 = Number.parseInt(prompt("Esriba el segundo numero"))
    let numero3 = Number.parseInt(prompt("Esriba el tercer numero"))
    let minimo = Math.min(numero1, numero2, numero3)
    let maximo = Math.max(numero1, numero2, numero3)
    console.log("El numero menor es: " + minimo);
    console.log("El numero mayor es: " + maximo);
    console.log("Ejercicio 4")
}

function ejercicio5() {
    console.log("Ejercicio 5")
    let nroZapatos = Number.parseInt(prompt("¿Cuántos pares de zapatos va a comprar?"))
    if (nroZapatos > 0 && nroZapatos <= 10) {
        precio = 50 * nroZapatos
        console.log("El precio por la compra es de: " + precio)
    }
    else {
        if (nroZapatos > 10 && nroZapatos <= 20) {
            precio = 50 * nroZapatos * 0.9
            console.log("El precio por la compra es de: " + precio)
        }
        else {
            if (nroZapatos > 20 && nroZapatos <= 30) {
                precio = 50 * nroZapatos * 0.8
                console.log("El precio por la compra es de: " + precio)
            }
            else {
                precio = 50 * nroZapatos * 0.6
                console.log("El precio por la compra es de: " + precio)
            }
        }
    }
}

function ejercicio6() {
    console.log("Ejercicio 6")
    let hrsSemanales = Number.parseInt(prompt("¿Cuántas horas trabajó en la semana?"))
    if (hrsSemanales <= 0) {
        alert("El numero ingresado es incorrecto")
    }
    else {
        let sueldo = (hrsSemanales <= 40) ? (20 * hrsSemanales) : ((20 * 40) + 25 * (hrsSemanales - 40))
        console.log("El sueldo será igual a: " + sueldo)
    }
}

function ejercicio7() {
    console.log("Ejercicio 7")
    let tipo = String(prompt("Escriba el tipo de cliente"))
    if (tipo = "a") {
        alert("El cliente es Tipo A y tiene un descuento del 10%")
    }
    else {
        if (tipo = "b") {
            alert("El cliente es Tipo B y tiene un descuento del 15%")
        } else {
            if (tipo = "c") {
                alert("El cliente es Tipo C y tiene un descuento del 20%")
            } else {
                alert("El tipo ingresado es incorrecto")
            }
        }
    }
}

function ejercicio8() {
    console.log("Ejercicio 8")
    let nota1 = Number.parseInt(prompt("Escriba la primera nota"))
    let nota2 = Number.parseInt(prompt("Escriba la segunda nota"))
    let nota3 = Number.parseInt(prompt("Escriba la terera nota"))
    let promedio = (nota1 + nota2 + nota3)/3
    promedio < 10.5 ? alert("El estudiante desaprobó"):alert("El estudiante aprobó")
}

function ejercicio9() {
    console.log("Ejercicio 9")
    let sueldo = Number(prompt("Escriba el sueldo actual del trabajador"))
    sueldo < 2000 ? console.log("El aumento será de: "+sueldo*0.1):console.log("El aumento será de: "+sueldo*0.05) 
}

function ejercicio10() {
    let numero = Number.parseInt(prompt("Digite el numero a evaluar"))
    if (numero == 0) {
        alert("El cero no es par ni impar")
    }
    else {
        numero % 2 == 0 ? alert("El número es par") : alert("El numero es impar")
        console.log("Ejercicio 10")
    }
}

function ejercicio11() {
    let numero1 = Number.parseInt(prompt("Digite el primer numero"))
    let numero2 = Number.parseInt(prompt("Digite el segundo numero"))
    let numero3 = Number.parseInt(prompt("Digite el tercer numero"))
    let mayor = Math.max(numero1, numero2, numero3)
    console.log("El numero mayor es: "+mayor)
    console.log("Ejercicio 11")
}

function ejercicio12() {
    let numero1 = Number.parseInt(prompt("Digite el primer numero"))
    let numero2 = Number.parseInt(prompt("Digite el segundo numero"))
    let mayor = Math.max(numero1, numero2)
    console.log("El numero mayor es: "+mayor)
    console.log("Ejercicio 12")
}

function ejercicio13() {
    console.log("Ejercicio13")
    let letra = String(prompt("Escriba la letra a evaluar"))
    if (letra == "a" || (letra == "e") || (letra == "i") || (letra == "o") || (letra == "u") || (letra == "A") || (letra == "E") || (letra == "I") || (letra == "O" || (letra == "U"))) {
        alert("La letra ingresada es una vocal")
    }
    else {
        alert("La letra ingresada es una consonante")
    }
}

function ejercicio14() {
    console.log("Ejercicio 14")
}





