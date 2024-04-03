Proceso ejercicio36
	//Hacer un algoritmo en Pseint para calcular la serie de Fibonacc.
	
	definir n, i , fib1, fib2, fib_actual Como Real
	
	Escribir "Ingrese el numero de terminos"
	Leer n
	
	Escribir "Los primeros, ", n "terminos de la serie fibonacci son: "
	
	fib1 = 0
	fib2 = 1
	
	Para i = 1 hasta n Hacer
		Escribir fib1
		fib_actual = fib1 + fib2
		
		fib1 = fib2
		fib2 = fib_actual
	FinPara
	
FinProceso
