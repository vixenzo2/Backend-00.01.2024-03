Algoritmo Ejercicio14
	//hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.
    Definir numero Como Entero;
    Escribir "Ingrese un número entero positivo entre 1 y 10, excluyendo el 9:";
    Leer numero;
	
    Si numero < 1 o numero > 10 o numero == 9 Entonces
        Escribir "Número no válido.";
    Sino
        Si numero == 2 o numero == 3 o numero == 5 o numero == 7 Entonces
            Escribir "El número es primo.";
        Sino
            Escribir "El número no es primo.";
        FinSi
    FinSi
FinAlgoritmo

