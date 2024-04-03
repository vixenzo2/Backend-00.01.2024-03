Algoritmo Ejercicio11
    //Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.
    Definir a, b, c Como Entero;
    Escribir "Ingrese el primer número:";
    Leer a;
    Escribir "Ingrese el segundo número:";
    Leer b;
    Escribir "Ingrese el tercer número:";
    Leer c;
	
    Si a > b Y a > c Entonces
        Escribir "El mayor es: ", a;
    Sino
        Si b > a Y b > c Entonces
            Escribir "El mayor es: ", b;
        Sino
            Si c > a Y c > b Entonces
                Escribir "El mayor es: ", c;
            Sino
                Escribir "No hay un único número mayor.";
            FinSi
        FinSi
    FinSi
FinAlgoritmo
