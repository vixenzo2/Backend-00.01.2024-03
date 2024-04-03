// Hacer un algoritmo en Pseint que lea una letra y diga si es una vocal.

Proceso DeterminarVocal
    Definir letra Como Caracter
    
    Escribir "Ingrese una letra:"
    Leer letra
    
    // Verificar si la letra es una vocal
    Si letra = "a" O letra = "e" O letra = "i" O letra = "o" O letra = "u" Entonces
        Escribir "La letra ingresada es una vocal."
    Sino
        Escribir "La letra ingresada no es una vocal."
    FinSi
    
FinProceso
