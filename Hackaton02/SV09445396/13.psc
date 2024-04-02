Proceso Letra_Vocal
	
	//13.	Hacer un algoritmo en Pseint que lea una letra y diga si es una vocal
	
	Escribir "***********************"
	Escribir "*     Letra vocal     *"  
	Escribir "***********************"
	
	Escribir "Ingresar una letra:"
	Leer cLetra
	
	Segun cLetra Hacer
		"A","E","I","O","U":
			cMsg = "Si es vocal"
		"a","e","i","o","u":
			cMsg = "Si es vocal"
		De Otro Modo:
			cMsg = "No es vocal"
	Fin Segun
	
	Escribir "La letra ingresada: ", cMsg
	
FinProceso
