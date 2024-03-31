Proceso Pregunta39
	
    Escribir("Ingrese la cantidad de términos para aproximar pi:")
    Leer n
	
    mypi = 0
    signo = 1
	
    Para i = 0 Hasta n-1 Con Paso 1 Hacer
        termino = 1 / (2 * i + 1) * signo
        mypi = mypi + termino
        signo = -signo
    Fin Para
	
    mypi = 4 * mypi
	
    Escribir "La aproximación de pi con ", n, " términos es:" mypi
FinProceso