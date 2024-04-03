//Hacer un algoritmo en Pseint para calcular la suma de los primeros cien números con un ciclo repetir.
Proceso CalcularSumaCienNumeros
	contador <- 0
	suma <- 0
	Repetir
		suma = suma + contador 
		contador <- contador + 1
	Hasta Que contador == 101
	Escribir "La suma es: ", suma
FinProceso
