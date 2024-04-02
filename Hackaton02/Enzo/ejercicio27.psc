Algoritmo Pregunta27
    Definir suma, contador, numero como Real
	
    suma = 0
    contador = 0
	
    Escribir "Ingrese una lista de números positivos (Ingrese un número negativo para terminar):"
	
    Leer numero
	
    Mientras numero >= 0 Hacer
        suma = suma + numero
        contador = contador + 1
        Leer numero
    Fin Mientras
	
    Si contador > 0 Entonces
        media = suma / contador
        Escribir "La media de los números ingresados es: ", media
    Sino
        Escribir "No se han ingresado números positivos."
    Fin Si
FinAlgoritmo