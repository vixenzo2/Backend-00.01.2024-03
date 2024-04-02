Proceso ejercicio32
	//32. Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades, hacer un algoritmo en Pseint que nos permita saber eso. (NO HAY DATOS SUFICIENTES)
	poblacion_maxima = -1
	Para i<-1 Hasta 11 Con Paso 1 Hacer
		Escribir "Ingrese la población de la ciudad ", i, ":"
        Leer poblacion_ciudad
        Si poblacion_ciudad > poblacion_maxima entonces
            poblacion_maxima = poblacion_ciudad
            Escribir "la ciudad con mas poblacion es la numero" i
        Fin Si
	Fin Para
    // Mostrar la ciudad con mayor población
	Escribir  "con una poblacion de: " poblacion_maxima
FinProceso
