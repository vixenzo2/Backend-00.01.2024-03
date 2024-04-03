Proceso Suma_Impares
	
	// 23.	Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n
	Escribir "**************************"
	Escribir "*  Suma numeros impares  *"  
	Escribir "**************************"
	
	Escribir "Ingresar un numero:"
	Leer nNum
	
	nCont = 1
	nSuma = 0
	
	Mientras nCont<=nNum Hacer
		si nCont%2<>0
			nSuma = nSuma + nCont
		FinSi
		nCont = nCont + 1
	Fin Mientras
	
	Escribir "La suma de numeros impares es: ", nSuma
	
FinProceso
