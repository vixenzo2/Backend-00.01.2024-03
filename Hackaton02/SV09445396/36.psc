Proceso Serie_Fibonacci
	
	// 36.	Hacer un algoritmo en Pseint para calcular la serie de Fibonacc.
	
	Escribir "***********************************"
	Escribir "*        Serie Fibonacci          *"  
	Escribir "***********************************"
	
	Escribir "Ingresar un numero:"
	Leer nNumero
	
	nNum1 = 0
	nNum2 = 1
	
	Para n=1 Hasta nNumero Con Paso 1 Hacer
		Escribir nNum2
		nSuma = nNum1 + nNum2
		nNum1 = nNum2
		nNum2 = nSuma
	Fin Para
	
FinProceso
