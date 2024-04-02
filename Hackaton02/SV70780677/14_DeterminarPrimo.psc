// Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.
Proceso DeterminarPrimo
    Definir num Como Entero
    Definir contador Como Entero
    Definir i Como Entero
    
    Escribir "Ingrese un número entre 1 y 10:"
    Leer num
    
    contador <- 0
    
    Para i <- 1 Hasta num Con Paso 1 Hacer
        Si num Mod i = 0 Entonces
            contador <- contador + 1
        FinSi
    FinPara
    
    Si contador = 2 Entonces
        Escribir "El número ingresado es primo."
    Sino
        Escribir "El número ingresado no es primo."
    FinSi
    
FinProceso