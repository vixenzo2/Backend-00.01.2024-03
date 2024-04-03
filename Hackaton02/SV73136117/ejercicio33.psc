Proceso ejercicio33
	//Hacer un algoritmo en Pseint que permita al usuario continuar con el programa.
	
	parar = Falso
	Mientras parar == Falso Hacer
		Escribir "¿Desea continuar con el programa?"
		Leer respuesta
		si respuesta == "si" o respuesta == "Si" o respuesta == "SI" Entonces
			parar = Verdadero
			Escribir "Continuando con el programa ..."
		SiNo
			si respuesta == "no" o respuesta == "No" o respuesta == "NO" Entonces
				Escribir "Programa cancelado"
				parar = Verdadero
			SiNo
				Escribir "---- Comando no valido ----"
			FinSi
		FinSi
	FinMientras
FinProceso
