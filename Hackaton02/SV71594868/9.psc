Proceso ejercicio9
	Escribir "¿Cuánto gana usted?"
	Leer sueldo
	aumento = 0
	
	Si sueldo >= 2000 Entonces
		aumento = 5
	Sino
		aumento = 10
	FinSi
	
	aumentoTotal = sueldo*aumento/100
	
	sueldoFinal = aumentoTotal+sueldo
	
	Escribir "El aumento total de su sueldo es del ", aumento, "% ($", aumentoTotal, "), por lo tanto su sueldo sube a $",sueldoFinal
	
FinProceso
