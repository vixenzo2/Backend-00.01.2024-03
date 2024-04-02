Proceso Prog_04
	//Hacer un algoritmo en Pseint que lea tres números 
	//enteros y los muestre de menor a mayor.

	Escribir "Digite el 1er Numero"
	Leer numero1
	Escribir "Digite el 2do Numero"
	Leer numero2
	Escribir "Digite el 3er Numero"
	Leer numero3
	Nmayor = 0
	Nmedio = 0
	Nmenor = 0
	
	
	Si numero1 > numero2 Entonces
		si numero2 > numero3 Entonces
			Nmayor=numero1
			nmedio=numero2
			Nmenor=numero3
		SiNo
			si numero1 > numero3 Entonces
				Nmayor=numero1
				Nmedio=numero3
				Nmenor=numero2
			sino
				Nmayor=numero3
				Nmedio=numero1
				Nmenor=numero2
			Finsi
			
		FinSi
		
		
	SiNo
		si numero1 > numero3 Entonces
			Nmayor=numero2
			Nmedio=numero1
			Nmenor=numero3
		SiNo
			si numero2 > numero3 Entonces
				Nmayor=numero2
				Nmedio=numero3
				Nmenor=numero1
			sino
				Nmayor=numero3
				Nmedio=numero2
				Nmenor=numero1
			Finsi
			
		FinSi
	FinSi
	
	Escribir "El Numero Menor es: ",Nmenor
	Escribir "El Numero Medio es: ",Nmedio
	Escribir "El Numero Mayor es: ",Nmayor
	
FinProceso
