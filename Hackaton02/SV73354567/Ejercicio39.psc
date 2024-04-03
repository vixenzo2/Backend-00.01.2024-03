Proceso Ejercicio39
//Hacer un algoritmo en Pseint que cumpla con la aproximacion del numero pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:
	//Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...
	Escribir "Ingrese el numero de terminos para la aproximacion de pi"
    Leer terminos
	p <- 0
    signo <- 1
	// Calcular la aproximacion de pi utilizando la serie de Gregory-Leibniz
    Para i <- 1 Hasta terminos Hacer
        p <- p + (signo * 4 / (2 * i - 1))
        signo <- signo * (-1)
    Fin Para	
    // Mostrar el resultado de la aproximacion
    Escribir "Aproximacion de pi con ", terminos, " terminos:", pi
FinProceso
