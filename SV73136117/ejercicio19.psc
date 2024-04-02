Proceso ejercicio19
	Escribir "Escribir el código del empleado, donde 1:cajero (56$/día) y 2:servidor (64$/día), 3:preparador de mezclas (80$/día), 4:mantenimiento (48$/día) "
	Leer operacion
	Escribir "Número de días trabajados durante la semana"
	Leer numero2
	
	Si numero2 > 6 Entonces
		Escribir "El número de días no es valido"
	SiNo
		Segun operacion Hacer
			1:
				respuesta = numero2 * 56
			2:
				respuesta = numero2 * 64
			3:
				respuesta = numero2 * 80
			4:
				respuesta = numero2 * 48
			De Otro Modo:
				Escribir "Operación no válida"
		Fin Segun
	Fin Si
	
	Escribir "La respuesta es ", respuesta "$"
	si operacion = 1 escribir "pagar a su empleado cajero"
	FinSi
	si operacion = 2 escribir "pagar a su empleado servidor"
	FinSi
	si operacion = 3 escribir "pagar a su empleado preparador"
	FinSi
	si operacion = 4 escribir "pagar a su empleado mantenimiento"
	FinSi
FinProceso
