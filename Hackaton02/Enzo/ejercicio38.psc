Algoritmo Pregunta38
    Definir numero, suma_divisores, divisor como Entero
	
    Escribir "Ingrese un número:"
    Leer numero
	
    suma_divisores = 0
	
    Para divisor = 1 Hasta numero/2 Hacer
        Si numero % divisor = 0 Entonces
            suma_divisores = suma_divisores + divisor
        Fin Si
    Fin Para
	
    Si suma_divisores = numero Entonces
        Escribir "El número ", numero, " es un número perfecto."
    Sino
        Escribir "El número ", numero, " no es un número perfecto."
    Fin Si
FinAlgoritmo