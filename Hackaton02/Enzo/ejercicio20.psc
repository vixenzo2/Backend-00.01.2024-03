Algoritmo Pregunt20
    Definir num1, num2, num3, num4 como Entero
    Definir pares, mayor, suma como Entero
    Definir media, cuadrado_segundo como Real
	
    Escribir "Ingrese el primer número:"
    Leer num1
    Escribir "Ingrese el segundo número:"
    Leer num2
    Escribir "Ingrese el tercer número:"
    Leer num3
    Escribir "Ingrese el cuarto número:"
    Leer num4
	
    pares = 0
	
    Si num1 % 2 = 0 Entonces
        pares = pares + 1
    Fin Si
    Si num2 % 2 = 0 Entonces
        pares = pares + 1
    Fin Si
    Si num3 % 2 = 0 Entonces
        pares = pares + 1
    Fin Si
    Si num4 % 2 = 0 Entonces
        pares = pares + 1
    Fin Si
	
    mayor = num1
    Si num2 > mayor Entonces
        mayor = num2
    Fin Si
    Si num3 > mayor Entonces
        mayor = num3
    Fin Si
    Si num4 > mayor Entonces
        mayor = num4
    Fin Si
	
    Si num3 % 2 = 0 Entonces
        cuadrado_segundo = num2 * num2
    Fin Si
	
    Si num1 < num4 Entonces
        media = (num1 + num2 + num3 + num4) / 4
    Fin Si
	
    Si num2 > num3 y num3 >= 50 y num3 <= 700 Entonces
        suma = num1 + num2 + num3 + num4
    Fin Si
	
    Escribir "Cantidad de números pares: ", pares
    Escribir "El mayor de todos los números es: ", mayor
    Si num3 % 2 = 0 Entonces
        Escribir "El cuadrado del segundo número es:", cuadrado_segundo
    Fin Si
    Si num1 < num4 Entonces
        Escribir "La media de los números es:", media
    Fin Si
    Si num2 > num3 y num3 >= 50 y num3 <= 700 Entonces
        Escribir "La suma de los números es:", suma
    Fin Si
FinAlgoritmo