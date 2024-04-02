//Hacer un algoritmo en Pseint que permita calcular el factorial de un número.
Proceso CalcularFactorial
    Definir numero, factorial Como Entero
	
    Escribir "Ingrese un numero para calcular su factorial:"
    Leer numero
	
    Si numero < 0 Entonces
        Escribir "El factorial no esta definido para n�meros negativos."
    Sino
        factorial <- 1
        Para i Desde 1 Hasta numero Con Paso 1
            factorial <- factorial * i
        Fin Para
        Escribir "El factorial de", numero, "es:", factorial
    Fin Si
FinProceso
