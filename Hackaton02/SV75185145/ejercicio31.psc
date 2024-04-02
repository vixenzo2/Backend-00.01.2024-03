Proceso ejercicio31
	pares = 0
    suma_pares = 0
    impares = 0
    suma_impares = 0
	
    Para i desde 1 hasta 10 hacer
        Escribir "Ingrese el número ", i, ":"
        Leer numero
		
        Si numero % 2 == 0 entonces
            pares = pares + 1
            suma_pares = suma_pares + numero
        Sino
            impares = impares + 1
            suma_impares = suma_impares + numero
        Fin Si
    Fin Para
	
    Si pares > 0 entonces
        media_pares = suma_pares / pares
        Escribir "La media de los números pares es:", media_pares
    Sino
        Escribir "No se ingresaron números pares."
    Fin Si
	
    Si impares > 0 entonces
        media_impares = suma_impares / impares
        Escribir "La media de los números impares es:", media_impares
    Sino
        Escribir "No se ingresaron números impares."
    Fin Si
FinProceso
