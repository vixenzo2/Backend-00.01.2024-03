Algoritmo Pregunta17
    Definir hora, minuto, segundo como Entero
	
    Escribir "Ingrese la hora (formato 24 horas):"
    Leer hora
    Escribir "Ingrese los minutos:"
    Leer minuto
    Escribir "Ingrese los segundos:"
    Leer segundo
	
    segundo = segundo + 1
	
    Si segundo >= 60 Entonces
        segundo = 0
        minuto = minuto + 1
    Fin Si
	
    Si minuto >= 60 Entonces
        minuto = 0
        hora = hora + 1
    Fin Si
	
    Si hora >= 24 Entonces
        hora = 0
    Fin Si
	
    Escribir "La hora un segundo después es: ", hora, ":", minuto, ":", segundo
FinAlgoritmo