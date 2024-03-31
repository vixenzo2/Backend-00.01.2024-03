Proceso Prog_11
	
	//Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.
	
	Escribir "Digite el 1er Numero"
	Leer numero1
	Escribir "Digite el 2do Numero"
	Leer numero2
	Escribir "Digite el 3er Numero"
	Leer numero3
	Nmayor = 0
	
	si numero1 > numero2 Entonces
		
		si numero1 > numero3
			Nmayor= numero1
		Sino
			Nmayor= numero3
		FinSi
		
	SiNo
		
		si numero2 > numero3
			Nmayor= numero2
		Sino
			Nmayor= numero3
		FinSi
		
	FinSi
	Escribir "El numero mayor es: ",Nmayor
FinProceso
