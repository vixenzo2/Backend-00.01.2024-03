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
            alert("tiene mas de 3 digitos");
        }
    }
    else{
        alert("Lo que ingreso no son numeros");
    }
    console.log("Ejercicio 1")
}

//function ejercicio2() {
  //  console.log("Ejercicio 2")
//}
// Función que determina si un número termina en 4
function ejercicio2() {
    // Mostrar mensaje de inicio
    console.log("***********");
    console.log("*   Numero que termina en 4   *");
    console.log("***********");

    // Solicitar al usuario ingresar un número
    let numero = parseInt(prompt("Ingresar un número:"));

    // Verificar si el número termina en 4
    if (numero % 10 === 4) {
        alert("El número termina en cuatro");
    } else {
        alert("El número NO termina en cuatro");
    }
}

// Llamada a la función
//ejercicio2();


// Función que determina si un número entero es negativo
function ejercicio3() {
    // Mostrar mensaje de inicio
    console.log("***********");
    console.log("*     Numero es negativo      *");
    console.log("***********");

    // Solicitar al usuario ingresar un número entero
    let numero = parseInt(prompt("Ingresar un número entero:"));

    // Verificar si el número es entero
    if (numero === Math.trunc(numero)) {
        alert("El número es un entero");

        // Determinar si el número entero es negativo o positivo
        if (numero < 0) {
            alert("y es negativo");
        } else {
            alert("y es positivo");
        }
    } else {
        alert("El número no es entero, ingresar un número entero");
    }
}

// Proceso Numero_Menor_A_Mayor

function ejercicio4() {

 console.log("*******************************");
 console.log("*   Numeros de menor a mayor  *");
 console.log("*******************************");

 let n1, n2, n3;
 console.log("Ingresar tres números enteros:");
 n1 = parseInt(prompt("Ingrese el primer número:"));
 n2 = parseInt(prompt("Ingrese el segundo número:"));
 n3 = parseInt(prompt("Ingrese el tercer número:"));

 let mayor, medio, menor;

 if (n1 > n2) {
    if (n1 > n3) {
        mayor = n1;
        if (n2 > n3) {
            medio = n2;
            menor = n3;
        } else {
            medio = n3;
            menor = n2;
        }
    } else {
        mayor = n3;
        medio = n1;
        menor = n2;
    }
 } else {
    if (n2 > n3) {
        mayor = n2;
        if (n3 > n1) {
            medio = n3;
            menor = n1;
        } else {
            medio = n1;
            menor = n3;
        }
    } else {
        mayor = n3;
        medio = n2;
        menor = n1;
    }
 }

 alert("Los números ordenados de menor a mayor son: " + menor + ", " + medio + ", y " + mayor);
 // FinProceso
}

function ejercicio5() {
 // Proceso Venta_Zapatos
 console.log("***************************************");
 console.log("* TIENDA: Venta de zapatos            *");
 console.log("***************************************");

 console.log("Ingresar número de zapatos a comprar:");
 let nNumZapatos = parseInt(prompt("Ingrese el número de zapatos a comprar:"));

 let nPrecioZapato = 80;
 let nTotal = nNumZapatos * nPrecioZapato;
 let nDscto = 0.00;

 if (nNumZapatos > 30) {
    nDscto = (nNumZapatos * nPrecioZapato) * 40 / 100;
 } else {
    if (nNumZapatos > 20) {
        nDscto = (nNumZapatos * nPrecioZapato) * 20 / 100;
    } else {
        if (nNumZapatos > 10) {
            nDscto = (nNumZapatos * nPrecioZapato) * 10 / 100;
        }
    }
 }

 let nTotalPago = nTotal - nDscto;
 alert("Precio total de compra es: " + nTotalPago);
 // FinProceso
}

function ejercicio6() {
 // Proceso Sueldo_Semanal
 console.log("***********************************");
 console.log("*          Sueldo semanal         *");
 console.log("***********************************");

 console.log("Ingresar número de horas trabajadas:");
 let nHoras = parseInt(prompt("Ingrese el número de horas trabajadas:"));

 let nHorasTrabajadas;

 if (nHoras <= 40) {
    nHorasTrabajadas = nHoras * 20;
 } else {
    nHorasTrabajadas = nHoras * 25;
 }

 alert("Horas trabajadas: " + nHorasTrabajadas);
 // FinProceso
}

