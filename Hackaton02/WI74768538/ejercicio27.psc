Proceso ejercicio27
	Definir numero, suma, contador Como Real
	
    suma <- 0
    contador <- 0
	
    Escribir "Ingrese una lista de números positivos. Ingrese un número negativo para terminar."
	
    // Leer números y acumular la suma hasta que se ingrese un número negativo
    Repetir
        Escribir "Ingrese un número:"
        Leer numero
        Si numero >= 0 Entonces
            suma <- suma + numero
            contador <- contador + 1
        FinSi
    Hasta Que numero < 0
	
    // Calcular la media
    Si contador > 0 Entonces
        media <- suma / contador
        Escribir "La media de los números ingresados es: ", media
    Sino
        Escribir "No se ingresaron números válidos para calcular la media."
    FinSi
	
FinProceso
