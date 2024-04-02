Proceso ejercicio21
	//21. Hacer un algoritmo en Pseint que permita calcular el factorial de un número.
	Escribir "digite el numero para calcular su factorial"
	leer numero1
	factorial = 1
	contador = 1
	si numero1 < 0 Entonces
		Escribir "no se puede calcular el factorial de un numero negativo"
	sino si numero1 = 0 Entonces
			Escribir "el factorial de 0 es 1"
		sino
			Repetir
				factorial = factorial * contador
				contador = contador + 1
			Hasta Que contador = numero1 + 1
		FinSi
		fin si
Escribir "el factorial de " numero1 " es " factorial
FinProceso