function ejercicio7() {
 // Proceso Venta_Helados
 console.log("*******************************");
 console.log("*       Venta de helados      *");
 console.log("*******************************");

 let nPrecioHelado = 10;
 console.log("El precio del helado es:", nPrecioHelado);

 console.log("Numero de helados a comprar:");
 let nHelados = parseInt(prompt("Ingrese el número de helados a comprar:"));

 console.log("Ingresar tipo de membresía [A/B/C]:");
 let cMembrecia = prompt("Ingrese el tipo de membresía [A/B/C]:").toUpperCase();

 let nDescuento;

 switch (cMembrecia) {
    case "A":
        nDescuento = 10;
        break;
    case "B":
        nDescuento = 15;
        break;
    case "C":
        nDescuento = 20;
        break;
    default:
        nDescuento = 0;
 }

 console.log("Total a Pagar  : ", nHelados * nPrecioHelado);
 console.log("Descuento % ", nDescuento, " :  ", (nHelados * nPrecioHelado) * nDescuento / 100);
 alert("Total con Dscto: ", (nHelados * nPrecioHelado) - (nHelados * nPrecioHelado) * nDescuento / 100);
 // FinProceso
}


function ejercicio8() {
 // Proceso Promedio_Nota
 console.log("*****************************");
 console.log("*  Sacar promedio de Notas  *");
 console.log("*****************************");

 console.log("Ingresar primera nota:");
 let nNota1 = parseFloat(prompt("Ingrese la primera nota:"));

 console.log("Ingresar segunda nota:");
 let nNota2 = parseFloat(prompt("Ingrese la segunda nota:"));

 console.log("Ingresar tercera nota:");
 let nNota3 = parseFloat(prompt("Ingrese la tercera nota:"));

 let nPromedio = (nNota1 + nNota2 + nNota3) / 3;

 let cMensaje;

 if (nPromedio >= 10.5) {
    cMensaje = "Aprobó";
 } else {
    cMensaje = "Desaprobó";
 }

 alert("El estudiante: " + cMensaje + " con " + nPromedio);
 // FinProceso
}

function ejercicio9() {
 // Proceso Aumento_Trabajador
 console.log("****************************************");
 console.log("*         Aumento trabajador           *");
 console.log("****************************************");

 console.log("Ingresar monto ganado por el trabajador:");
 let nMonto = parseFloat(prompt("Ingrese el monto ganado por el trabajador:"));

 if (nMonto > 2000) {
    nMonto = nMonto + nMonto * 5 / 100;
 } else {
    nMonto = nMonto + nMonto * 10 / 100;
 }

 console.log("Monto final del trabajador: ", nMonto);
 // FinProceso
}

function ejercicio10() {
 // Proceso Par_Impar
 console.log("*****************************");
 console.log("*  El numero es par o impar *");
 console.log("*****************************");

 console.log("Ingresar número:");
 let nNumero = parseInt(prompt("Ingrese un número:"));

 let cMsg;

 if (nNumero % 2 === 0) {
    cMsg = "Par";
 } else {
    cMsg = "Impar";
 }

 alert("El número ingresado es: " + cMsg);
 // FinProceso
}

function ejercicio11() {
 // Proceso Numero_Mayor
 console.log("*******************************");
 console.log("*  Numero mayor de 3 numeros  *");
 console.log("*******************************");

 console.log("Ingresar primer número:");
 let nNum1 = parseFloat(prompt("Ingrese el primer número:"));

 console.log("Ingresar segundo número:");
 let nNum2 = parseFloat(prompt("Ingrese el segundo número:"));

 console.log("Ingresar tercer número:");
 let nNum3 = parseFloat(prompt("Ingrese el tercer número:"));

 let nMayor;

 if (nNum1 === nNum2 && nNum1 === nNum3) {
    console.log("Los tres números son iguales");
 } else {
    if (nNum1 > nNum2) {
        if (nNum1 > nNum3) {
            nMayor = nNum1;
        } else {
            nMayor = nNum3;
        }
    } else {
        if (nNum2 > nNum3) {
            nMayor = nNum2;
        } else {
            nMayor = nNum3;
        }
    }
    console.log("El número mayor es: ", nMayor);
    alert("El número mayor es: ", nMayor);
    alert(nMayor);
 }
 // FinProceso
}

