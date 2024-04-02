Algoritmo Pregunta36
    Definir n, i, a, b, temp como Entero
	
    Escribir "Ingrese el número de términos de la serie de Fibonacci:"
    Leer n
	
    a = 0
    b = 1
	
    Escribir "Serie de Fibonacci hasta el término ", n, ":"
	
    Para i = 1 Hasta n Hacer
        Escribir a
        temp = a
        a = b
        b = temp + b
    Fin Para
FinAlgoritmo