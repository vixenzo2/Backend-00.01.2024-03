Proceso Cociente
	
	// 26.	Hacer un algoritmo en Pseint para calcular el resto y cociente por medio de restas sucesivas.
	
	Escribir "**************************"
	Escribir "*    Resto y cociente    *"  
	Escribir "**************************"
	
	Escribir "Ingrese el numero dividendo"
	Leer nDividendo
	Escribir "Ingrese el numero divisor"
	Leer nDivisor
	
	nResto = nDividendo
	nCociente = 0	
	Mientras nResto>=nDivisor Hacer
		nResto = nResto - nDivisor
		nCociente = nCociente + 1
	Fin Mientras
	
	Escribir "El cociente es: ", nCociente
	Escribir "El resto es: ", nResto
	
FinProceso
