// Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.

function isNumber(number) {
    let isNumber = !isNaN(number);
    if (!isNumber) {
        alert("Lo que ingreso no es un numero");
        return false;
    }
    return true;
}

function ejercicio1() {
    const numero = Number.parseInt(prompt("Escribe tu numero"));
    if (!isNumber(numero)) return;

    if (numero > 99 && numero < 1000) {
        alert("tiene 3 digitos");
    }
    if (numero <= 99) {
        alert("tiene menos de 3 digitos");
    } else {
        alert("tiene mas de 3 digitos");
    }
}

function ejercicio2() {
    const numero = Number.parseInt(prompt("Escribe tu numero"));
    if (!isNumber(numero)) return;

    if (numero < 0) {
        alert("El numero es negativo");
    } else {
        alert("El numero es positivo");
    }
}

function ejercicio3() {
    const numero = Number.parseInt(prompt("Escribe tu numero"));
    if (!isNumber(numero)) return;

    if (numero % 10 == 4) {
        alert("El numero termina en 4");
    } else {
        alert("El numero no termina en 4");
    }
}

function ejercicio4() {
    const numero1 = Number.parseInt(prompt("Escribe tu primer numero"));
    if (!isNumber(numero1)) return;

    const numero2 = Number.parseInt(prompt("Escribe tu segundo numero"));
    if (!isNumber(numero2)) return;

    const numero3 = Number.parseInt(prompt("Escribe tu tercer numero"));
    if (!isNumber(numero3)) return;

    const sortedArray = [numero1, numero2, numero3].sort();
    alert(`Los números ordenados de menor a mayor son ${sortedArray.join(", ")}`);
}

function ejercicio5() {
    const numero = Number.parseInt(prompt("Escribe tu numero"));
    if (!isNumber(numero)) return;

    const shoePrice = 80
    const disconuntA = shoePrice * 0.9;
    const disconuntB = shoePrice * 0.8;
    const disconuntC = shoePrice * 0.6;

    if (numero > 30) {
        alert(`El precio con descuento es ${disconuntC}`);
    } else if (numero >= 20 && numero <= 30) {
        alert(`El precio con descuento es ${disconuntB}`);
    } else if (numero < 20 && numero > 10) {
        alert(`El precio con descuento es ${disconuntA}`);
    } else {
        alert(`El precio sin descuento es ${shoePrice}`);
    }
}

function ejercicio6() {
    const numero = Number.parseInt(prompt("Escribe tu numero"));
    if (!isNumber(numero)) return;
    if (numero < 40) {
        let salary = numero * 20;
        alert(`Tu sueldo es ${salary}`);
    } else {
        let salary = (numero - 40) * 25 + 800;
        alert(`Tu sueldo es ${salary}`);
    }
}

function ejercicio7() {
    const membership = prompt("Cual es tu tipo de menbrecia (A, B o C)");
    const price = Number.parseInt(prompt("Cual es el precio del helado"));
    if (!isNumber(price)) return;

    if (membership === "A") {
        let discount = price * 0.1;
        alert(`Tu descuento es ${discount} y el precio con descuento es ${price - discount}`);
    } else if (membership === "B") {
        let discount = price * 0.15;
        alert(`Tu descuento es ${discount} y el precio con descuento es ${price - discount}`);
    } else if (membership === "C") {
        let discount = price * 0.2;
        alert(`Tu descuento es ${discount} y el precio con descuento es ${price - discount}`);
    } else {
        alert("Tipo de membresia no valido");
    }
}

function ejercicio8() {
    const minGrade = 11
    const number1 = Number.parseInt(prompt("Escribe tu primera nota:"));
    if (!isNumber(number1)) return;

    const number2 = Number.parseInt(prompt("Escribe tu segunda nota:"));
    if (!isNumber(number2)) return;

    const number3 = Number.parseInt(prompt("Escribe tu tercera nota:"));
    if (!isNumber(number3)) return;

    const average = (number1 + number2 + number3) / 3;
    if (average >= minGrade) {
        alert("Aprobaste");
    } else {
        alert("No aprobaste");
    }
}

function ejercicio9() {
    const number = Number.parseInt(prompt("Escribe tu numero"));
    if (!isNumber(number)) return;

    if (number < 2000) {
        let totalSalary = number * 1.1;
        alert(`Tu sueldo es ${totalSalary}`);
    } else {
        let totalSalary = number * 1.05;
        alert(`Tu sueldo es ${totalSalary}`);
    }
}

function ejercicio10() {
    const number = Number.parseInt(prompt("Escribe tu numero"));
    if (!isNumber(number)) return;

    if (number % 2 === 0) {
        alert("El numero es par");
    } else {
        alert("El numero es impar");
    }
}

