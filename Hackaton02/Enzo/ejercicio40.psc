Algoritmo Pregunta40
    Definir n como Entero
    Definir pi_aproximado como Real
	
    Escribir "Ingrese el número de términos para la aproximación:"
    Leer n
	
    pi_aproximado = 3.0
	
    Para i = 1 Hasta n Hacer
        numerador = 4 * ((-1) ^ (i + 1))
        denominador = (2 * i) * ((2 * i) + 1) * ((2 * i) + 2)
        pi_aproximado = pi_aproximado + (numerador / denominador)
    Fin Para
	
    Escribir "Aproximación de pí con ", n, " términos de la serie de Nilakantha: ", pi_aproximado
FinAlgoritmo