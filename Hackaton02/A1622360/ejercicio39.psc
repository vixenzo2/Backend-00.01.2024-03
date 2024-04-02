Proceso ejercicio39
	definir terminos , i Como entero
	definir picito , denominador Como Real
	
	Escribir  " Ingrese el numero de terminos para aproximar : " 
	leer terminos
	picito = 0
	denominador = 1
	
	para i = 1 hasta terminos hacer 
		
		si i mod 2 = 0 entonces
			picito = picito - 1 /denominador
		SiNo
			picito = picito + 1 / denominador
		FinSi
		
		denominador  = denominador + 2
	FinPara
	
	picito = 4 * picito
	escribir " la aproximacion de pi con : " , terminos , " es :  " , picito
FinProceso
