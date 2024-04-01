Proceso Ejercicio40
	//Hacer un algoritmo en Pseint que cumpla con la aproximacion del numero pi con la serie de Nilakantha. La formula que se debe aplicar es:	
    //Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...
	// Solicitar al usuario el numero de terminos para la aproximacion de pi
    Escribir "Ingrese el numero de terminos para la aproximacion de pi:"
    Leer terminos	
    p <- 3.0
    signo <- 1
    numerador <- 4.0	
    // Calcular la aproximacion de pi utilizando la serie de Nilakantha
    Para i <- 1 Hasta terminos Hacer
        denominador1 <- 2 * i
        denominador2 <- denominador1 + 1
        denominador3 <- denominador2 + 1		
        p <- p + (signo * numerador / (denominador1 * denominador2 * denominador3))
        signo <- signo * (-1)
    Fin Para	
    Escribir "Aproximacion de pi con ", terminos, " terminos:", p
	
FinProceso
