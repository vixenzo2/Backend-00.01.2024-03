Proceso Ejercicio15
	//Hacer un algoritmo en Pseint que convierta centimetros a pulgadas y libras a kilogramos.
	CONSTANTE_PULGADA <- 2.54 // Valor constante de una pulgada en centimetros
    CONSTANTE_KILOGRAMO <- 0.453592 // Valor constante de una libra en kilogramos	
    Escribir "Ingrese la longitud en centimetros:"
    Leer centimetros
    Escribir "Ingrese el peso en libras:"
    Leer libras	
    pulgadas <- centimetros / CONSTANTE_PULGADA
    kilogramos <- libras * CONSTANTE_KILOGRAMO	
    Escribir "La longitud en pulgadas es:", pulgadas
    Escribir "El peso en kilogramos es:", kilogramos
FinProceso
