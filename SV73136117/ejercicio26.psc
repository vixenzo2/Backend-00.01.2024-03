Proceso ejercicio26
	// Hacer un algoritmo en Pseint para calcular el resto y cociente por medio de restas sucesivas.
	
	Definir dividendo, divisor, cociente, residuo como Entero
	
	Escribir "Ingrese el dividendo"
	Leer dividendo
	Escribir "Ingrese el divisor"
	Leer divisor
	
	cociente = 0
	residuo = dividendo
	
	Mientras residuo >= divisor Hacer
		Escribir residuo, ' - ', divisor
		residuo = residuo - divisor
		cociente = cociente + 1
		Escribir "Cociente: ", cociente
	FinMientras
	
	Escribir "El cociente es: ", cociente
	Escribir "El residuo es: ", residuo
FinProceso
