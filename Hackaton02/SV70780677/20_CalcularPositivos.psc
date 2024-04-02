//20. Hacer un algoritmo en Pseint que que lea 4 n�meros enteros positivos y verifique y realice las siguientes operaciones:
//
//    �Cu�ntos n�meros son Pares?
//
//    �Cu�l es el mayor de todos?
//
//    Si el tercero es par, calcular el cuadrado del segundo.
//
//    Si el primero es menor que el cuarto, calcular la media de los 4 n�meros.
//
//    Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. 
//    Si cumple se cumple la segunda condici�n, calcular la suma de los 4 n�meros.

Proceso CalcularNumerosPositivos_21
	Definir contadorpares Como entero
	Dimension numeros[4]
	Escribir "Ingrese 4 numeros enteros: "
	leer numeros[1]
	leer numeros[2]
	leer numeros[3]
	leer numeros[4]
	contadorpares = 0
	Para i Desde 1 Hasta 4 Con Paso 1
		Si numeros[i] Mod 2 == 0 entonces 
			contadorpares <- contadorpares+ 1
		FinSi
	Fin Para	
	Escribir "�Cu�ntos n�meros son Pares? ", contadorpares
	
	
    mayor <- numeros[1]
    Si numeros[2] > mayor Entonces 
        mayor <- numeros[2] 
    FinSi
    Si numeros[3] > mayor Entonces 
        mayor <- numeros[3] 
    FinSi
    Si numeros[4] > mayor Entonces 
        mayor <- numeros[4] 
    FinSi
    Escribir "�Cu�l es el mayor de todos? ", mayor
    
    Si numeros[3] Mod 2 = 0 Entonces
        Escribir "El cuadrado del segundo n�mero es: ", numeros[2] * numeros[2]
    FinSi
    
    Si numeros[1] < numeros[4] Entonces
        media <- (numeros[1] + numeros[2] + numeros[3] + numeros[4]) / 4
        Escribir "La media de los cuatro n�meros es: ", media
    FinSi
    
    Si numeros[2] > numeros[3] Y numeros[3] >= 50 Y numeros[3] <= 700 Entonces
        suma <- numeros[1] + numeros[2] + numeros[3] + numeros[4]
        Escribir "La suma de los cuatro n�meros es: ", suma
    FinSi
FinProceso









