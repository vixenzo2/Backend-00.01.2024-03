Proceso ejercicio16
	// 16. Hacer un algoritmo en Pseint que lea un número y según ese número, indique el día que corresponde.
	Escribir "digite un numero entero positivo"
	Leer numero1
	Segun numero1 Hacer
		1:
			Escribir "lunes"
		2:
			Escribir "martes"
		3:
			Escribir "miercoles"
		4:
			Escribir "jueves"
		5:
			Escribir "viernes"
		6:
			Escribir "sabado"
		7:
			Escribir "domingo"
		De Otro Modo:
			residuo = numero1 % 7
			Segun residuo Hacer
				1:
					Escribir "lunes"
				2:
					Escribir "martes"
				3:
					Escribir "miercoles"
				4:
					Escribir "jueves"
				5:
					Escribir "viernes"
				6:
					Escribir "sabado"
				0:
					Escribir "domingo"
			Fin Segun
	fin segun
FinProceso
