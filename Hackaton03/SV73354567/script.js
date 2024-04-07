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
            totalCompra *= 0.9;
        } else if (cantidadZapatos > 20 && cantidadZapatos < 30) {
            totalCompra *= 0.8;
        } else if (cantidadZapatos >= 30) {
            totalCompra *= 0.6;
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
    let numero1 = parseFloat(prompt("Ingrese el primer número:"));
    let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
    let numero3 = parseFloat(prompt("Ingrese el tercer número:"));
    if (!isNaN(numero1) && !isNaN(numero2) && !isNaN(numero3)) {
        let mayor = numero1;
        if (numero2 > mayor) {
            mayor = numero2;
        }
        if (numero3 > mayor) {
            mayor = numero3;
        }
        alert(`El mayor número ingresado es: ${mayor}`);
    } else {
        alert("Por favor, ingrese tres números válidos.");
    }
    console.log("Ejercicio 11");
}


function ejercicio12() {
    let numero1 = parseFloat(prompt("Ingrese el primer número:"));
    let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
    if (!isNaN(numero1) && !isNaN(numero2)) {
        if (numero1 > numero2) {
            alert(`El primer número (${numero1}) es mayor que el segundo número (${numero2}).`);
        } else if (numero2 > numero1) {
            alert(`El segundo número (${numero2}) es mayor que el primer número (${numero1}).`);
        } else {
            alert("Los dos números son iguales.");
        }
    } else {
        alert("Por favor, ingrese dos números válidos.");
    }
    console.log("Ejercicio 12");
}


function ejercicio13() {
    let letra = prompt("Ingrese una letra:");
    letra = letra.toLowerCase();
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        alert(`La letra ${letra} es una vocal.`);
    } else {
        alert(`La letra ${letra} no es una vocal.`);
    }
    console.log("Ejercicio 13");
}


function ejercicio14() {
    let numero = parseInt(prompt("Ingrese un número entero positivo entre 1 y 10 (excluyendo el 9):"));
    if (numero >= 1 && numero <= 10 && numero !== 9) {
        let esPrimo = true;
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                esPrimo = false;
                break;
            }
        }
        if (esPrimo) {
            alert("El número ingresado es primo.");
        } else {
            alert("El número ingresado no es primo.");
        }
    } else {
        alert("El número ingresado no está en el rango permitido o es igual a 9.");
    }
    console.log("Ejercicio 14");
}


function ejercicio15() {
    function centimetrosAPulgadas() {
        let centimetros = prompt("Ingrese la longitud en centímetros:");
        if (!isNaN(centimetros)) {
            let pulgadas = centimetros / 2.54;
            alert(centimetros + " centímetros son aproximadamente " + pulgadas + " pulgadas.");
        } else {
            alert("Por favor ingrese un número válido.");
        }
    }
    function librasAKilogramos() {
        let libras = prompt("Ingrese el peso en libras:");
        if (!isNaN(libras)) {
            let kilogramos = libras * 0.453592;
            alert(libras + " libras son aproximadamente " + kilogramos + " kilogramos.");
        } else {
            alert("Por favor ingrese un número válido.");
        }
    }
    centimetrosAPulgadas();
    librasAKilogramos();
    console.log("Ejercicio 15");
}

function ejercicio16() {
    function indicarDia(numero) {
        let dia;
        switch (numero) {
            case 1:
                dia = "Lunes";
                break;
            case 2:
                dia = "Martes";
                break;
            case 3:
                dia = "Miércoles";
                break;
            case 4:
                dia = "Jueves";
                break;
            case 5:
                dia = "Viernes";
                break;
            case 6:
                dia = "Sábado";
                break;
            case 7:
                dia = "Domingo";
                break;
            default:
                dia = "Número inválido, ingrese un número del 1 al 7";
                break;
        }
        return dia;
    }
    let numero = parseInt(prompt("Ingrese un número del 1 al 7:"));
    if (!isNaN(numero) && numero >= 1 && numero <= 7) {
        let nombreDia = indicarDia(numero);
        alert("El día correspondiente al número " + numero + " es " + nombreDia + ".");
    } else {
        alert("Número inválido, por favor ingrese un número del 1 al 7.");
    }
    console.log("Ejercicio 16");
}


