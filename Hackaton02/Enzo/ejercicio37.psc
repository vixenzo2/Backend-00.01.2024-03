Algoritmo Pregunta37
    Definir a, b, resto como Entero
	
    Escribir "Ingrese el primer número:"
    Leer a
    Escribir "Ingrese el segundo número:"
    Leer b
	
    Mientras b <> 0 Hacer
        resto = a % b
        a = b
        b = resto
    Fin Mientras
	
    Escribir "El MCD de los números ingresados es:", a
FinAlgoritmo
