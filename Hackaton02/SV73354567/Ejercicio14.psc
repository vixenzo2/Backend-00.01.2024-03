Proceso Ejercicio14
//Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y al 9 y determine si es un numero primo.	
	es_primo <- Verdadero	
    Escribir "Ingrese un numero entero positivo del 1 al 10 (excepto 9):"
    Leer numero	
    Si numero < 1 O numero > 10 O numero = 9 Entonces
        Escribir "El numero ingresado no es valido."
    Sino
        Si numero = 1 Entonces
            es_primo <- Falso
        Sino
            Para i <- 2 Hasta numero - 1 Hacer
                Si numero MOD i = 0 Entonces
                    es_primo <- Falso
                    // Si se encuentra un divisor, no es necesario continuar la busqueda
                Fin Si
            Fin Para
        Fin Si
		
        Si es_primo Entonces
            Escribir "El numero", numero, "es un numero primo."
        Sino
            Escribir "El numero", numero, "no es un numero primo."
        Fin Si
    Fin Si
FinProceso