function ejercicio17() {
    let hora = parseInt(prompt("Ingrese la hora actual en formato HH (0-23):"));
    let minuto = parseInt(prompt("Ingrese los minutos actuales en formato MM (0-59):"));
    let segundo = parseInt(prompt("Ingrese los segundos actuales en formato SS (0-59):"));
    if (!isNaN(hora) && !isNaN(minuto) && !isNaN(segundo)) {
        if ((hora >= 0 && hora <= 23) && (minuto >= 0 && minuto <= 59) && (segundo >= 0 && segundo <= 59)) {
            segundo++;
            if (segundo === 60) {
                segundo = 0;
                minuto++;
                if (minuto === 60) {
                    minuto = 0;
                    hora++;
                    if (hora === 24) {
                        hora = 0;
                    }
                }
            }
            alert(`La hora dentro de un segundo será: ${hora.toString().padStart(2, '0')}:${minuto.toString().padStart(2, '0')}:${segundo.toString().padStart(2, '0')}`);
        } else {
            alert("Al menos una de las entradas no está en el rango permitido.");
        }
    } else {
        alert("Al menos una de las entradas no es un número válido.");
    }
    console.log("Ejercicio 17");
}


function ejercicio18() {
    let cantidad = parseInt(prompt("Ingrese la cantidad de CDs a vender:"));
    if (!isNaN(cantidad) && cantidad > 0) {
        let precioUnitario;
        if (cantidad >= 1 && cantidad <= 9) {
            precioUnitario = 10;
        } else if (cantidad >= 10 && cantidad <= 99) {
            precioUnitario = 8;
        } else if (cantidad >= 100 && cantidad <= 499) {
            precioUnitario = 7;
        } else {
            precioUnitario = 6;
        }
        let precioTotalCliente = cantidad * precioUnitario;
        let gananciaVendedor = precioTotalCliente * 0.0825;
        alert(`Precio total para el cliente: $${precioTotalCliente.toFixed(2)}`);
        alert(`Ganancia para el vendedor: $${gananciaVendedor.toFixed(2)}`);
    } else {
        alert("La cantidad ingresada no es válida.");
    }
    console.log("Ejercicio 18");
}


function ejercicio19() {
    const salariosDiarios = {
        1: 56, // Cajero
        2: 64, // Servidor
        3: 80, // Preparador de mezclas
        4: 48  // Mantenimiento
    };
    let idEmpleado = parseInt(prompt("Ingrese el número identificador del empleado (1 - Cajero, 2 - Servidor, 3 - Preparador de mezclas, 4 - Mantenimiento):"));
    let diasTrabajados = parseInt(prompt("Ingrese la cantidad de días trabajados en la semana (1 - 6):"));
    if (!isNaN(idEmpleado) && !isNaN(diasTrabajados) && idEmpleado >= 1 && idEmpleado <= 4 && diasTrabajados >= 1 && diasTrabajados <= 6) {
        let salarioDiario = salariosDiarios[idEmpleado];
        let salarioSemanal = salarioDiario * diasTrabajados;
        alert(`El salario semanal para el empleado es: $${salarioSemanal}`);
    } else {
        alert("Las entradas ingresadas no son válidas.");
    }
    console.log("Ejercicio 19");
}


function ejercicio20() {
    let num1 = parseInt(prompt("Ingrese el primer número entero positivo:"));
    let num2 = parseInt(prompt("Ingrese el segundo número entero positivo:"));
    let num3 = parseInt(prompt("Ingrese el tercer número entero positivo:"));
    let num4 = parseInt(prompt("Ingrese el cuarto número entero positivo:"));
    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3) && !isNaN(num4) && num1 > 0 && num2 > 0 && num3 > 0 && num4 > 0) {
        let numerosPares = 0;
        if (num1 % 2 === 0) numerosPares++;
        if (num2 % 2 === 0) numerosPares++;
        if (num3 % 2 === 0) numerosPares++;
        if (num4 % 2 === 0) numerosPares++;
        let mayor = Math.max(num1, num2, num3, num4);
        let cuadradoSegundo = (num3 % 2 === 0) ? Math.pow(num2, 2) : null;
        let media = (num1 < num4) ? (num1 + num2 + num3 + num4) / 4 : null;
        let sumaTotal = null;
        if (num2 > num3 && num3 >= 50 && num3 <= 700) {
            sumaTotal = num1 + num2 + num3 + num4;
        }
        alert(`Cantidad de números pares: ${numerosPares}`);
        alert(`El mayor de los números es: ${mayor}`);
        if (cuadradoSegundo !== null) alert(`El cuadrado del segundo número es: ${cuadradoSegundo}`);
        if (media !== null) alert(`La media de los números es: ${media}`);
        if (sumaTotal !== null) alert(`La suma total de los números es: ${sumaTotal}`);
    } else {
        alert("Por favor, ingrese números enteros positivos.");
    }
    console.log("Ejercicio 20");
}


