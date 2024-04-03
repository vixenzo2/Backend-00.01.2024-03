Proceso Pregunta11
	//11. Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.
	Escribir "Escribir el primero numero"
	Leer Numero1
	Escribir "Escribir el segundo numero"
	Leer Numero2
	Escribir "Escribir el tercer numero"
	Leer Numero3
	Si Numero1 > Numero2 y Numero1 > Numero3
		Escribir"Numero1 Es el numero mayor de los tres numeros"
	SiNo
		SI Numero2 > Numero1 y Numero2 > Numero3
			Escribir "Numero2 Es el numero mayor de los tres numeros"
		SiNo
			Si Numero3 > Numero1 y Numero3 > Numero2
				Escribir "Numero3 Es el numero mayor de los tres numeros"			
			SiNo
				Si numero1 == numero2 y numero3 == numero2
							Escribir "Todos los numeros son iguales"
						SiNo
							Si numero1 == numero2 y numero3 < numero2
								Escribir "Numero1 y Numero2 son los numeros mayores de los tres numeros"
							SiNo
								Si numero2 == numero3 y numero1 < numero2
								Escribir "Numero3 y Numero2 son los numeros mayores de los tres numeros"
							SiNo
								Si numero1 == numero3 y numero1 < numero2
								Escribir "Numero2 Es el numero mayor de los tres numeros"
							FinSi
						FinSi
					FinSi
				FinSi
			FinSi			
		FinSi
	FinSi

FinProceso
