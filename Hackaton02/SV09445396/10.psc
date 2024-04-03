Proceso Par_Impar
	
	//10.	Hacer un algoritmo en Pseint que diga si un número es par o impar.
	
	Escribir "*****************************"
	Escribir "*  El numero es par o impar *"  
	Escribir "*****************************"
	
	Escribir "Ingresar numero:"
	Leer nNumero
	
	SI nNumero % 2 = 0
		cMsg = "Par"
	SiNo
		cMsg = "Impar"
	FinSi
	
	Escribir "El numero ingresado es: ", cMsg
	
FinProceso