function ejercicio11() {
    const number1 = Number.parseInt(prompt("Escribe tu primer numero"));
    if (!isNumber(number1)) return;

    const number2 = Number.parseInt(prompt("Escribe tu segundo numero"));
    if (!isNumber(number2)) return;

    const number3 = Number.parseInt(prompt("Escribe tu tercer numero"));
    if (!isNumber(number3)) return;

    const sortedArray = [number1, number2, number3].sort();
    alert(`el numero mayor es ${sortedArray[2]}`);
}

function ejercicio12() {
    const number1 = Number.parseInt(prompt("Escribe tu primer numero"));
    if (!isNumber(number1)) return;

    const number2 = Number.parseInt(prompt("Escribe tu segundo numero"));
    if (!isNumber(number2)) return;

    const sortedArray = [number1, number2].sort();
    alert(`el numero menor es ${sortedArray[1]}`);
}

function ejercicio13() {
    const vocals = 'aeiouAEIOU';
    const vocal = prompt("Escribe una vocal");
    if (vocals.includes(vocal)) {
        alert("Es vocal");
    } else {
        alert("No es vocal");
    }
}

function ejercicio14() {
    const number = Number.parseInt(prompt("Escribe tu numero"));
    if (!isNumber(number)) return;

    if (number < 2) {
        alert("El numero no es primo");
        return;
    }
    let isPrime = true;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        alert("El numero es primo");
    } else {
        alert("El numero no es primo");
    }
}

function ejercicio15() {
    const centimeters = Number.parseInt(prompt("Escribe tus centimetros"));
    if (!isNumber(centimeters)) return;

    const pounds = Number.parseInt(prompt("Escribe tus libras"));
    if (!isNumber(pounds)) return;

    const kilograms = pounds / 2.205;
    const inches = centimeters / 2.54;
    alert(`Tu numero en libras a kilogramos es ${kilograms} y numero en centimetros a pulgadas es ${inches}`);
}

function ejercicio16() {
    const number = Number.parseInt(prompt("Escribe tu numero"));
    if (!isNumber(number)) return;

    switch (number) {
        case 1:
            alert("Lunes");
            break;
        case 2:
            alert("Martes");
            break;
        case 3:
            alert("Miercoles");
            break;
        case 4:
            alert("Jueves");
            break;
        case 5:
            alert("Viernes");
            break;
        case 6:
            alert("Sabado");
            break;
        case 0:
            alert("Domingo");
            break;
        default:
            alert("No es un dia de la semana");
    }
}

function ejercicio17() {
    const hour = Number.parseInt(prompt("Escribe la hora"));
    if (!isNumber(hour)) return;

    if (hour < 0 || hour > 23) {
        alert("La hora no es valida");
        return;
    }

    const minutes = Number.parseInt(prompt("Escribe los minutos"));
    if (!isNumber(minutes)) return;

    if (minutes < 0 || minutes > 59) {
        alert("Los minutos no son validos");
        return;
    }

    const seconds = Number.parseInt(prompt("Escribe los segundos"));
    if (!isNumber(seconds)) return;

    if (seconds < 0 || seconds > 59) {
        alert("Los segundos no son validos");
        return;
    }

    const nextSecond = hour * 3600 + minutes * 60 + seconds + 1;

    let nextHour = Math.floor(nextSecond / 3600).toString().padStart(2, "0");
    const nextMinutes = Math.floor((nextSecond % 3600) / 60).toString().padStart(2, "0");
    const nextSeconds = (nextSecond % 60).toString().padStart(2, "0");

    if (nextHour === "24") {
        nextHour = "00";
    }

    alert(`La hora que viene es ${nextHour}:${nextMinutes}:${nextSeconds}`);
}

function ejercicio18() {
    const number = Number.parseInt(prompt("Escribe tu numero"));
    if (!isNumber(number)) return;

    let total = 0;
    if (number < 9) {
        let unitPrice = 10;
        total = number * unitPrice;
    } else if (number < 99) {
        let unitPrice = 8;
        total = number * unitPrice;
    } else if (number < 499) {
        let unitPrice = 7;
        total = number * unitPrice;
    } else {
        let unitPrice = 6;
        total = number * unitPrice;
    };

    const revenue = total * 0.0825;
    alert(`Tu costo es ${total} y la ganancia del vendedor es ${revenue}`);
}

