//Hacer un algoritmo en Pseint que lea un n�mero por el teclado y determinar si tiene tres d�gitos.
Proceso DeterminarTresDigitos
    Definir numero Como Cadena
    Definir long Como Entero
    
    Escribir "Ingrese un n�mero:"
    Leer numero
    
    long <- longitud(numero)
    
    Si long = 3 Entonces
        Escribir "El n�mero ingresado tiene tres d�gitos."
    Sino
        Escribir "El n�mero ingresado no tiene tres d�gitos."
    FinSi
FinProceso
