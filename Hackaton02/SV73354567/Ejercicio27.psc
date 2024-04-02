Proceso Ejercicio27
	//Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de numeros positivos, 
	//se debe acabar el programa al ingresar un numero negativo.
	suma <- 0
    contador <- 0	
    Escribir "Ingrese numeros positivos para calcular la media (Ingrese un numero negativo para terminar):"	
    Leer numero	
    Mientras numero >= 0 Hacer
        suma <- suma + numero
        contador <- contador + 1
        Escribir "Ingrese otro numero positivo (o un numero negativo para terminar):"
        Leer numero
    Fin Mientras	
    Si contador > 0 Entonces
        media <- suma / contador
        Escribir "La media de los numeros ingresados es:", media
    Sino
        Escribir "No se ingresaron numeros validos para calcular la media."
    Fin Si
FinProceso