function ejercicio19() {
    const identifier = prompt("Escribe tu identificador");
    if (!identifier.includes("1234")) {
        alert("El identificador no es correcto");
        return;
    }
    const days = Number.parseInt(prompt("Escribe los dias"));
    if (!isNumber(days)) return;

    if (days < 0 || days > 6) {
        alert("Los dias no son validos");
        return;
    }

    const id = Number.parseInt(identifier);
    if (id === 1) {
        alert("al cajero se le debe pagar $" + 56 * days);
    } else if (id === 2) {
        alert("al servidor se le debe pagar $" + 64 * days);
    } else if (id === 3) {
        alert("al preparador se le debe pagar $" + 80 * days);
    } else if (id === 4) {
        alert("a mantenimiento se le debe pagar $" + 48 * days);
    }
}

function ejercicio20() {
    const number1 = Number.parseInt(prompt("Escribe tu primer numero"));
    if (!isNumber(number1)) return;

    const number2 = Number.parseInt(prompt("Escribe tu segundo numero"));
    if (!isNumber(number2)) return;

    const number3 = Number.parseInt(prompt("Escribe tu tercer numero"));
    if (!isNumber(number3)) return;

    const number4 = Number.parseInt(prompt("Escribe tu cuarto numero"));
    if (!isNumber(number4)) return;

    // cuantos son pares?
    let pares = 0;
    if (number1 % 2 === 0) pares++;
    if (number2 % 2 === 0) pares++;
    if (number3 % 2 === 0) pares++;
    if (number4 % 2 === 0) pares++;

    alert(`hay ${pares} pares`);

    // cual es el mayor de todos
    let mayor = number1;
    if (number2 > mayor) mayor = number2;
    if (number3 > mayor) mayor = number3;
    if (number4 > mayor) mayor = number4;
    alert(`el mayor es ${mayor}`);

    // si el tercero es par calcular el cuadrado del segundo
    if (number3 % 2 === 0) {
        const squareNumber2 = number2 * number2;
        alert(`el cuadrado de ${number2} es ${squareNumber2}`);
    }

    // si el primero es menor que el cuarto, calcular la media de los 4 numeros
    if (number1 < number4) {
        const average = (number1 + number2 + number3 + number4) / 4;
        alert(`la media es ${average}`);
    }

    if (number2 > number3) {
        if (number3 > 50 && number3 < 700) {
            const squareNumber3 = number3 * number3;
            alert(`el cuadrado de ${number3} es ${squareNumber3}`);
        }
    }
}

function ejercicio21() {
    const number = Number.parseInt(prompt("Escribe tu numero"));
    if (!isNumber(number)) return;

    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    alert(`el factorial de ${number} es ${factorial}`);
}

function ejercicio22() {
    const number = Number.parseInt(prompt("Escribe tu numero"));
    if (!isNumber(number)) return;

    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;
    }
    alert(`la suma de los primeros ${number} es ${sum}`);
}

function ejercicio23() {
    const number = Number.parseInt(prompt("Escribe tu numero"));
    if (!isNumber(number)) return;

    // suma de numeros impares
    let sumaImpares = 0;
    for (let i = 1; i <= number; i += 2) {
        sumaImpares += i;
    }
    alert(`la suma de los primeros ${number} impares es ${sumaImpares}`);
}

function ejercicio24() {
    // suma de los primeros 1000 numeros pares
    let sumaPares = 0;
    for (let i = 2; i <= 1000; i += 2) {
        sumaPares += i;
    }
    alert(`la suma de los numeros pares hasta 1000 es ${sumaPares}`);
}

function ejercicio25() {
    const number = Number.parseInt(prompt("Escribe tu numero"));
    if (!isNumber(number)) return;

    const factorial = (n) => {
        if (n === 0) return 1;
        return n * factorial(n - 1);
    }
    alert(`el factorial de ${number} es ${factorial(number)}`);
}

function ejercicio26() {
    const number = Number.parseInt(prompt("Escribe tu numero"));
    if (!isNumber(number)) return;

    let cociente = 0;
    let resto = number;
    while (resto >= 10) {
        resto = resto - 10;
        cociente++;
    }
    alert(`el cociente de la division es ${cociente} y el resto es ${resto}`);
}

function ejercicio27() {
    let number = 0
    let suma = 0
    let i = 0
    while (number >= 0) {
        number = Number.parseInt(prompt("Escribe un número (para terminar escribe un numero negativo)"));
        if (number >= 0) {
            suma += number
            i++
        }
    }

    if (i === 0) {
        alert("No se han ingresado números")
        return
    }

    const average = suma / i
    alert(`la media es ${average}`)
}

function ejercicio28() {
    let final = 100
    let suma = 0
    do {
        suma += final
        final--
    } while (final > 0)
    alert(`la suma de los primeros 100 números es ${suma}`)
}

