Proceso ejercicio6
	definir horas, horas_extras, pago como Real
	escribir "Escribe las horas trabajadas"
	leer horas 
	si horas > 40 Entonces
		horas_extras = horas - 40
		pago = (40 * 20) + (horas_extras * 25)
	sino 
		pago = horas * 20 
	FinSi
	escribir "el pago semanal por las " ,horas, "horas trabajadas es : $" , pago 
FinProceso
