Proceso Pregunta14
	//	14. Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y determine si es un número primo.
	Definir numerito, divisor, contador Como Entero
	Escribir "Ingresar un numero del 1 al 10"
	Leer numerito
	Si numerito <= 10 y numerito >= 1	Entonces
		definir esPrimo Como Logico
		esPrimo = Verdadero 
		Si numerito = 1 Entonces
			esPrimo = Falso
		SiNo
			Para divisor = 2 hasta numerito/2 Con Paso 1 Hacer
				Si numerito MOD divisor = 0 Entonces
					esPrimo = Falso
				FinSi
			FinPara
		FinSi
		Si esPrimo Entonces
			Escribir "El numero escrito es PRIMO: ", numerito
		SiNo
			Escribir "El numero no es PRIMO: ", numerito
		FinSi
	SiNo
		Escribir "El numero ingresado esta fuera del limite permitido"
	FinSi
FinProceso
