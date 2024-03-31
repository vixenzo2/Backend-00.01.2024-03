SubProceso res <- CalcularFactorial ( numero )
	Si numero == 0 Entonces
		res = 1
		
	SiNo
		res = numero * CalcularFactorial(numero - 1)
	FinSi
Fin SubProceso

Algoritmo Pregunta25

	Definir numero, factorial como Entero

	Escribir "Ingrese un número para calcular su factorial:"
	Leer numero

	factorial = CalcularFactorial(numero)

	Escribir "El factorial de ", numero, " es: ", factorial

FinAlgoritmo