function ejercicio12() {
 // Proceso Numero_Mayor2
 console.log("*******************************");
 console.log("*  Numero mayor de 2 numeros  *");
 console.log("*******************************");

 console.log("Ingresar primer número:");
 let nNum1 = parseFloat(prompt("Ingrese el primer número:"));

 console.log("Ingresar segundo número:");
 let nNum2 = parseFloat(prompt("Ingrese el segundo número:"));

 let nMayor;

 if (nNum1 === nNum2) {
    console.log("Los números ingresados son iguales");
 } else {
    if (nNum1 > nNum2) {
        nMayor = nNum1;
    } else {
        nMayor = nNum2;
    }
    console.log("El número mayor es: ", nMayor);
    alert("El número mayor es: ", nMayor);
    alert(nMayor);

 }
 // FinProceso
} 

function ejercicio13() {
    // Proceso Letra_Vocal
 console.log("***********************");
 console.log("*     Letra vocal     *");
 console.log("***********************");

 console.log("Ingresar una letra:");
 let cLetra = prompt("Ingrese una letra:").toUpperCase();

 let cMsg;

 switch (cLetra) {
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
        cMsg = "Sí es vocal";
        break;
    default:
        cMsg = "No es vocal";
 }

 console.log("La letra ingresada: ", cMsg);
 alert("La letra ingresada: ");
 alert( cMsg);
 // FinProceso
}

function ejercicio14() {
    // Proceso Numero_Primo
 console.log("*******************************");
 console.log("*        Numero Primo         *");
 console.log("*******************************");

 console.log("Ingresar un número entre [1-10]:");
 let nNumero = parseInt(prompt("Ingrese un número entre 1 y 10:"));

 let div = 1;
 let cont = 0;
 let cMsg;

 if (nNumero < 1 || nNumero > 10) {
    console.log("Número ingresado incorrecto.");
 } else {
    while (div <= nNumero) {
        if (nNumero % div === 0) {
            cont = cont + 1;
        }
        div = div + 1;
    }

    if (cont === 2) {
        cMsg = " es primo";
    } else {
        cMsg = " no es primo";
    }

    console.log("El número ", nNumero, cMsg);
    alert("El número ");
    alert( nNumero);
    alert( cMsg);
 }
 // FinProceso
} 

function ejercicio15() {
 // Proceso Centimetros_Pulgadas
 console.log("*************************************");
 console.log("*  Convertir centímetros y libras   *");
 console.log("*************************************");

 console.log("Ingresar un número en centímetros:");
 let nNum1 = parseFloat(prompt("Ingrese un número en centímetros:"));

 console.log("Ingresar un número en libras:");
 let nNum2 = parseFloat(prompt("Ingrese un número en libras:"));

 let nNumPul = nNum1 / 2.54;
 let nNumKil = nNum2 * 0.4536;

 console.log("El número ", nNum1, " cm, en pulgadas es: ", nNumPul);
 console.log("El número ", nNum2, " libras, en kilogramos es: ", nNumKil);
 // FinProceso
} 

function ejercicio16() {
 // Proceso Dia
 console.log("*********************");
 console.log("*   Encontrar DIA   *");
 console.log("*********************");

 console.log("Ingresar un número del 1 al 7:");
 let nNumero = parseInt(prompt("Ingrese un número:"));

 let cDia;

 if (nNumero <= 0 || nNumero >= 8) {
    console.log("Número ingresado es incorrecto.");
 } else {
    switch (nNumero) {
        case 1:
            cDia = "Lunes";
            break;
        case 2:
            cDia = "Martes";
            break;
        case 3:
            cDia = "Miércoles";
            break;
        case 4:
            cDia = "Jueves";
            break;
        case 5:
            cDia = "Viernes";
            break;
        case 6:
            cDia = "Sábado";
            break;
        case 7:
            cDia = "Domingo";
            break;
    }
    console.log("El número de día ", nNumero, " es: ", cDia);
 }
 // FinProceso
} 

