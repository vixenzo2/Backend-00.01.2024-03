Algoritmo Ejercicio1
	//Hacer un algoritmo en Pseint que lea un número por el teclado y determinar si tiene tres dígitos.
	Definir numero Como Entero;
    Escribir "Ingrese un número:";
    Leer numero;
    Si Abs(numero) >= 100 Y Abs(numero) <= 999 Entonces
        Escribir "El número tiene tres dígitos.";
    Sino
        Escribir "El número no tiene tres dígitos.";
    FinSi
FinAlgoritmo
