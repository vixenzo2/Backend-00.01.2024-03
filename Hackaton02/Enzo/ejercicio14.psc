Algoritmo Pregunta14
    Definir numero, i, conteo como Entero
    Definir es_primo como Logico
	
    Escribir "Ingrese un número entero positivo del 1 al 9:"
    Leer numero
	
    Si numero < 1 o numero > 9 Entonces
        Escribir "El número ingresado está fuera del rango permitido."
    Sino
        Si numero = 1 Entonces
            Escribir "El número 1 no es un número primo."
        Sino
            es_primo <- Verdadero
            conteo <- 0
			
            Para i <- 2 Hasta numero - 1 Hacer
                Si numero % i = 0 Entonces
                    es_primo <- Falso
                Fin Si
            Fin Para
			
            Si es_primo Entonces
                Escribir "El número ", numero, " es un número primo."
            Sino
                Escribir "El número ", numero, " no es un número primo."
            Fin Si
        Fin Si
    Fin Si
FinAlgoritmo