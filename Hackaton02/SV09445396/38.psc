Proceso Numero_Perfecto
	
	// 38.	Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto.
	
	Escribir "***********************************"
	Escribir "*       Numero perfecto          *"  
	Escribir "***********************************"
	
	Escribir "Ingresar un numero:"
	Leer nNumero
	
	nNum = 2
	
	Mientras nNum <= nNumero Hacer
		si nNumero % nNum == 0
			nPerfecto = nPerfecto + (nNumero/nNum)
		FinSi
		nNum = nNum + 1
	Fin Mientras
	
	si nPerfecto == nNumero
		Escribir "El numero ",nNumero, " es un numero perfecto"
	sino
		Escribir "El numero ",nNumero, " no es un numero perfecto"
	FinSi
	
FinProceso
