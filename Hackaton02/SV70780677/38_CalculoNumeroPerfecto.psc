//Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto.
Proceso CalculoNumeroPerfecto
    Definir numero, sumaDivisores, divisor como Entero
    Escribir "Ingrese un numero: "
    Leer numero
    sumaDivisores <- 0
    Para divisor <- 1 Hasta numero - 1 Hacer
        Si numero % divisor = 0 Entonces
            sumaDivisores <- sumaDivisores + divisor
        FinSi
    FinPara
    Si sumaDivisores = numero Entonces
        Escribir numero, " es un numero perfecto."
    Sino
        Escribir numero, " no es un numero perfecto."
    FinSi	
FinProceso