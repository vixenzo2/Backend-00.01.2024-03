Proceso ejercicio40
	Definir terminos, i Como Entero
	Definir picito, denominador1, denominador2, denominador3 Como Real
	
	Escribir "Ingrese el numero de terminos: "
	Leer terminos
	
	picito = 3
	
	denominador1 = 2
	denominador2 = 3
	denominador3 = 4
	
	Para i = 1 Hasta terminos Hacer
		si i Mod 2 = 0 Entonces
			picito = picito - 4  / (denominador1 * denominador2 * denominador3)
		SiNo
			picito = picito + 4  / (denominador1 * denominador2 * denominador3)
		FinSi
		
		denominador1 = denominador1 + 1
		denominador2 = denominador2 + 1
		denominador3 = denominador3 + 1
	FinPara
	
	Escribir "La aproximacion de pi con: ", terminos, " terminos es: ", picito
FinProceso