function ejercicio17() {
 // Proceso Hora_Segundos
 console.log("*********************************************");
 console.log("*            Horas en segundos              *");
 console.log("*********************************************");

 let lValido = 0;
 let nHoras, nMinutos, nSegundos;

 do {
    console.log("Ingresar la hora, minutos y segundos:");
    console.log("Hora [1-12], Minutos [0-60], Segundos [0-60]");
    nHoras = parseInt(prompt("Ingrese las horas (entre 1 y 12):"));
    nMinutos = parseInt(prompt("Ingrese los minutos (entre 0 y 59):"));
    nSegundos = parseInt(prompt("Ingrese los segundos (entre 0 y 59):"));

    lValido = 1;

    if (nHoras < 1 || nHoras > 12) {
        console.log("Número de horas inválido, rango [1-12]");
        lValido = 0;
    }

    if (nMinutos < 0 || nMinutos > 59) {
        console.log("Número de minutos inválido, rango [0-59]");
        lValido = 0;
    }

    if (nSegundos < 0 || nSegundos > 59) {
        console.log("Número de segundos inválido, rango [0-59]");
        lValido = 0;
    }

    if (lValido === 0) {
        console.log("");
        console.log("---------------------------------------------");
    }
 } while (lValido !== 1);

 let nTotSegundos = (nHoras * 3600) + (nMinutos * 60) + nSegundos;
 console.log("La hora ", nHoras, ":", nMinutos, ":", nSegundos, " en segundos es: ", nTotSegundos);
 // FinProceso
} 

function ejercicio18() {
 // Proceso Venta_CDS
 console.log("************************");
 console.log("*     Venta de CDs     *");
 console.log("************************");

 console.log("Ingresar número de CDs a comprar:");
 let nCDs = parseInt(prompt("Ingrese el número de CDs a comprar:"));

 let nPrecio;

 if (nCDs <= 9) {
    nPrecio = 10;
 } else if (nCDs <= 99) {
    nPrecio = 8;
 } else if (nCDs <= 499) {
    nPrecio = 7;
 } else {
    nPrecio = 6;
 }

 let nTotal = nCDs * nPrecio;
 let nGanancia = (nTotal * 8.25) / 100;

 console.log("El precio total de la venta es: ", nTotal);
 console.log("La ganancia para el vendedor es: ", nGanancia);
 // FinProceso
}

function ejercicio19() {
        // Proceso Heladeria
 console.log("******************************************");
 console.log("*         Heladeria: Pago Empleado       *");
 console.log("******************************************");

 console.log("Ingresar tipo de empleado:");
 console.log(" [1] Cajero");
 console.log(" [2] Servidor");
 console.log(" [3] Preparador de mezclas");
 console.log(" [4] Mantenimiento");
 let nTipo = parseInt(prompt("Ingrese el tipo de empleado (1-4):"));

 onsole.log("Ingresar número identificador de empleado:");
 let nIdentificador = parseInt(prompt("Ingrese el número identificador del empleado:"));

 console.log("Ingresar número de días trabajados:");
 let nDias = parseInt(prompt("Ingrese el número de días trabajados (máximo 6 días):"));

 let nPago;

 if (nIdentificador <= 9 || nIdentificador >= 100) {
    console.log("Número identificador inválido");
 } else if (nDias > 6) {
    console.log("Número de días en exceso");
 } else if (nTipo >= 1 && nTipo <= 4) {
    switch (nTipo) {
        case 1:
            nPago = 56;
            break;
        case 2:
            nPago = 64;
            break;
        case 3:
            nPago = 80;
            break;
        case 4:
            nPago = 48;
            break;
    }
    let nTotPago = nPago * nDias;
    console.log("Al trabajador se le debe pagar: ", nTotPago);
 } else {
    console.log("Tipo de trabajador incorrecto.");
 }
 // FinProceso
}


