Proceso ejercicio36
	//Hacer un algoritmo en Pseint para calcular la serie de Fibonacc.
	Escribir "Ingrese el número hasta el cual desea calcular la serie de Fibonacci:"
    Leer n
	
    a = 0
    b = 1
    Escribir a
    Escribir b
	
    Mientras (a + b) <= n hacer
        siguiente = a + b
        Escribir siguiente
        a = b
        b = siguiente
    Fin Mientras

FinProceso
