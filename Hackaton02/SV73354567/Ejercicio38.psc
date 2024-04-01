Proceso Ejercicio38
	//Hacer un algoritmo en Pseint que nos permita saber si un numero es un numero perfecto.
	Escribir "Ingrese un numero:"
    Leer numero	
    // Inicializar la suma de divisores en 0
    sumaDivisores <- 0	
    // Calcular la suma de los divisores del numero
    Para divisor <- 1 Hasta numero - 1 Hacer
        Si numero MOD divisor = 0 Entonces
            sumaDivisores <- sumaDivisores + divisor
        Fin Si
    Fin Para	
    // Verificar si el numero es perfecto
    Si sumaDivisores = numero Entonces
        Escribir numero, " es un numero perfecto."
    Sino
        Escribir numero, " no es un numero perfecto."
    Fin Si
FinProceso