function ejercicio20() {
 // Proceso Verificar_Numeros
 console.log("**************************");
 console.log("*    Verificar numeros   *");
 console.log("**************************");

 console.log("Ingresar primer numero:");
 let nNum1 = parseInt(prompt("Ingrese el primer número:"));

 console.log("Ingresar segundo numero:");
 let nNum2 = parseInt(prompt("Ingrese el segundo número:"));

 console.log("Ingresar tercer numero:");
 let nNum3 = parseInt(prompt("Ingrese el tercer número:"));

 console.log("Ingresar cuarto numero:");
 let nNum4 = parseInt(prompt("Ingrese el cuarto número:"));

 // Cuantos numeros son pares
 console.log("---Primera respuesta---------------------");
 let nPares = 0;
 if (nNum1 % 2 == 0) nPares++;
 if (nNum2 % 2 == 0) nPares++;
 if (nNum3 % 2 == 0) nPares++;
 if (nNum4 % 2 == 0) nPares++;
 console.log("Los numeros pares son: ", nPares);

 // Cual es mayor de todos
 console.log("---Segunda respuesta---------------------");
 let nMayor = Math.max(nNum1, nNum2, nNum3, nNum4);
 console.log("El numero mayor es: ", nMayor);

 // Si el tercero es par, calcular el cuadrado del segundo.
 console.log("---Tercera respuesta---------------------");
 if (nNum3 % 2 == 0) {
    let nCuadrado = nNum2 * nNum2;
    console.log("El cuadrado del segundo numero es: ", nCuadrado);
 } else {
    console.log("El tercer numero no es par");
 }

 // Si el primero es menor que el cuarto, calcular la media de los 4 números.
 console.log("---Cuarta respuesta----------------------");
 if (nNum1 < nNum4) {
    let nMedia = (nNum1 + nNum2 + nNum3 + nNum4) / 4;
    console.log("La media de los cuatro numeros es: ", nMedia);
 } else {
    console.log("El primer numero no es menor que el cuarto");
 }

 // Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los
 // valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.
 console.log("---Quinta respuesta----------------------");
 if (nNum2 > nNum3 && nNum3 >= 50 && nNum3 <= 700) {
    let nSuma = nNum1 + nNum2 + nNum3 + nNum4;
    console.log("La suma de los cuatro numeros es: ", nSuma);
 } else {
    console.log("No se cumple la condicion establecida");
 }
 // FinProceso
}

function ejercicio21() {
    // Proceso Factorial
 console.log("*********************");
 console.log("*     Factorial     *");
 console.log("*********************");

 console.log("Ingresar un numero:");
 let nNum = parseInt(prompt("Ingrese un número:"));

 let nFact = 1;
 for (let i = 1; i <= nNum; i++) {
    nFact *= i;
 }

 console.log("El factorial de ", nNum, " es: ", nFact);
 // FinProceso
} 

function ejercicio22() {
    // Proceso Suma_Numeros
 console.log("************************");
 console.log("*     Suma numeros     *");
 console.log("************************");

 console.log("Ingresar un numero:");
 let nNum = parseInt(prompt("Ingrese un número:"));

 let nCont = 1;
 let nSuma = 0;

 while (nCont <= nNum) {
    nSuma = nSuma + nCont;
    nCont = nCont + 1;
 }

 console.log("La suma total es: ", nSuma);
 // FinProceso
}
function ejercicio23() {
   // Proceso Suma_Impares
 console.log("**************************");
 console.log("*  Suma numeros impares  *");
 console.log("**************************");

 console.log("Ingresar un numero:");
 let nNum = parseInt(prompt("Ingrese un número:"));

 let nCont = 1;
 let nSuma = 0;

 while (nCont <= nNum) {
    if (nCont % 2 !== 0) {
        nSuma = nSuma + nCont;
    }
    nCont = nCont + 1;
 }

 console.log("La suma de numeros impares es: ", nSuma);
 // FinProceso
}

function ejercicio24() { 
    // Proceso Suma_Pares
 console.log("**************************************");
 console.log("*  Suma numeros pares hasta el 1000  *");
 console.log("**************************************");

 let nTope = 1000;
 let nCont = 1;
 let nSuma = 0;

 while (nCont <= nTope) {
    if (nCont % 2 === 0) {
        nSuma = nSuma + nCont;
    }
    nCont = nCont + 1;
 }

 console.log("La suma de todos los numeros pares es: ", nSuma);
 // FinProceso
}

function ejercicio25() { 
 // Definir variables
 let numero;
 let contador;
 let factorial;

 // Leer número
 numero = parseInt(prompt("Ingrese un número:"));

 // Inicializar variables
 contador = 1;
 factorial = 1;

 // Calcular factorial
 while (contador < numero) {
    contador++;
    factorial *= contador;
 }

 // Mostrar resultado
 console.log("El factorial de " + numero + " es: " + factorial);

} 

