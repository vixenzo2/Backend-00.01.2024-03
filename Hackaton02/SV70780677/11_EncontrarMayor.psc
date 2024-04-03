// Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.
Proceso EncontrarMayor
    Definir num1, num2, num3, mayor Como Entero
    
    Escribir "Ingrese el primer número:"
    Leer num1
    
    Escribir "Ingrese el segundo número:"
    Leer num2
    
    Escribir "Ingrese el tercer número:"
    Leer num3
    
    // Asignar el primer número como el mayor inicialmente
    mayor <- num1
    
    // Comparar con el segundo número
    Si num2 > mayor Entonces
        mayor <- num2
    FinSi
    
    // Comparar con el tercer número
    Si num3 > mayor Entonces
        mayor <- num3
    FinSi
    
    // Mostrar el mayor número
    Escribir "El mayor número es:", mayor
    
FinProceso
