Proceso Suma_Numeros
	
	// 22.	Hacer un algoritmo en Pseint para calcular la suma de los n primeros números.
	
	Escribir "************************"
	Escribir "*     Suma numeros     *"  
	Escribir "************************"
	
	Escribir "Ingresar un numero:"
	Leer nNum
	
	nCont = 1
	nSuma = 0
	
	Mientras nCont<=nNum Hacer
		nSuma = nSuma + nCont
		nCont = nCont + 1
	Fin Mientras
	
	Escribir "La suma total es: ", nSuma
	
FinProceso