function ejercicio26() { 
  // Definir variables
 let nDividendo, nDivisor, nResto, nCociente;

 // Leer números
 nDividendo = parseInt(prompt("Ingrese el dividendo:"));
 nDivisor = parseInt(prompt("Ingrese el divisor:"));
 
 // Inicializar variables
 nResto = nDividendo;
 nCociente = 0;

 // Calcular resto y cociente por medio de restas sucesivas
 while (nResto >= nDivisor) {
    nResto -= nDivisor;
    nCociente++;
 }

 // Mostrar resultado
 console.log("El cociente es: " + nCociente);
 console.log("El resto es: " + nResto);

}   


function ejercicio27() { 
    // Definir variables
 let nCont = -1;
 let nSuma = 0;
 let nNum = 0;

 // Mostrar mensaje inicial
 console.log("***************************************************");
 console.log("*    Promedio de numeros                          *");
 console.log("*    (Para salir ingresar un valor en negativo)   *");
 console.log("***************************************************");

 // Leer números y calcular suma
 do {
    nCont++;
    nSuma += nNum;

    // Solicitar al usuario que ingrese un número
    nNum = parseInt(prompt("Ingrese un numero:"));

 } while (nNum >= 0);

 // Calcular promedio
 let nPromedio = nSuma / nCont;

 // Mostrar resultado
 console.log("La media de los numeros ingresados es: " + nPromedio);
}

function ejercicio28() {  
    // Definir variables
    let nNumero = 100;
    let nCont = 0;
    let nSuma = 0;
   
    // Mostrar mensaje inicial
    console.log("*************************");
    console.log("*    Suma de numeros    *");
    console.log("*************************");
   
    // Calcular suma de los primeros cien números con un ciclo repetir
    do {
       nCont++;
       nSuma += nCont;
    } while (nCont < nNumero);
   
    // Mostrar resultado
    console.log("La suma total de numeros es: " + nSuma);
}

function ejercicio29() {  
    // Definir variables
 let nNumero = 100;
 let nCont = 0;
 let nSuma = 0;

 // Mostrar mensaje inicial
 console.log("*************************");
 console.log("*    Suma de numeros    *");
 console.log("*************************");

 // Calcular suma de los primeros cien números con un ciclo mientras
 while (nCont < nNumero) {
    nCont++;
    nSuma += nCont;
 }

 // Mostrar resultado
 console.log("La suma total de numeros es: " + nSuma);

}

function ejercicio30() {  
    // Definir variables
   let nNumero = 100;
   let nSuma = 0;
  
   // Mostrar mensaje inicial
   console.log("*************************");
   console.log("*    Suma de numeros    *");
   console.log("*************************");
  
   // Calcular suma de los primeros cien números con un ciclo para
   for (let nCont = 0; nCont <= nNumero; nCont++) {
      nSuma += nCont;
   }
  
   // Mostrar resultado
   console.log("La suma total de numeros es: " + nSuma);
  
}

function ejercicio31() { 
    
        let sumaPares = 0;
        let sumaImpares = 0;
        let contadorPares = 0;
        let contadorImpares = 0;
        console.log("Ingrese diez números: ");
        for (let i = 1; i <= 10; i++) {
            let num = parseInt(prompt());
            if (num % 2 === 0) {
                sumaPares += num;
                contadorPares++;
            } else {
                sumaImpares += num;
                contadorImpares++;
            }
        }
        if (contadorPares > 0) {
            let mediaPares = sumaPares / contadorPares;
            console.log("La media de los números pares es: " + mediaPares);
        } else {
            console.log("No se ingresaron números pares.");
        }
        if (contadorImpares > 0) {
            let mediaImpares = sumaImpares / contadorImpares;
            console.log("La media de los números impares es: " + mediaImpares);
        } else {
            console.log("No se ingresaron números impares.");
        }
    
    
}

function ejercicio32() { 
    let poblacion_maxima = -1;
    let ciudad_maxima = 0;
    
    for (let i = 1; i <= 11; i++) {
        let poblacion_ciudad = prompt(`Ingrese la población de la ciudad ${i}:`);
        poblacion_ciudad = parseInt(poblacion_ciudad);
        
        if (poblacion_ciudad > poblacion_maxima) {
            poblacion_maxima = poblacion_ciudad;
            ciudad_maxima = i;
        }
    }
    
    // Mostrar la ciudad con mayor población
    console.log(`La ciudad con más población es la número ${ciudad_maxima}, con una población de: ${poblacion_maxima}`);
    
}

