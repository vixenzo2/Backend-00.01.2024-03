//Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n.
Proceso SumaImparesMenores
    Definir n, i, suma como Entero
    Escribir "Ingrese un numero n:"
    Leer n
    suma <- 0
    Para i <- 1 Hasta n Con Paso 2
        suma <- suma + i
    FinPara
    Escribir "La suma de los numeros impares menores o iguales a ", n, " es ", suma
FinProceso