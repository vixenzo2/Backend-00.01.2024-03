Proceso PI_Serie_Nilakantha
	
	// 40.	Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Nilakantha.
	//	 	La formula que se debe aplicar es:
	// 		Pi = = 3 + 4/(234) - 4/(456) + 4/(678) - 4/(8910) + 4/(101112) - 4/(121314) ...
	
	Escribir "***********************************"
	Escribir "*   Numero PI: Serie Nilakantha   *"  
	Escribir "***********************************"
	
	Escribir "Ingresar numero de veces:"
	Leer nNumero
		
	nPI = 0
	n1 = 2
	n2 = 3
	n3 = 4
	n4 = 5
	n5 = 6
				
	Para p = 1 Hasta nNumero Con Paso 1 Hacer
		nPI = nPI + (4/(n1 * n2 * n3)) - (4/(n3 * n4 * n5))
		n1 = n1 + 4
		n2 = n2 + 4
		n3 = n3 + 4
		n4 = n4 + 4
		n5 = n5 + 4
	FinPara
	Escribir "El numero pi es: ",(3 + nPI)
		
FinProceso
