Proceso Suma_Pares
	
	Escribir "**************************************"
	Escribir "*  Suma numeros pares hasta el 1000  *"  
	Escribir "**************************************"
	
	nTope = 1000
	nCont = 1
	nSuma = 0
	
	Mientras nCont<=nTope Hacer
		si nCont%2==0
			nSuma = nSuma + nCont
		FinSi
		nCont = nCont + 1
	Fin Mientras
	
	Escribir "La suma de todos los numeros pares es: ", nSuma
	
FinProceso
