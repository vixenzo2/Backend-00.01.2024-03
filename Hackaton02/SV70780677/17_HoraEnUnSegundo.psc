// Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.

Proceso HoraEnUnSegundo
    Definir hora, minuto, segundo Como Entero
    
    Escribir "Ingrese la hora:"
    Leer hora
    
    Escribir "Ingrese los minutos:"
    Leer minuto
    
    Escribir "Ingrese los segundos:"
    Leer segundo
    
    // Incrementar el segundo
    segundo <- segundo + 1
    
    // Si los segundos llegan a 60, incrementar los minutos y resetear los segundos a 0
    Si segundo = 60 Entonces
        minuto <- minuto + 1
        segundo <- 0
    FinSi
    
    // Si los minutos llegan a 60, incrementar la hora y resetear los minutos a 0
    Si minuto = 60 Entonces
        hora <- hora + 1
        minuto <- 0
    FinSi
    
    // Si la hora llega a 24, resetear la hora a 0
    Si hora = 24 Entonces
        hora <- 0
    FinSi
    
    Escribir "La hora en un segundo será: ", hora, ":", minuto, ":", segundo
    
FinProceso