function ejercicio29() {
    let final = 100
    let suma = 0
    while (final > 0) {
        suma += final
        final--
    }
    alert(`la suma de los primeros 100 números es ${suma}`)
}

function ejercicio30() {
    let suma = 0
    for (let i = 1; i <= 100; i++) {
        suma += i
    }
    alert(`la suma de los primeros 100 números es ${suma}`)
}

function ejercicio31() {
    let n = 10
    let sumPares = 0
    let numPares = 0
    let sumImpares = 0
    let numImpares = 0
    while (n > 0) {
        let number = Number.parseInt(prompt("Escribe un número"));
        if (!isNumber(number)) return;
        if (number % 2 === 0) {
            sumPares += number
            numPares++
        } else {
            sumImpares += number
            numImpares++
        }
        n--
    }

    if (numPares === 0) {
        alert("No se han ingresado números pares")
    } else {
        const avgPares = sumPares / numPares
        alert(`el promedio de los números pares es ${avgPares}`)
    }

    if (numImpares === 0) {
        alert("No se han ingresado números impares")
    } else {
        const avgImpares = sumImpares / numImpares
        alert(`el promedio de los números impares es ${avgImpares}`)
    }
}

function ejercicio32() {
    alert("Ejercicio no resuelto por falta de datos")
}

function ejercicio33() {
    let continuar;
    while (continuar != "n" || continuar != "N") {
        continuar = prompt("¿Desea continuar? (s/n): ");
    }
}

function ejercicio34() {
    for (let i = 1; i <= 9; i++) {
        let line = "";
        for (let j = 1; j <= 10; j++) {
            line += i + " x " + j + " = " + (i * j) + "\n";
        }
        alert(line);
    }
}

function ejercicio35() {
    let greatNumber;
    let lessNumber;
    for (let i = 1; i <= 20; i++) {
        let number = Number.parseInt(prompt("Escribe un número"));
        if (!isNumber(number)) return;

        if (i === 1) {
            greatNumber = number;
            lessNumber = number;
        } else if (number > greatNumber) {
            greatNumber = number;
        } else if (number < lessNumber) {
            lessNumber = number;
        }
    }
    alert(`El número mayor es ${greatNumber} y el menor es ${lessNumber}`);
}

function ejercicio36() {
    // serie de fibonacci
    const number = Number.parseInt(prompt("Escribe un número"));
    if (!isNumber(number)) return;

    let a = 0, b = 1, temp;
    let fibArray = [];
    for (let i = 0; i < number; i++) {
        temp = a;
        a = b;
        b = temp + b;
        fibArray.push(a);
    }
    alert(`Esta es la serie de fibonacci de los ${number} primeros números: ${fibArray}`);
}

function ejercicio37() {
    let number1 = Number.parseInt(prompt("Escribe el primer número"));
    if (!isNumber(number1)) return;

    let number2 = Number.parseInt(prompt("Escribe el segundo número"));
    if (!isNumber(number2)) return;

    let a = number1
    let b = number2
    let resto
    while (b !== 0) {
        resto = a % b
        a = b
        b = resto
    }
    alert(`El MCD de los números ${number1} y ${number2} es ${a}`);
}

function ejercicio38() {
    let number = Number.parseInt(prompt("Escribe un número"));
    if (!isNumber(number)) return;

    let suma = 0
    for (let i = 1; i < number / 2; i++) {
        if (number % i === 0) {
            suma += i
        }
    }
    if (suma === number) {
        alert(`${number} es un número perfecto`)
    } else {
        alert(`${number} no es un número perfecto`)
    }
}

function ejercicio39() {
    const number = Number.parseInt(prompt("Escribe un número"));
    if (!isNumber(number)) return;

    let termino;
    let pi_aproximado = 0;
    let signo = 1;
    for (let i = 0; i < number; i++) {
        termino = 1 / (2 * i + 1) * signo
        pi_aproximado = pi_aproximado + termino
        signo = -signo
    }
    pi_aproximado = 4 * pi_aproximado
    alert(`La aproximación de pi con ${number} terminos es: ${pi_aproximado}`);
}

function ejercicio40() {
    const number = Number.parseInt(prompt("Escribe un número"));
    if (!isNumber(number)) return;

    let pi_aproximado = 3.0
    for (let i = 1; i <= number; i++) {
        numerador = 4 * ((-1) ** (i + 1))
        denominador = (2 * i) * ((2 * i) + 1) * ((2 * i) + 2)
        pi_aproximado = pi_aproximado + (numerador / denominador)
    }
    alert(`La aproximación de pi con ${number} terminos es: ${pi_aproximado}`);
}

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
            alert("Ejercicio no existe");
            break
    }

}