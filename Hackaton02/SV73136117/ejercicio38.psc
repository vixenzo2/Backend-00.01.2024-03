Proceso ejercicio38
	//Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto.
	
	Definir numerito, suma_divisores, divisor Como Entero
	
	Escribir "Ingrese un numero para verificar"
	Leer numerito
	
	suma_divisores = 0
	
	Para divisor = 1 Hasta numerito - 1 Hacer
		si numerito Mod divisor = 0 Entonces
			suma_divisores = suma_divisores + divisor
		FinSi
	FinPara
	
	si suma_divisores = numerito Entonces
		Escribir "El numero es perfecto"
	SiNo
		Escribir "El numero no es perfecto"
	FinSi
	
FinProceso