function ejercicio33() { 
        let indicador = "s";
        console.log("Se está ejecutando el programa: ");
        while (indicador === "s") {
            console.log("Desea continuar? (s/n)");
            indicador = prompt().toLowerCase();
            if (indicador === "n") {
                console.log("Fin del programa.");
            } else {
                console.log("Desea continuar? (s/n)");
                indicador = prompt().toLowerCase();
            }
        }
    

}

function ejercicio34() { 
    console.log("*****************************************");
 console.log("*    Tabla de multiplicar del 1 al 9    *");
 console.log("*****************************************");

 for (let nTabla = 1; nTabla <= 9; nTabla++) {
    console.log("Tabla del " + nTabla + ":");
    console.log("============");

    for (let nNum = 1; nNum <= 12; nNum++) {
        console.log(nTabla + " * " + nNum + " = " + (nTabla * nNum));
    }

    console.log("");
 }

 }


 function ejercicio35() {
    let mayor;
    let menor;

    // Solicitar al usuario que ingrese los veinte números
    let numeros = [];
    for (let i = 0; i < 20; i++) {
        let numero = parseFloat(prompt(`Ingrese el número ${i + 1}:`));
        numeros.push(numero);
    }

    // Encontrar el número mayor y menor
    mayor = menor = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }

    // Mostrar el resultado
    console.log(`El número mayor es: ${mayor}`);
    console.log(`El número menor es: ${menor}`);
   
}


    


function ejercicio36() { 
    function calcularSerieFibonacci(n) {
        let fibonacci = [0, 1];
    
        for (let i = 2; i <= n; i++) {
            fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        }
    
        return fibonacci.slice(0, n + 1);
    }
    
    // Ejemplo de uso:
    const n = 10; // Número hasta el cual se calculará la serie Fibonacci
    const serieFibonacci = calcularSerieFibonacci(n);
    console.log(`Serie Fibonacci hasta ${n}:`, serieFibonacci.join(', '));
    alert(serieFibonacci.join(', '));
    
}

function ejercicio37() { 
    function calcularMCD() {
        let a, b, resto, mcd;
        console.log("Ingrese el primer numero: ");
        // Se puede usar prompt() para entrada de usuario en entornos web
        // o readline para entornos de consola en Node.js
        a = parseInt(prompt());
        console.log("Ingrese el segundo numero: ");
        b = parseInt(prompt());
    
        while (b !== 0) {
            resto = a % b;
            a = b;
        }
}
}

function ejercicio38() { 
    let numero, sumaDivisores = 0, divisor;
        console.log("Ingrese un numero: ");
        // Se puede usar prompt() para entrada de usuario en entornos web
        // o readline para entornos de consola en Node.js
        numero = parseInt(prompt());
        for (divisor = 1; divisor < numero; divisor++) {
            if (numero % divisor === 0) {
                sumaDivisores += divisor;
            }
        }
        if (sumaDivisores === numero) {
            console.log(numero + " es un numero perfecto.");
            alert(numero + " es un numero perfecto.")
        } else {
            console.log(numero + " no es un numero perfecto.");
            alert(numero + " NO es un numero perfecto.")
     }
    
}

function ejercicio39() { 
    let suma = 0;
    let resta = 0;
    
    for (let n = 1; n <= 1000000; n += 4) {
        suma += 4 / n;
    }
    
    for (let m = 3; m <= 1000000; m += 4) {
        resta -= 4 / m;
    }
    
    console.log("El valor de Pi es: ", suma + resta);
    alert(suma + resta);
}  

function ejercicio40() { 
    let suma = 0;
    let resta = 0;
    
    for (let n = 2; n <= 1000000; n += 4) {
        suma += 4 / (n * (n + 1) * (n + 2));
    }
    
    for (let m = 4; m <= 100000; m += 4) {
        resta -= 4 / (m * (m + 1) * (m + 2));
    }
    
    console.log("El valor de pi es: ", 3 + suma + resta);
    alert(3 + suma + resta);
} 