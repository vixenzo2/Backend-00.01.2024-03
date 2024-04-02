Proceso Pregunta39
	
    Escribir("Ingrese la cantidad de términos para aproximar pi:")
    Leer n
	
    pi_aproximado = 0
    signo = 1
	
    Para i = 0 Hasta n-1 Con Paso 1 Hacer
        termino = 1 / (2 * i + 1) * signo
        pi_aproximado = pi_aproximado + termino
        signo = -signo
    Fin Para
	
    pi_aproximado = 4 * pi_aproximado
	
    Escribir "La aproximación de pi con ", n, " términos es:" pi_aproximado
FinProceso