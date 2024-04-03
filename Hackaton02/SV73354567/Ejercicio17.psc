Proceso Ejercicio17
//Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.	
	Escribir "Ingrese la hora (formato 24 horas):"
    Leer hora
    Escribir "Ingrese los minutos:"
    Leer minutos
    Escribir "Ingrese los segundos:"
    Leer segundos	
    segundos <- segundos + 1	
    Si segundos >= 60 Entonces
        segundos <- 0
        minutos <- minutos + 1
    Fin Si	
    Si minutos >= 60 Entonces
        minutos <- 0
        hora <- hora + 1
    Fin Si	
    Si hora >= 24 Entonces
        hora <- 0
    Fin Si	
    Escribir "La hora dentro de un segundo es:", hora, ":", minutos, ":", segundos	
FinProceso
