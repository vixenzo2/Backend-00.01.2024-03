Proceso ejercicio25
	//25. Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta
	Escribir "digite el numero para calcular su factorial"
	leer numero1
	factorial = 1
	si numero1 < 0 Entonces
		Escribir "no se puede calcular el factorial de un numero negativo"
	sino si numero1 = 0 Entonces
			Escribir "el factorial de 0 es 1"
		sino
			Para n <-1 Hasta numero1 Con Paso 1 Hacer
				factorial = factorial * n
			Fin Para
		FinSi
	fin si
	Escribir "el factorial de " numero1 " es " factorial
FinProceso
