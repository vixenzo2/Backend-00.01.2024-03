Proceso Ejercicio33
	//Hacer un algoritmo en Pseint que permita al usuario continuar con el programa.
	Escribir "Desea continuar con el programa? (S/N):"
    Leer opcion	
    Si opcion = "S" o opcion = "s" Entonces
        Escribir "El programa contina..."
        // Aqui colocaras el resto del codigo del programa
    Sino
        Si opcion = "N" o opcion = "n" Entonces
            Escribir "El programa ha sido detenido."
            // Aqui puedes finalizar el programa si lo deseas
        Sino
            Escribir "Opcion no valida. Por favor, ingrese S para continuar o N para detener el programa."
        Fin Si
    Fin Si
FinProceso
