
//Hacer un algoritmo en Pseint que diga si un número es par o impar.

Proceso ParOImpar
    Definir numero Como Entero
    
    Escribir "Ingrese un número:"
    Leer numero
    
    // Determinar si el número es par o impar
    Si numero MOD 2 = 0 Entonces
        Escribir "El número ingresado es par."
    Sino
        Escribir "El número ingresado es impar."
    FinSi
    
FinProceso
