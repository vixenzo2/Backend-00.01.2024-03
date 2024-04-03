Algoritmo Ejercicio22
	//Hacer un algoritmo en Pseint para calcular la suma de los n primeros números.
    Definir n, suma, i Como Entero;
    suma <- 0;
    Escribir "Ingrese el valor de n:";
    Leer n;
    Para i<-1 Hasta n Con Paso 1 Hacer
        suma <- suma + i;
    FinPara
    Escribir "La suma de los primeros ", n, " números es ", suma;
FinAlgoritmo
