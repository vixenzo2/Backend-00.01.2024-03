Proceso Ejercicio37
	//Hacer un algoritmo en Pseint para conseguir el M.C.D de un numero por medio del algoritmo de Euclides.
	Escribir "Ingrese el primer numero:"
    Leer a
    Escribir "Ingrese el segundo numero:"
    Leer b	
    Mientras b <> 0 Hacer
        Definir temp Como Entero
        temp <- b
        b <- a MOD b
        a <- temp
    Fin Mientras	
    Escribir "El maximo comun divisor (MCD) de ", a, " y ", b, " es ", Abs(a)
FinProceso
