Proceso Pregunta26
	
    Escribir "Ingrese el dividendo:"
    Leer dividendo
    Escribir "Ingrese el divisor:"
    Leer divisor
	
    cociente = 0
    resto = dividendo
	
    Mientras resto >= divisor Hacer
        resto = resto - divisor
        cociente = cociente + 1
    Fin Mientras
	
    Escribir "El cociente de la división es: ", cociente
    Escribir "El resto de la división es: ", resto
FinProceso