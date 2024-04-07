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
        case 17:
            ejercicio17();
            break;
        case 18:
            ejercicio18();
            break;
        case 19:
            ejercicio19();
            break;
        case 20:
            ejercicio20();
            break;
        case 21:
            ejercicio21();
            break;
        case 22:
            ejercicio22();
            break;
        case 23:
            ejercicio23();
            break;
        case 24:
            ejercicio24();
            break;
        case 25:
            ejercicio25();
            break;
        case 26:
            ejercicio26();
            break;
        case 27:
            ejercicio27();
            break;
        case 28:
            ejercicio28();
            break;
        case 29:
            ejercicio29();
            break;
        case 30:
            ejercicio30();
            break;
        case 31:
            ejercicio31();
            break;
        case 32:
            ejercicio32();
            break;
        case 33:
            ejercicio33();
            break;
        case 34:
            ejercicio34();
            break;
        case 35:
            ejercicio35();
            break;
        case 36:
            ejercicio36();
            break;
        case 37:
            ejercicio37();
            break;
        case 38:
            ejercicio38();
            break;
        case 39:
            ejercicio39();
            break;
        case 40:
            ejercicio40();
            break;
        default:
            break;
    }
}

function ejercicio1() {
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
    else {
        alert("Lo que ingreso no son numeros");
    }
    console.log("Ejercicio 1")
}

function ejercicio2() {
    let numero = Number.parseInt(prompt("Por favor, ingresa un número entero:"));
    if (!isNaN(numero)) {
        if (numero < 0) {
            alert("El número ingresado es negativo.");
        }
        else if (numero === 0) {
            alert("El número ingresado es cero, no es positivo ni negativo.");
        }
        else {
            alert("El número ingresado es positivo.");
        }
    }
    else {
        alert("Lo que ingreso no son numeros");
    }
    console.log("Ejercicio 2")
}

function ejercicio3() {
    let numero = Number.parseInt(prompt("Escribe tu numero"));
    if (!isNaN(numero)) {
        if (numero % 10 === 4 || numero % 10 === -4) {
            alert("El número termina en 4.");
        } else {
            alert("El número NO termina en 4.");
        }
    } else {
        alert("Lo que ingresaste no es un número.");
    }
    console.log("Ejercicio 3")
}

function ejercicio4() {
    let numero1 = Number.parseInt(prompt("Ingresa el primer número"));
    let numero2 = Number.parseInt(prompt("Ingresa el segundo número"));
    let numero3 = Number.parseInt(prompt("Ingresa el tercer número"));
    console.log("Ejercicio 4")
    if (!isNaN(numero1) && !isNaN(numero2) && !isNaN(numero3)) {
        if (numero1 <= numero2 && numero1 <= numero3) {
            if (numero2 <= numero3) {
                alert(`Los números ordenados de menor a mayor son: ${numero1}, ${numero2}, ${numero3}`);
            } else {
                alert(`Los números ordenados de menor a mayor son: ${numero1}, ${numero3}, ${numero2}`);
            }
        } else if (numero2 <= numero1 && numero2 <= numero3) {
            if (numero1 <= numero3) {
                alert(`Los números ordenados de menor a mayor son: ${numero2}, ${numero1}, ${numero3}`);
            } else {
                alert(`Los números ordenados de menor a mayor son: ${numero2}, ${numero3}, ${numero1}`);
            }
        } else {
            if (numero1 <= numero2) {
                alert(`Los números ordenados de menor a mayor son: ${numero3}, ${numero1}, ${numero2}`);
            } else {
                alert(`Los números ordenados de menor a mayor son: ${numero3}, ${numero2}, ${numero1}`);
            }
        }
    } else {
        alert("Por favor, ingresa números válidos.");
    }
}

function ejercicio5() {
    let cantidadZapatos = Number.parseInt(prompt("Ingrese la cantidad de zapatos que desea comprar:"));

    const precioPorZapato = 80;
    let totalCompra = cantidadZapatos * precioPorZapato;

    if (!isNaN(cantidadZapatos) && cantidadZapatos > 0) {
        if (cantidadZapatos > 10 && cantidadZapatos <= 20) {
            totalCompra *= 0.9; // Aplicar descuento del 10%
        } else if (cantidadZapatos > 20 && cantidadZapatos < 30) {
            totalCompra *= 0.8; // Aplicar descuento del 20%
        } else if (cantidadZapatos >= 30) {
            totalCompra *= 0.6; // Aplicar descuento del 40%
        }

        alert(`El total a pagar es: $${totalCompra}`);
    } else {
        alert("Por favor, ingrese una cantidad válida de zapatos.");
    }
    console.log("Ejercicio 5")
}

