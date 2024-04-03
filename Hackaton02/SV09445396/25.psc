Proceso Factorial
	
	// 25.	Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta.
	
	Escribir "*********************"
	Escribir "*     Factorial     *"  
	Escribir "*********************"
	
	Escribir "Ingresar un numero:"
	Leer nNum
	
	nFact = 1
	nCont = 0
	
	Repetir 
		nCont= nCont + 1
		nFact=nFact*nCont
	Hasta Que nCont>=nNum
	
	Escribir  "El factorial de ",nNum, " es: ",nFact
	
FinProceso
