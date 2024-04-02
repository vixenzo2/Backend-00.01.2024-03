//Hacer un algoritmo en Pseint para conseguir el M.C.D de un número por medio del algoritmo de Euclides.
Proceso CalcularMDC
    Definir a, b, resto, mcd como Entero
    Escribir "Ingrese el primer numero: "
    Leer a
    Escribir "Ingrese el segundo numero: "
    Leer b
    Mientras b <> 0 Hacer
        resto <- a % b
        a <- b
        b <- resto
    FinMientras
    mcd <- a
    Escribir "El maximo comun divisor (MCD) es: ", mcd
FinProceso
