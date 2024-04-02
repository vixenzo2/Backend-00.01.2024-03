Algoritmo Pregunta23
    Definir n, suma, numero como Entero
	
    Escribir "Ingrese un número entero positivo:"
    Leer n
	
    suma = 0
    Para numero = 1 Hasta n Hacer
        Si numero % 2 <> 0 Entonces
            suma = suma + numero
        Fin Si
    Fin Para
	
    Escribir "La suma de los números impares menores o iguales a ", n, " es: ", suma
FinAlgoritmo
