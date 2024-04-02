Proceso ejercicio25
	// 25.	Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta.
	Escribir "Ingresar un numero:"
	Leer numero1
	
	factorial = 1
	contador = 0
	
	Repetir 
		contador = contador + 1
		factorial = factorial * contador
	Hasta Que contador >= numero1
	
	Escribir  "El factorial de ",numero1, " es: ",factorial
	
FinProceso
