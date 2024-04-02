Proceso Numero_PI
	
	// 39.	Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz.
	//		La formula que se debe aplicar es:
	//		Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...
	
	Escribir "*******************************************"
	Escribir "*    Numero PI: Serie Gregory-Leibniz     *"  
	Escribir "*******************************************"
	
	Escribir "Ingresar numero de veces:"
	Leer nNumero
	
	nFlag = 0	
	nPI = 0
	
	Para n=1 Hasta nNumero*2 Con Paso 2 Hacer
		si nFlag==0
			nPI = nPI + (4/n)
			nFlag=1
			// Escribir "+(",4,"/",n,")"
		SiNo
			nPI = nPI - (4/n)
			nFlag=0
			// Escribir "-(",4,"/",n,")"
		FinSi
		
	Fin Para
	Escribir "La aproximacion del numero PI es: ", nPi
		
FinProceso
