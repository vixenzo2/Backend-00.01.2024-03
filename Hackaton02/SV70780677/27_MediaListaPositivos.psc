//Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de números positivos,
//se debe acabar el programa al ingresar un número negativo.
Proceso MediaListaPositivos
    Definir suma, contador, numero, media como Real
    suma <- 0
    contador <- 0
    Escribir "Ingrese números positivos (Recuerde el numero negativo va terminar el proceso): "
    Leer numero
    Mientras numero >= 0 Hacer
        suma <- suma + numero
        contador <- contador + 1
        Leer numero
    FinMientras
    Si contador > 0 Entonces
        media <- suma / contador
        Escribir "La media de los números positivos ingresados es: ", media
    Sino
        Escribir "No se ingresaron números positivos."
    FinSi	
FinProceso
