Proceso sin_titulo
	
	// 27.	Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de números positivos,
	// se debe acabar el programa al ingresar un número negativo.
	
	Escribir "***************************************************"
	Escribir "*    Promedio de numeros                          *"  
	Escribir "*    (Para salir ingresar un valor en negativo)   *"
	Escribir "***************************************************"
	
	nCont = -1
	nSuma = 0
	nNum  = 0
	
	Repetir
		nCont = nCont + 1
		nSuma = nSuma + nNum	
		
		Escribir "Ingrese un numero:"
		Leer nNum
		
	Hasta Que nNum<0
	
	nPromedio = nSuma / nCont
	Escribir "La media de los numeros ingresados es: ", nPromedio
	
FinProceso
