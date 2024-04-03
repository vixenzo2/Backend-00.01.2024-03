Proceso ejercicio40
	//40. Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es:
    //Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...
	suma = 0
	resta = 0
	Para n <- 2 Hasta 1000000 Con Paso 4 Hacer
		suma = suma + 4/ (n * (n+1) * (n+2))
	Fin Para
	
	Para m <- 4 Hasta 100000 Con Paso 4 Hacer
		resta = resta - 4/ (m * (m+1) * (m+2))
	Fin Para
	Escribir "el valor de pi es: " 3 + suma + resta
	
FinProceso
