Proceso ejercicio39
	
	Definir terminos, i Como Entero
	Definir picito, denominador Como Real
	
	Escribir "Ingrese el numero de terminos para aproximar:"
	Leer terminos
	
	picito = 0
	denominador = 1
	
	Para i = 1 Hasta terminos hacer
		si i Mod 2 = 0 Entonces
			picito = picito - 1 / denominador
		SiNo
			picito = picito + 1 / denominador
		FinSi
		
		denominador = denominador + 2
	FinPara
	
	picito = 4 * picito
	
	Escribir "La aproximacion de pi con: ", terminos, " es: ", picito
	
FinProceso