function ejercicio6() {
    let horasTrabajadas = Number.parseInt(prompt("Ingrese el número de horas trabajadas en la semana:"));
    const salarioBasePorHora = 20;
    const salarioHoraExtra = 25;
    if (!isNaN(horasTrabajadas) && horasTrabajadas >= 0) {
        if (horasTrabajadas <= 40) {
            let salarioSemanal = horasTrabajadas * salarioBasePorHora;
            alert(`El salario semanal es: $${salarioSemanal}`);
        } else {
            let horasExtras = horasTrabajadas - 40;
            let salarioSemanal = (40 * salarioBasePorHora) + (horasExtras * salarioHoraExtra);
            alert(`El salario semanal es: $${salarioSemanal}`);
        }
    } else {
        alert("Por favor, ingrese un número válido de horas trabajadas.");
    }
    console.log("Ejercicio 6")

}
function ejercicio7() {
    let tipoMembresia = prompt("Ingrese el tipo de membresía (A, B o C):").toUpperCase();
    let precioHelado = 100;
    if (tipoMembresia === 'A' || tipoMembresia === 'B' || tipoMembresia === 'C') {
        let descuento = 0;
        switch (tipoMembresia) {
            case 'A':
                descuento = 0.1;
                break;
            case 'B':
                descuento = 0.15;
                break;
            case 'C':
                descuento = 0.2;
                break;
        }
        let precioConDescuento = precioHelado * (1 - descuento);
        alert(`El precio del helado con descuento para la membresía ${tipoMembresia} es: $${precioConDescuento}`);
    } else {
        alert("Tipo de membresía inválido. Por favor, ingrese A, B o C.");
    }
    console.log("Ejercicio 7")
}

function ejercicio8() {
    let nota1 = parseFloat(prompt("Ingrese la primera nota:"));
    let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
    let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));
    if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
        let promedio = (nota1 + nota2 + nota3) / 3;
        if (promedio >= 11) {
            alert(`El promedio es ${promedio.toFixed(2)}. ¡El estudiante aprobó!`);
        } else {
            alert(`El promedio es ${promedio.toFixed(2)}. El estudiante no aprobó.`);
        }
    } else {
        alert("Al menos una de las entradas no es un número válido. Por favor, ingrese solo números.");
    }
    console.log("Ejercicio 8");
}

function ejercicio9() {
    let salario = parseFloat(prompt("Ingrese el salario del trabajador en dólares:"));
    if (!isNaN(salario)) {
        let aumento;
        if (salario > 2000) {
            aumento = salario * 0.05;
        } else {
            aumento = salario * 0.10;
        }
        let nuevoSalario = salario + aumento;
        alert(`El aumento es de $${aumento.toFixed(2)} y el nuevo salario es de $${nuevoSalario.toFixed(2)}.`);
    } else {
        alert("Por favor, ingrese un salario válido.");
    }
    console.log("Ejercicio 9");
}

function ejercicio10() {
    let numero = parseInt(prompt("Ingrese un número:"));
    if (!isNaN(numero)) {
        if (numero % 2 === 0) {
            alert(`El número ${numero} es par.`);
        } else {
            alert(`El número ${numero} es impar.`);
        }
    } else {
        alert("Por favor, ingrese un número válido.");
    }
    console.log("Ejercicio 10");
}

function ejercicio11() {
    console.log("Ejercicio 11");
}
function ejercicio12() {
    console.log("Ejercicio 12");
}

function ejercicio13() {
    console.log("Ejercicio 13");
}

function ejercicio14() {
    console.log("Ejercicio 14");
}
function ejercicio15() {
    console.log("Ejercicio 15");
}

function ejercicio16() {
    console.log("Ejercicio 16");
}
function ejercicio17() {
    console.log("Ejercicio 17");
}

function ejercicio18() {
    console.log("Ejercicio 18");
}

function ejercicio19() {
    console.log("Ejercicio 19");
}

function ejercicio20() {
    console.log("Ejercicio 20");
}

function ejercicio21() {
    console.log("Ejercicio 21");
}

function ejercicio22() {
    console.log("Ejercicio 22");
}

function ejercicio23() {
    console.log("Ejercicio 23");
}
function ejercicio24() {
    console.log("Ejercicio 24");
}

function ejercicio25() {
    console.log("Ejercicio 25");
}

function ejercicio26() {
    console.log("Ejercicio 26");
}

function ejercicio27() {
    console.log("Ejercicio 27");
}

function ejercicio28() {
    console.log("Ejercicio 28");
}

function ejercicio29() {
    console.log("Ejercicio 29");
}

function ejercicio30() {
    console.log("Ejercicio 30");
}

function ejercicio31() {
    console.log("Ejercicio 31");
}

function ejercicio32() {
    console.log("Ejercicio 32");
}

function ejercicio33() {
    console.log("Ejercicio 33");
}

function ejercicio34() {
    console.log("Ejercicio 34");
}

function ejercicio35() {
    console.log("Ejercicio 35");
}

function ejercicio36() {
    console.log("Ejercicio 36");
}

function ejercicio37() {
    console.log("Ejercicio 37");
}

function ejercicio38() {
    console.log("Ejercicio 38");
}

function ejercicio39() {
    console.log("Ejercicio 39");
}

function ejercicio40() {
    console.log("Ejercicio 40");
}