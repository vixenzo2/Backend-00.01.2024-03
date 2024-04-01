Proceso ejercicio6
	Escribir "cuantas horas trabajo el empleado?"
	leer horas1
	si horas1 <= 40 Entonces
		sueldo = horas1 * 20
		Escribir "su sueldo será de:"
		Escribir sueldo
	SiNo
		extras1 = (horas1 - 40) * 25
		sueldo = 40 * 20 + extras1
		Escribir sueldo
	FinSi
FinProceso