function ejercicio21() {
    let numero = parseInt(prompt("Ingrese un número entero positivo para calcular su factorial:"));
    if (!isNaN(numero) && numero >= 0) {
        let factorial = 1;
        for (let i = 2; i <= numero; i++) {
            factorial *= i;
        }
        alert(`El factorial de ${numero} es: ${factorial}`);
    } else {
        alert("Por favor, ingrese un número entero positivo.");
    }
    console.log("Ejercicio 21");
}


function ejercicio22() {
    let n = parseInt(prompt("Ingrese un número entero positivo para calcular la suma de los primeros n números:"));
    if (!isNaN(n) && n >= 0) {
        let suma = 0;
        for (let i = 1; i <= n; i++) {
            suma += i;
        }
        alert(`La suma de los primeros ${n} números es: ${suma}`);
    } else {
        alert("Por favor, ingrese un número entero positivo.");
    }
    console.log("Ejercicio 22");
}


function ejercicio23() {
    let n = parseInt(prompt("Ingrese un número entero positivo para calcular la suma de los números impares menores o iguales a n:"));
    if (!isNaN(n) && n >= 0) {
        let suma = 0;
        for (let i = 1; i <= n; i += 2) {
            suma += i;
        }alert(`La suma de los números impares menores o iguales a ${n} es: ${suma}`);
    } else {
        alert("Por favor, ingrese un número entero positivo.");
    }
    console.log("Ejercicio 23");
}


function ejercicio24() {
    let suma = 0;
for (let i = 2; i <= 1000; i += 2) {
    suma += i;
}
alert(`La suma de todos los números pares hasta 1000 es: ${suma}`);
console.log("Ejercicio 24");
}

function ejercicio25() {
    function factorial(n) {
        let resultado = 1;
        for (let i = 2; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }  
    let numero = parseInt(prompt("Ingrese un número para calcular su factorial:"));
    if (!isNaN(numero)) {
        if (numero >= 0) {
            let resultado = factorial(numero);
            alert(`El factorial de ${numero} es: ${resultado}`);
        } else {
            alert("Por favor, ingrese un número entero no negativo.");
        }
    } else {
        alert("Por favor, ingrese un número válido.");
    }
    console.log("Ejercicio 25");
}


function ejercicio26() {
    let dividendo = parseInt(prompt("Ingrese el dividendo:"));
    let divisor = parseInt(prompt("Ingrese el divisor:"));    
    console.log(dividendo);
    console.log(divisor);    
    if (!isNaN(dividendo) && !isNaN(divisor) && divisor !== 0) {
        let cociente = 0;
        let resto = dividendo;    
        while (resto >= divisor) {
            resto -= divisor;
            cociente++;
        }
        alert(`Cociente: ${cociente}, Resto: ${resto}`);
    } else {
        alert("Por favor, ingrese números válidos y un divisor distinto de cero.");
    }    
    console.log("Ejercicio 26");
}


function ejercicio27() {
    let suma = 0;
let contador = 0;
let numero = 0;
do {
    numero = parseInt(prompt("Ingrese un número positivo (Ingrese un número negativo para terminar):"));
    console.log(numero);
    if (numero >= 0) {
        suma += numero;
        contador++;
    }
} while (numero >= 0);
if (contador > 0) {
    let media = suma / contador;
    alert(`La media de los números ingresados es: ${media}`);
} else {
    alert("No se ingresaron números positivos.");
}
console.log("Ejercicio 27");
}

function ejercicio28() {
    let suma = 0;
for (let i = 1; i <= 100; i++) {
    suma += i;
}
alert("La suma de los primeros cien números es: " + suma);    
console.log("Ejercicio 28");
}


function ejercicio29() {
    let suma = 0;
let contador = 1;
while (contador <= 100) {
    suma += contador;
    contador++;
}
alert("La suma de los primeros cien números es: " + suma);
    console.log("Ejercicio 29");
}


function ejercicio30() {
    let suma = 0;
for (let i = 1; i <= 100; i++) {
    suma += i;
}
alert("La suma de los primeros cien números es: " + suma);
    console.log("Ejercicio 30");
}


function ejercicio31() {
    let sumaPares = 0;
let sumaImpares = 0;
let cantidadPares = 0;
let cantidadImpares = 0;
for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt("Ingrese un número:"));
    if (!isNaN(numero)) {
        if (numero % 2 === 0) {
            sumaPares += numero;
            cantidadPares++;
        } else {
            sumaImpares += numero;
            cantidadImpares++;
        }
    } else {
        alert("Debe ingresar un número válido.");
        i--; 
    }
}
let mediaPares = sumaPares / cantidadPares;
let mediaImpares = sumaImpares / cantidadImpares;
alert("La media de los números pares ingresados es: " + mediaPares);
alert("La media de los números impares ingresados es: " + mediaImpares);
console.log("Ejercicio 31");
}


