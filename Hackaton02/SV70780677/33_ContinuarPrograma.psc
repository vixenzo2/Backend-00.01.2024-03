//Hacer un algoritmo en Pseint que permita al usuario continuar con el programa.
Proceso ContinuarPrograma
	Definir indicador Como Caracter
	indicador <- "s"
	Escribir "Se esta ejecutando el programa: "
	Mientras indicador = "s" Hacer
		Escribir "Desea continuar? (s/n)"
		leer indicador
        Si indicador = "n" Entonces
            Escribir "Fin del programa."
		SiNo
			Escribir "Desea continuar? (s/n)"
			leer indicador
        FinSi
	FinMientras
FinProceso
