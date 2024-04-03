Proceso Ejercicio25
	Escribir "Ingrese un numero para calcular su factorial:"
    Leer numero	
    Si numero < 0 Entonces
        Escribir "El factorial no esta definido para numeros negativos."
    Sino
        factorial <- 1
        i <- 1
        Mientras i <= numero Hacer
            factorial <- factorial * i
            i <- i + 1
        Fin Mientras
        Escribir "El factorial de ", numero, " es: ", factorial
    Fin Si
FinProceso
