Proceso ejercicio11
	Escribir "digite tres numeros"
	leer numero1
	leer numero2
	leer numero3
	si numero1 > numero2 Entonces
		si numero1 > numero3 Entonces
			Escribir "el numero mayor es:" numero1
		SiNo
			Escribir "el numero mayor es:" numero3 
		FinSi
	SiNo
		si numero2 > numero3 Entonces
			Escribir "el numero mayor es:" numero2
		SiNo
			Escribir "el numero mayor es:" numero3
		FinSi
	FinSi
FinProceso
