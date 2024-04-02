//Hacer un algoritmo en Pseint para calcular la serie de Fibonacci.
Proceso CalcularSerieFibonacci
	Escribir "Ingrese la cantidad de resultados que requiere: "
	leer n
	Dimension resultado[n]
	Para i <- 1 Hasta n Hacer
		si i > 2 Entonces
			resultado[i] = resultado[i-1] + resultado[i-2]
		SiNo
			resultado[i] = i - 1 
		FinSi
		Escribir resultado[i] 
	FinPara
FinProceso
