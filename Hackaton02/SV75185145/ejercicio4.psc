Proceso ejercicio4
	Escribir "digite tres numeros enteros"
	leer numero1
	leer numero2
	leer numero3
	si numero1 > numero2 Entonces
		si numero1 > numero3 Entonces
			si numero2 > numero3 Entonces
				Escribir "el orden de menor a mayor es"
				Escribir numero3
				Escribir numero2
				Escribir numero1
			SiNo
				Escribir "el orden de menor a mayor es"
				Escribir numero2
				Escribir numero3
				Escribir numero1
			FinSi
		sino 
			Escribir "el orden de menor a mayor es"
			Escribir numero2
			Escribir numero1
			Escribir numero3
		FinSi
	SiNo
		si numero2 > numero3 Entonces
			si numero1 > numero3 Entonces
				Escribir "el orden de menor a mayor es"
				Escribir numero3
				Escribir numero1
				Escribir numero2
			SiNo
				Escribir "el orden de menor a mayor es"
				Escribir numero1
				Escribir numero3
				Escribir numero3
			FinSi
		SiNo
				Escribir "el orden de menor a mayor es"
				Escribir numero1
				Escribir numero2
				Escribir numero3
		FinSi
	FinSi
	
FinProceso
