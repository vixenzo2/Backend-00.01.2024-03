//Hacer un algoritmo en Pseint para calcular la suma de los primeros cien números con un ciclo mientras.
Proceso CalcularSumaCienNumeros
	contador <- 0
	suma <- 0
	Mientras contador <= 100 Hacer
		suma = suma + contador 
		contador <- contador + 1		
	FinMientras
	Escribir "La suma es: ", suma
FinProceso