function ejercicio32() {
    alert("Falta datos para poder procesar")
    console.log("Ejercicio 32");
}


function ejercicio33() {
    do {
        var continuar = prompt("¿Desea continuar? (Ingrese 's' para sí, cualquier otra tecla para no)").toLowerCase();
        } while (continuar === 's');
    alert ("Usted a decidido no continuar")
    console.log("Ejercicio 33");
}


function ejercicio34() {
    alert("Tablas se mostraran por consola, favor de verificar")
    for (let i = 1; i <= 9; i++) {
        console.log(`Tabla de multiplicar del ${i}:`);           
        for (let j = 1; j <= 12; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }    
        console.log(); // 
    }
    console.log("Ejercicio 34");
}


function ejercicio35() {
    let numeros = [];
for (let i = 0; i < 20; i++) {
    let numero = parseInt(prompt(`Ingrese el número ${i + 1}:`));
    numeros.push(numero);
}
let mayor = numeros[0];
let menor = numeros[0];
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
        mayor = numeros[i];
    }
    if (numeros[i] < menor) {
        menor = numeros[i];
    }
}
alert(`El número mayor es: ${mayor}\nEl número menor es: ${menor}`);
    console.log("Ejercicio 35");
}


function ejercicio36() {
    let n = parseInt(prompt("Ingrese el número de términos de la serie de Fibonacci que desea calcular:"));
    if (!isNaN(n)) {
        function fibonacci(n) {
            let fib = [0, 1];            
            for (let i = 2; i < n; i++) {
                fib[i] = fib[i - 1] + fib[i - 2];
            }            
            return fib.slice(0, n); 
        }    
        let resultado = fibonacci(n);
        let resultadoString = resultado.join(', '); 
        alert(`Los primeros ${n} términos de la serie de Fibonacci son: ${resultadoString}`);
    } else {
        alert("Por favor, ingrese un número válido.");
    }
    console.log("Ejercicio 36");
}


function ejercicio37() {
    function euclides(a, b) {
        // Aplicamos el algoritmo de Euclides
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }        
        return a;
    }    
    let num1 = parseInt(prompt("Ingrese el primer número:"));
    let num2 = parseInt(prompt("Ingrese el segundo número:"));    
    if (!isNaN(num1) && !isNaN(num2)) {
        let mcd = euclides(num1, num2);
        alert(`El M.C.D de ${num1} y ${num2} es: ${mcd}`);
    } else {
        alert("Por favor, ingrese números válidos.");
    }
    console.log("Ejercicio 37");
}

function ejercicio38() {
    let numero = parseInt(prompt("Ingrese un número para verificar si es perfecto:"));
if (!isNaN(numero) && numero > 0) {
    let sumaDivisores = 0;
    for (let i = 1; i <= numero / 2; i++) {
        if (numero % i === 0) {
            sumaDivisores += i;
        }
    }
    if (sumaDivisores === numero) {
        alert(`${numero} es un número perfecto.`);
    } else {
        alert(`${numero} no es un número perfecto.`);
    }
} else {
    alert("Por favor, ingrese un número válido y positivo.");
}
    console.log("Ejercicio 38");
}


function ejercicio39() {
    let n = parseInt(prompt("Ingrese la cantidad de términos para calcular la aproximación de Pi:"));
let pi = 0;
let signo = 1;

if (!isNaN(n) && n > 0) {
    for (let i = 0; i < n; i++) {
        pi += signo * (4 / (2 * i + 1));
        signo *= -1;
    }
    alert(`La aproximación de Pi con ${n} términos es: ${pi}`);
} else {
    alert("Por favor, ingrese un número válido y positivo.");
}
    console.log("Ejercicio 39");
}


function ejercicio40() {
let n = parseInt(prompt("Ingrese la cantidad de términos para calcular la aproximación de Pi:"));
let pi = 3;
let signo = 1;
let denominador = 2;
if (!isNaN(n) && n > 0) {
    for (let i = 0; i < n; i++) {
        pi += signo * (4 / (denominador * (denominador + 1) * (denominador + 2)));
        signo *= -1;
        denominador += 2;
    }
    alert(`La aproximación de Pi con ${n} términos es: ${pi}`);
} else {
    alert("Por favor, ingrese un número válido y positivo.");
}
    console.log("Ejercicio 40");
}