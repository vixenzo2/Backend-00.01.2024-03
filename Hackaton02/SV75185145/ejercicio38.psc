Proceso ejercicio38
	//Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto.
	Escribir "Ingrese un número:"
    Leer numero1
	
    suma_divisores = 0
	
    Para divisor desde 1 hasta (numero1/2) hacer
        Si numero1 % divisor == 0 entonces
            suma_divisores = suma_divisores + divisor
        Fin Si
    Fin Para
	
    Si suma_divisores == numero1 entonces
        Escribir numero1, " es un número perfecto."
    Sino
        Escribir numero1, " no es un número perfecto."
    Fin Si
	
FinProceso
