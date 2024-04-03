Proceso ejercicio8
	definir c1,c2,c3,prom Como Real
	escribir "calificacion 1?" Sin Saltar
	leer c1
	escribir "calificacion 2?" Sin Saltar
	leer c2
	Escribir "calificacion 3" Sin Saltar
	leer c3
	prom <-(c1+c2+c3)/3
	Si prom >= 13 Entonces
		Escribir "Felicidades , has aprobado"
	SiNo
		Escribir "Reprobado"
	Fin Si
	escribir "tu promedio es : " ,prom
	
FinProceso
