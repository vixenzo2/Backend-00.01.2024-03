Algoritmo Pregunta31
    Definir suma_pares, suma_impares, contador_pares, contador_impares, numero como Entero
    Definir media_pares, media_impares como Real
	
    suma_pares = 0
    suma_impares = 0
    contador_pares = 0
    contador_impares = 0
	
    Para i = 1 Hasta 10 Hacer
        Escribir "Ingrese el número ", i, ":"
        Leer numero
        Si numero % 2 = 0 Entonces
            suma_pares = suma_pares + numero
            contador_pares = contador_pares + 1
        Sino
            suma_impares = suma_impares + numero
            contador_impares = contador_impares + 1
        Fin Si
    Fin Para
	
    Si contador_pares > 0 Entonces
        media_pares = suma_pares / contador_pares
    Sino
        media_pares = 0
    Fin Si
	
    Si contador_impares > 0 Entonces
        media_impares = suma_impares / contador_impares
    Sino
        media_impares = 0
    Fin Si
	
    Escribir "La media de los números pares es: ", media_pares
    Escribir "La media de los números impares es: ", media_impares
FinAlgoritmo