Algoritmo Ejercicio23
	//Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n
    Definir n, suma, i Como Entero;
    suma <- 0;
    Escribir "Ingrese el valor de n:";
    Leer n;
    Para i<-1 Hasta n Con Paso 1 Hacer
        Si i % 2 <> 0 Entonces
            suma <- suma + i;
        FinSi
    FinPara
    Escribir "La suma de los números impares hasta ", n, " es ", suma;
FinAlgoritmo
