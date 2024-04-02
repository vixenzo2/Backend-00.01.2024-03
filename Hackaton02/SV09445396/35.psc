Proceso Mayor_Menor
	
	// 35.	Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor,
	// 		se debe ingresar sólo veinte números. i
	
	Escribir "*******************************************"
	Escribir "*    Numeros mayor y menor de 20 numeros  *"  
	Escribir "*******************************************"
	
	nNumero = 0
	nCont = 0
		
	Repetir
		nCont = nCont + 1
		
		Escribir "Ingrese un numero ",nCont, ":"
		Leer nNumero
		
		si nCont=1
			nMayor = nNumero
			nMenor = nNumero
		FinSi
		
		si nNumero>nMayor
			nMayor = nNumero
		FinSi
		si nNumero<nMenor
			nMenor = nNumero
		FinSi
		
	Hasta Que nCont>=20
	
	Escribir "El numero mayor es: ", nMayor
	Escribir "El numero menor es: ", nMenor
	
FinProceso
