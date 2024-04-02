Proceso Ejercicio36
	//Hacer un algoritmo en Pseint para calcular la serie de Fibonacc.
	Escribir "Ingrese el numero de terminos de la serie de Fibonacci:"
    Leer numero	
    a <- 0
    b <- 1	
    Escribir "Los", numero, "primeros terminos de la serie de Fibonacci son:"
    Escribir a	
    Para i <- 2 Hasta numero Hacer
        Escribir b
        c <- a + b
        a <- b
        b <- c
    Fin Para
FinProceso
