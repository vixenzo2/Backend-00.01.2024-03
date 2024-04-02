Algoritmo Pregunta35
    Definir numero, mayor, menor como Entero
	
    Escribir "Ingrese veinte números:"
	
    Leer numero
    mayor = numero
    menor = numero
	
    Para i = 2 Hasta 20 Hacer
        Leer numero
        Si numero > mayor Entonces
            mayor = numero
        Fin Si
        Si numero < menor Entonces
            menor = numero
        Fin Si
    Fin Para
	
    Escribir "El número mayor es:", mayor
    Escribir "El número menor es:", menor
FinAlgoritmo