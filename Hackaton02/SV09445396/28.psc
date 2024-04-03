Proceso Suma_Primeros_Repetir
	
	// 28.	Hacer un algoritmo en Pseint para calcular la suma de los primeros cien números con un ciclo repetir.
	
	Escribir "*************************"
	Escribir "*    Suma de numeros    *"  
	Escribir "*************************"
	
	nNumero = 100
	nCont = 0
	nSuma = 0
	
	Repetir
		nCont = nCont + 1
		nSuma = nSuma + nCont
	Hasta Que nCont>=nNumero
	
	Escribir "La suma total de numeros es: ", nSuma
	
FinProceso
