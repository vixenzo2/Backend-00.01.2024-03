Proceso Ejercicio35
	//Hacer un algoritmo en Pseint que nos permita saber cual es el numero mayor y menor, se debe ingresar solo veinte numeros.
	mayor <- -9999 
    menor <- 9999 	
    Para i <- 1 Hasta 20 Hacer
        Escribir "Ingrese el numero ", i, ":"
        Leer numero		
        Si numero > mayor Entonces
            mayor <- numero
        Fin Si		
        Si numero < menor Entonces
            menor <- numero
        Fin Si
    Fin Para	
    Escribir "El numero mayor es:", mayor
    Escribir "El numero menor es:", menor
FinProceso
