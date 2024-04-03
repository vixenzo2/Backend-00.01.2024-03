Proceso Suma_10Numeros
	
	// 31.	Hacer un algoritmo en Pseint parar calcular la media de los números pares e impares, sólo se ingresará diez números.
	
	Escribir "****************************"
	Escribir "*    Suma de 10 numeros    *"  
	Escribir "****************************"
	
	nNumero = 0
	nSumPar = 0
	nSumImp = 0
    nConPar = 0	
    nConImp = 0	
	nCont = 0
	
	Repetir
		nCont = nCont + 1
		nSuma = nSuma + nNum	
		
		Escribir "Ingrese un numero ",nCont, ":"
		Leer nNumero
		
		si nNumero%2==0
			nSumPar = nSumPar + nNumero
			nConPar = nConPar + 1
		SiNo
			nSumImp = nSumImp + nNumero
			nConImp = nConImp + 1
		FinSi
		
	Hasta Que nCont>=10
	
	nPromPar = nSumPar / nConPar
	nPromImp = nSumImp / nConImp
	Escribir "La media de los numeros pares es: ", nPromPar
	Escribir "La media de los numeros impares es: ", nPromImp
	
FinProceso

