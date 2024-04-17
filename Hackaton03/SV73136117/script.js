function ejecutar(nroEjercicio) {
    ejecutar = true
    switch (nroEjercicio) {
        case 1:
            if (ejecutar == true) {
                let x = prompt("Introduce un número de 3 dígitos");
                let numero = parseInt(x)
                if (numero > 99 && numero < 1000) {
                    alert("El número tiene 3 dígitos");
                } else {
                    alert("El número no tiene 3 dígitos");
                }

                break;
            }
        case 2:
            if (ejecutar == true) {
                let numero = parseInt(prompt("Introduce un número"));
                if (numero < 0) {
                    alert("El número es negativo")
                } else {
                    alert("El número no es negativo")
                }

                break;
            }
        case 3:
            if (ejecutar == true) {
                let numero = parseInt(prompt("Introduce un número"));
                if (numero % 10 == 4) {
                    alert("El número termina en 4")
                } else {
                    alert("El número no termina en 4")
                }

                break;
            }
        case 4:
            if (ejecutar == true) {
                let numero1 = parseInt(prompt("Introduce el número 1"));
                let numero2 = parseInt(prompt("Introduce el número 2"));
                let numero3 = parseInt(prompt("Introduce el número 3"));

                let numeros = [numero1, numero2, numero3];

                numeros.sort()
                alert(`Estos son los números ordenados de menor a mayor ${numeros.join(" - ")}`);

                break;
            }
        case 5:
            if (ejecutar == true) {
                let precioZapatos = 80;
                let descuento;
                let total;
                let numeroDeZapatos = parseInt(prompt("Introduce el número de zapatos que desea comprar"));
                total = precioZapatos * numeroDeZapatos;
                if (numeroDeZapatos > 0 && numeroDeZapatos < 20) {
                    descuento = (total * 10) / 100;
                    alert("Accedes a un 10% de descuento");
                    alert(`Precio total a pagar ${total - descuento}`);
                } else if (numeroDeZapatos >= 20 && numeroDeZapatos < 30) {
                    descuento = (total * 20) / 100;
                    alert("Accedes a un 20% de descuento");
                    alert(`Precio total a pagar ${total - descuento}`);
                } else if (numeroDeZapatos >= 30) {
                    descuento = (total * 40) / 100;
                    alert("Accedes a un 40% de descuento");
                    alert(`Precio total a pagar ${total - descuento}`);
                }

                break;
            }
        case 6:
            if (ejecutar == true) {
                let numeroDeHoras = parseInt(prompt("Introduza el número de horas trabajadas"));
                let pago = 20;
                let pagoExtra = 25;
                if (numeroDeHoras <= 0 || isNaN(numeroDeHoras)) {
                    alert("Error, ingrese un valor correcto")
                } else if (numeroDeHoras <= 40) {
                    alert("El pago semanal será de: " + numeroDeHoras * pago);
                } else if (numeroDeHoras > 40) {
                    alert("El pago semanal será de: " + numeroDeHoras * pagoExtra);
                }

                break;
            }
        case 7:
            if (ejecutar == true) {
                let tipoMembresia = prompt("Ingrese su tipo de membresía: A - B - C").toLowerCase();


                switch (tipoMembresia) {
                    case "a":
                        alert(`Membresia A: Usted accede a un descuento del 10% del precio total`);
                        break;

                    case "b":
                        alert(`Membresia B: Usted accede a un descuento del 15% del precio total`);
                        break;

                    case "c":
                        alert(`Membresia C: Usted accede a un descuento del 20% del precio total`);
                        break;
                    default:
                        alert(`Error, tipo de membresia no válida`);
                        break;
                }
                break;
            }
        case 8:
            if (ejecutar == true) {
                let nota1 = parseInt(prompt("Ingrese la nota 1"));
                let nota2 = parseInt(prompt("Ingrese la nota 2"));
                let nota3 = parseInt(prompt("Ingrese la nota 3"));

                if (nota1 < 0 || nota2 < 0 || nota3 < 0) {
                    alert("Error, ingrese un valor válido");
                } else if ((nota1 + nota2 + nota3) / 3 < 10) {
                    alert("El estudiante a desaprobado");
                } else {
                    alert("El estudiante aprobó");
                }
                break;
            }
        case 9:
            if (ejecutar == true) {
                let salarioActual = parseInt(prompt("Ingrese su salario actual"));
                let salarioNuevo;
                let aumento;

                if (salarioActual < 2000) {
                    aumento = (10 * salarioActual) / 100
                    salarioNuevo = salarioActual + aumento;
                    alert("Tu sueldo ahore es de " + salarioNuevo);
                } else if (salarioActual > 2000) {
                    aumento = (5 * salarioActual) / 100
                    salarioNuevo = salarioActual + aumento;
                    alert("Tu sueldo ahore es de " + salarioNuevo);
                }
                break;
            }
        case 10:
            if (ejecutar == true) {
                let numero = parseInt(prompt("Introduce un número"));
                if (numero % 2 == 0) {
                    alert(`El número ${numero} es par`);
                } else {
                    alert(`El número ${numero} es no es par`);
                }
                break;
            }
        case 11:
            if (ejecutar == true) {
                let numero1 = parseInt(prompt("Introduce el número 1"));
                let numero2 = parseInt(prompt("Introduce el número 2"));
                let numero3 = parseInt(prompt("Introduce el número 3"));
                let numeros = [numero1, numero2, numero3];
                numeros.sort()
                let numeroMayor = numeros[numeros.length - 1];

                alert(`El número mayor es ${numeroMayor}`);
                break;
            }
        case 12:
            if (ejecutar == true) {
                let numero1 = parseInt(prompt("Introduce el número 1"));
                let numero2 = parseInt(prompt("Introduce el número 2"));

                if (numero1 > numero2) {
                    alert(`El número ${numero1} es mayor que ${numero2}`);
                } else if (numero2 > numero1) {
                    alert(`El número ${numero2} es mayor que ${numero1}`);
                } else {
                    alert("Ambos números son iguales")
                }
                break;
            }
        case 13:
            if (ejecutar == true) {
                let letra = prompt("Introduce una letra").toLowerCase();

                switch (letra) {
                    case "a":
                        alert("a es una vocal");
                        break;
                    case "e":
                        alert("a es una vocal");
                        break;

                    case "i":
                        alert("a es una vocal");
                        break;

                    case "o":
                        alert("a es una vocal");
                        break;

                    case "u":
                        alert("a es una vocal");
                        break;

                    default:
                        alert("No es una vocal");
                        break;
                }
            }
        case 14:
            if (ejecutar == true) {
                let numero = parseInt(prompt("Ingresar numero:"));

                divisor = 1;
                contador = 0;

                if (numero < 1 || numero > 10) {
                    alert("Numero ingresado incorrecto.");
                } else {
                    while (divisor <= numero) {
                        if (numero % divisor == 0) {
                            contador = contador + 1
                        }
                        divisor = divisor + 1
                    }
                    if (contador == 2) {
                        respuesta = " es primo"
                    } else {
                        respuesta = " no es primo"
                    }
                    alert(`El número ${numero}${respuesta}`);
                }
                break;
            }
        case 15:
            if (ejecutar == true) {
                let numero = parseInt(prompt("Ingrese un número"))
                let operación = parseInt(prompt("¿Que conversión desea realizar? 1: centimetros a pulgadas | 2: libras a kilos"));
                if (operación == 1) {
                    alert(numero * 0.393701);
                } else if (operación == 2) {
                    alert(numero * 0.453592);
                }
                break;
            }
        case 16:
            if (ejecutar == true) {
                let numero = parseInt(prompt("Ingrese un número y se le devolverá el día que corresponde"));
                switch (numero) {
                    case 1:
                        alert("El día correspondiente es Lunes");
                        break;
                    case 2:
                        alert("El día correspondiente es Martes");
                        break;

                    case 3:
                        alert("El día correspondiente es Miercoles");
                        break;

                    case 4:
                        alert("El día correspondiente es Jueves");
                        break;

                    case 5:
                        alert("El día correspondiente es Viernes");
                        break;

                    case 6:
                        alert("El día correspondiente es Sabado");
                        break;

                    case 7:
                        alert("El día correspondiente es Domingo");
                        break;

                    default:
                        alert("Ingrese un número desde 1 al 7");
                        break;
                }
                break;
            }
        case 17:
            if (ejecutar == true) {
                let hora = parseInt(prompt("Ingrese la hora"));
                let minuto = parseInt(prompt("Ingrese el minuto"));
                let segundo = parseInt(prompt("Ingrese el segundo"));

                setInterval(muestraHora, 1000)

                function muestraHora() {

                    if (hora >= 0 && hora < 24) {
                        if (hora == 59) {
                            hora = 0;
                        }
                        if (minuto < 60) {
                            if (minuto == 59) {
                                minuto = 0;
                                hora++
                            }
                            if (segundo < 60) {
                                segundo++
                                if (segundo == 59) {
                                    segundo = 0;
                                    minuto++;
                                }
                            }
                            console.log(`La hora es: ${hora}:${minuto}:${segundo}`);
                        }
                    }
                }
                break;
            }
        case 18:
            if (ejecutar == true) {
                let cantidadCd = parseInt(prompt("Ingrese la cantidad de CD's que desea comprar"));

                if (cantidadCd <= 9) {
                    alert(`El monto a pagar es de: ${cantidadCd * 10}`);
                    alert(`El vendedor se lleva una ganancia de: ${(cantidadCd * 10) * 8.25 / 100}`);
                } else if (cantidadCd >= 10 && cantidadCd <= 99) {
                    alert(`El monto a pagar es de: ${cantidadCd * 8}`);
                    alert(`El vendedor se lleva una ganancia de: ${(cantidadCd * 8) * 8.25 / 100}`);
                } else if (cantidadCd >= 100 && cantidadCd <= 499) {
                    alert(`El monto a pagar es de: ${cantidadCd * 7}`);
                    alert(`El vendedor se lleva una ganancia de: ${(cantidadCd * 7) * 8.25 / 100}`);
                } else if (cantidadCd >= 500) {
                    alert(`El monto a pagar es de: ${cantidadCd * 6}`);
                    alert(`El vendedor se lleva una ganancia de: ${(cantidadCd * 6) * 8.25 / 100}`);
                }

                break;
            }
        case 19:
            if (ejecutar == true) {
                let id = parseInt(prompt("Ingrese el identificador del trabajador donde 1:cajero (56$/día) y 2:servidor (64$/día), 3:preparador de mezclas (80$/día), 4:mantenimiento (48$/día)"));
                let diasTrabajados = parseInt(prompt("Ingrese el número de días trabajados"));
                let respuesta;
                if (id < 1 || id > 4) {
                    alert("Identificador NO válido");
                    break;
                }
                if (diasTrabajados < 1 || id > 6) {
                    alert("Número de días NO válido")
                    break;
                }
                switch (id) {
                    case 1:
                        respuesta = 56 * diasTrabajados;
                        break;
                    case 2:
                        respuesta = 64 * diasTrabajados;
                        break;
                    case 3:
                        respuesta = 80 * diasTrabajados;
                        break;
                    case 4:
                        respuesta = 48 * diasTrabajados;
                        break;
                }
                alert(`Debe pagarle al trabajador un monto total de: ${respuesta}`);
                break;
            }
        case 20:
            if (ejecutar == true) {
                let numero1 = parseInt(prompt("Introduce el número 1"));
                let numero2 = parseInt(prompt("Introduce el número 2"));
                let numero3 = parseInt(prompt("Introduce el número 3"));
                let numero4 = parseInt(prompt("Introduce el número 4"));
                let listaNumeros = [numero1, numero2, numero3, numero4];
                let numerosPares = [];
                let media = 0;
                let suma = 0;
                listaNumeros.map(devuelvePares);

                function devuelvePares(value, index, array) {
                    if (value % 2 == 0) {
                        numerosPares.push(value);
                    }
                }
                alert(`Los números pares son ${numerosPares.length}`);

                if (listaNumeros[2] % 2 == 0) {
                    alert(`El cuadrado del segundo número es: ${listaNumeros[1] * listaNumeros[1]}`);
                }
                if (listaNumeros[0] < listaNumeros[3]) {
                    for (let i = 0; i < listaNumeros.length; i++) {
                        media = media + listaNumeros[i]
                    }
                    alert(`La media es: ${media / listaNumeros.length}`);
                }
                if (listaNumeros[1] > listaNumeros[2]) {
                    if (listaNumeros[2] >= 50 && listaNumeros[2] <= 700) {
                        for (let index = 0; index < listaNumeros.length; index++) {
                            suma = suma + listaNumeros[index];
                        }
                        alert(`La suma de los 4 números es: ${suma}`);
                    }
                }
                listaNumeros.sort();
                alert(`El número mayor es: ${listaNumeros[listaNumeros.length - 1]}`);

                break;
            }
        case 21:
            if (ejecutar == true) {
                let numero = parseInt(prompt("Ingrese un número para calcular su factorial"));
                let factorial = 1;

                if (numero >= 0) {
                    for (let i = 1; i <= numero; i++) {
                        factorial = factorial * i;
                    }
                    alert(`El factorial de ${numero} es ${factorial}`);
                } else {
                    alert("No se puede calcular el factorial de un número negativo");
                }
                break;
            }
        case 22:
            if (ejecutar == true) {
                let numero = parseInt(prompt("Ingrese el valor de n"));
                let contador = 0;

                for (let i = 0; i <= numero; i++) {
                    contador = contador + i;
                }
                alert("La suma de n es igual a: " + contador);
                break;
            }
        case 23:
            if (ejecutar == true) {
                let numero = parseInt(prompt("Ingrese el valor de n"));
                let sumaImpares = 0;

                for (let i = 1; i <= numero; i++) {
                    if (i % 2 != 0) {
                        sumaImpares = sumaImpares + i;
                    }

                }
                alert(`La suma de los números imapares menores o iguales a ${numero} es: ${sumaImpares}`);
                break;
            }

        case 24:
            if (ejecutar == true) {
                let sumaPares = 0;
                for (let index = 1; index <= 1000; index++) {
                    if (index % 2 == 0) {
                        sumaPares = sumaPares + index;;
                    }
                }
                alert(`La suma de todos números pares hasta 1000 es: ${sumaPares}`);
                break;
            }

        case 25:
            if (ejecutar == true) {
                let numero = parseInt(prompt("Ingrese un número para calcular su factorial"));
                let factorial = 1;
                let contador = 0;

                while (contador < numero) {
                    contador++;
                    factorial = factorial * contador;
                }
                alert(`El factorial de ${numero} es ${factorial}`);
                break;
            }

        case 26:
            if (ejecutar == true) {
                let dividendo = parseInt(prompt("Ingrese el dividendo"));
                let divisor = parseInt(prompt("Ingrese el divisor"));

                let cociente = 0
                let residuo = dividendo;

                while (residuo >= divisor) {
                    console.log(residuo + " - " + divisor);
                    residuo = residuo - divisor;
                    cociente = cociente + 1;
                    console.log("Cociente: " + cociente)
                }

                console.log("El cociente es: " + cociente);
                console.log("El residuo es: " + residuo);
                break;
            }

        case 27:
            if (ejecutar == true) {
                let numeros = [];
                let suma = 0;
                do {
                    var numero = parseInt(prompt("Ingrese un número, un número negativo detendra el programa"));
                    numeros.push(numero);
                } while (numero > 0);
                numeros.pop();

                for (let index = 0; index < numeros.length; index++) {
                    suma = suma + numeros[index];
                }
                alert(`La media de los números es: ${suma / numeros.length}`);
                break;
            }

        case 28:
            if (ejecutar == true) {
                let i = 1;
                let suma = 0;
                do {
                    suma = suma + i
                    i++
                } while (i <= 100);
                alert(`La suma de los primeros números hasta cien es: ${suma}`);
                break;
            }

        case 29:
            if (ejecutar == true) {
                let i = 1;
                let suma = 0;
                while (i <= 100) {
                    suma = suma + i;
                    i++
                }
                alert(`La suma de los primeros números hasta cien es: ${suma}`);
                break;
            }

        case 30:
            if (ejecutar == true) {
                let suma = 0;
                for (let index = 1; index <= 100; index++) {
                    suma = suma + index
                }
                alert(`La suma de los primeros números hasta cien es: ${suma}`);
                break;
            }

        case 31:
            if (ejecutar == true) {
                let listaNumeros = [];
                let listaPares = [];
                let listaImpares = [];
                let media1 = 0;
                let media2 = 0;
                for (let i = 0; i < 10; i++) {
                    listaNumeros[i] = parseInt(prompt("Ingrese el número"));
                }
                listaNumeros.map(separaNumeros);
                function separaNumeros(value, index, array) {
                    if (value % 2 == 0) {
                        listaPares.push(value)
                    } else if (value % 2 != 0) {
                        listaImpares.push(value)
                    }
                }
                for (let index = 0; index < listaImpares.length; index++) {
                    media1 = media1 + listaImpares[index];
                }
                alert(`La media de los números impares introducidos es: ${media1 / listaImpares.length}`);
                for (let index = 0; index < listaPares.length; index++) {
                    media2 = media2 + listaPares[index];
                }
                alert(`La media de los números impares introducidos es: ${media2 / listaPares.length}`);
                break;
            }
        // case 32:
        //     if (ejecutar == true) {
        //         break;
        //     }
        case 33:
            if (ejecutar == true) {
                let continuar = prompt("¿Desea continuar con el programa? SI/NO").toLowerCase();
                switch (continuar) {
                    case "no":
                        alert("Cancelando el programa...")
                        break;

                    case "si":
                        alert("Continuando con el programa...")
                        break;

                    default:
                        do {
                            alert("Comando no válido, vuelva a intentarlo")
                            continuar = prompt("¿Desea continuar con el programa? SI/NO").toLowerCase();
                        } while (continuar != "si" || continuar != "no");
                        alert("Continuando con el programa...")
                        break;
                }
                break;
            }
        case 34:
            if (ejecutar == true) {
                let multiplicando;
                let multiplicador;

                for (multiplicando = 1; multiplicando <= 9; multiplicando++) {
                    console.log(`Tabla de multiplicar de ${multiplicando}`);
                    for (multiplicador = 1; multiplicador <= 10; multiplicador++) {
                        console.log(`${multiplicando} x ${multiplicador} = ${multiplicando * multiplicador}`);
                    }
                    console.log(" ")
                }

                break;
            }
        case 35:
            if (ejecutar == true) {
                let numeros = [];
                contador = 1;
                for (let index = 0; index < 20; index++) {
                    numeros[index] = parseInt(prompt("Ingrese el número " + contador));
                    contador++;
                }
                function compara(a, b) {
                    return a - b;
                }
                numeros.sort(compara);

                alert(`El número menor es ${numeros[0]} y el número mayor es ${numeros[19]}`);
                break;
            }
        case 36:
            if (ejecutar == true) {
                let n = parseInt(prompt("Escribir el número de terminos"));
                console.log("Los primeros " + n + " terminos de la serie fibonacci son: ");

                fib1 = 0;
                fib2 = 1;

                for (let i = 1; i <= n; i++) {
                    console.log(fib1);
                    fib_actual = fib1 + fib2;

                    fib1 = fib2;
                    fib2 = fib_actual;
                }
                break;
            }
        case 37:
            if (ejecutar == true) {
                let numero1 = parseInt(prompt("Ingrese el primer número: "));
                let numero2 = parseInt(prompt("Ingrese el segundo número: "));

                while (numero2 != 0) {
                    residuo = numero1 % numero2;
                    numero1 = numero2;
                    numero2 = residuo;
                }

                alert("El MCD de los numeros son: " + numero1);
                break;
            }
        case 38:
            if (ejecutar == true) {
                let numero = parseInt(prompt("Ingrese un número para verificar si es perfecto:"));
                if (!isNaN(numero) && numero > 0) {
                    let suma_divisores = 0;

                    for (let i = 1; i <= numero / 2; i++) {
                        if (numero % i == 0) {
                            suma_divisores = suma_divisores + i;
                        }
                    }

                    if (suma_divisores == numero) {
                        alert(`${numero} es un número perfecto.`);
                    } else {
                        alert(`${numero} no es un número perfecto.`);
                    }
                }
                break;
            }
        case 39:
            if (ejecutar == true) {
                let terminos = parseInt(prompt("Ingrese el numero de terminos para aproximar:"));
                let picito = 0;
                let denominador = 1;

                for (let i = 1; i <= terminos; i++) {
                    if (i % 2 == 0) {
                        picito = picito - 1 / denominador;
                    } else {
                        picito = picito + 1 / denominador;
                    }
                    denominador = denominador + 2;
                }

                picito = 4 * picito;
                alert("La aproximacion de pi con: " + terminos + " es: " + picito);
                break;
            }
        case 40:
            if (ejecutar == true) {
                let terminos = parseInt(prompt("Ingrese los terminos: "));
                let picito = 3;

                let denominador1 = 2;
                let denominador2 = 3;
                let denominador3 = 4;

                for (let i = 1; i <= terminos; i++) {
                    if (i % 2 == 0) {
                        picito = picito - 4 / (denominador1 * denominador2 * denominador3);
                    } else {
                        picito = picito + 4 / (denominador1 * denominador2 * denominador3);
                    }

                    denominador1 = denominador1 + 1;
                    denominador2 = denominador2 + 1;
                    denominador3 = denominador3 + 1;
                }

                alert("La aproximacion de pi con: " + terminos + " terminos es: " + picito);
                break;
            }
    }

}