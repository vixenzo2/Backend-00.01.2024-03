Proceso Ejercicio4
	//Hacer un algoritmo en Pseint que lea tres numeros enteros y los muestre de menor a mayor.
	Escribir "Ingresa el primer numero:"
    Leer numero1
    Escribir "Ingresa el segundo numero:"
    Leer numero2
    Escribir "Ingresa el tercer numero:"
    Leer numero3
	Si numero1 <= numero2 Y numero1 <= numero3 Entonces
        Escribir numero1
        Si numero2 <= numero3 Entonces
            Escribir numero2
            Escribir numero3
        Sino
            Escribir numero3
            Escribir numero2
        Fin Si
    Sino
        Si numero2 <= numero1 Y numero2 <= numero3 Entonces
            Escribir numero2
            Si numero1 <= numero3 Entonces
                Escribir numero1
                Escribir numero3
            Sino
                Escribir numero3
                Escribir numero1
            Fin Si
        Sino
            Escribir numero3
            Si numero1 <= numero2 Entonces
                Escribir numero1
                Escribir numero2
            Sino
                Escribir numero2
                Escribir numero1
            Fin Si
        Fin Si
    Fin Si
FinProceso
