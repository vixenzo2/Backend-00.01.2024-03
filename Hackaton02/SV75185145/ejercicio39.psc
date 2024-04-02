Proceso ejercicio39
	//39. Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:
    //Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...
	
	suma = 0
	resta = 0
	Para n <- 1 Hasta 1000000 Con Paso 4 Hacer
		suma = suma + (4/n)
	Fin Para
	
	Para m <- 3 Hasta 1000000 Con Paso 4 Hacer
		resta = resta - (4/m)
	Fin Para
	Escribir "el valor de Pi es: " suma + resta
FinProceso
