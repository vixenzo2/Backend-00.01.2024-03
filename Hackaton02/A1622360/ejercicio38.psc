Proceso ejercicio38
	definir n,x,perfecto Como Entero
	escribir "escribe un numero "
	leer n 
	x=2
	mientras x <= n hacer 
		si n mod x == 0 Entonces
			perfecto = perfecto + (n/x)
		FinSi
		x = x+1
	FinMientras
	si perfecto  == n entonces 
		escribir "el numero " ,n, " es un numero perfecto"
	sino 
		Escribir "el numero ",n, "no es un numero perfecto"
	FinSi
	
FinProceso
