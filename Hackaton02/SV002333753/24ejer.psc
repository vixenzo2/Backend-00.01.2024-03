//Hacer un algoritmo en Pseint para realizar la suma de todos los números pares hasta el 1000.

Algoritmo SumaDeParesHasta1000
    
    Definir suma, i Como Entero;
    
    suma <- 0;
    
    Para i Desde 2 Hasta 1000 Con Paso 2 Hacer
        suma <- suma + i;
    FinPara
    
    Escribir "La suma de los números pares hasta 1000 es ", suma;
FinAlgoritmo
