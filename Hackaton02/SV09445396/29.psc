Proceso Suma_Primeros_Mientras
	
	// 29.	Hacer un algoritmo en Pseint para calcular la suma de los primeros cien números con un ciclo mientras.
	
	Escribir "*************************"
	Escribir "*    Suma de numeros    *"  
	Escribir "*************************"
	
	nNumero = 100
	nCont = 0
	nSuma = 0
	
	Mientras nCont<nNumero Hacer
		nCont = nCont + 1
		nSuma = nSuma + nCont
	Fin Mientras
	
	Escribir "La suma total de numeros es: ", nSuma
	
FinProceso
