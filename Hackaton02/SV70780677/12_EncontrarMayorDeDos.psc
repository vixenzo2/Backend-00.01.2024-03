// Hacer un algoritmo en Pseint que lea dos números y diga cuál es el mayor.

Proceso EncontrarMayorDeDos
    Definir num1, num2, mayor Como Entero
    
    Escribir "Ingrese el primer número:"
    Leer num1
    
    Escribir "Ingrese el segundo número:"
    Leer num2
    
    // Comparar los dos números para determinar el mayor
    Si num1 > num2 Entonces
        mayor <- num1
    Sino
        mayor <- num2
    FinSi
    
    // Mostrar el mayor número
    Escribir "El mayor número es:", mayor
    
FinProceso
