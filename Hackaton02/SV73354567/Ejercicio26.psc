Proceso Ejercicio26
	//Hacer un algoritmo en Pseint para calcular el resto y cociente por medio de restas sucesivas.
	Escribir "Ingrese el dividendo:"
    Leer dividendo
    Escribir "Ingrese el divisor:"
    Leer divisor	
    // Inicializamos el cociente y el resto como cero
    cociente <- 0
    resto <- dividendo	
    // Mientras el resto sea mayor o igual al divisor
    Mientras resto >= divisor Hacer
        resto <- resto - divisor
        cociente <- cociente + 1
    Fin Mientras	
    Escribir "El cociente es:", cociente
    Escribir "El resto es:", resto
FinProceso
