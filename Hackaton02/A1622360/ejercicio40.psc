Proceso ejercicio40
	definir terminos , i como entero 
	definir picito , denominador1 , denominador2 , denominador3 como real 
	escribir " ingrese el numero de terminos :"
	leer terminos 
	picito = 3
	denominador1 = 2
	denominador2 = 3
	denominador3 = 4
	para i = 1 hasta terminos hacer 
		si i mod 2 = 0 Entonces
			picito = picito - 4 /(denominador1 * denominador2 * denominador3)
		sino 
			picito = picito + 4 /(denominador1 * denominador2 * denominador3)
		FinSi
		denomirador1 = denomirador1+1
		denomirador2 = denomirador2+1
		denomirador3 = denomirador3+1
	FinPara
	escribir "la aproximacion de pi con : ", termianos, "termianos es " , picito
	
	
	
FinProceso
