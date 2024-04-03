Proceso Factorial
	
	//21.	Hacer un algoritmo en Pseint que permita calcular el factorial de un número.
	
	Escribir "*********************"
	Escribir "*     Factorial     *"  
	Escribir "*********************"
	
	Escribir "Ingresar un numero:"
	Leer nNum
	
	nFact = 1
	nCont = 0
	Mientras nCont<nNum Hacer
		nCont= nCont + 1
		nFact=nFact*nCont
	Fin Mientras
	
	Escribir  "El factorial de ",nNum, " es: ",nFact
	
FinProceso