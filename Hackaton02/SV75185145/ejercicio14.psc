Proceso ejercicio14
	Escribir "digite un numero"
	leer numero1
	NroDivisores = 0
	Divisor = 1
	Repetir
		residuo = numero1 % Divisor
		Divisor = Divisor + 1
		si residuo = 0 Entonces
			NroDivisores = NroDivisores + 1
		FinSi
	Hasta Que Divisor = numero1
	si NroDivisores > 2 Entonces
		Escribir  "el numero no es primo"
	SiNo
		Escribir "el numero es primo"
	FinSi
FinProceso
