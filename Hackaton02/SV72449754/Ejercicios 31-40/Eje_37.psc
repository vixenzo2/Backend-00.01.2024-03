Proceso Prog_37
	//Hacer un algoritmo en Pseint para conseguir el M.C.D de 
	//un número por medio del algoritmo de Euclides.
	
	Escribir "Ingrese el 1er numero"
	Leer num1
	Escribir "Ingrese el 2do numero"
	Leer num2
	diff1=1
	diff2=1
	Q=0
	MCD=0
	
	si num1 > num2 Entonces
		diff1=num1-num2
		Q=num2
		
		Mientras diff2<>0 Hacer
			
			diff2 = Q Mod diff1
			si diff2==0 Entonces
				MCD=diff1
				Escribir "MCD: : ",MCD
			FinSi
			
			Q=diff1
			diff1=diff2
		FinMientras
		
	SiNo
		diff1=num2-num1
		Q=num1
		
		Mientras diff2<>0 Hacer
			
			diff2 = Q Mod diff1
			si diff2==0 Entonces
				MCD=diff1
				Escribir "el MCD de los numeros es: ",MCD
			FinSi
			
			Q=diff1
			diff1=diff2
		FinMientras
		
		
		
		
	FinSi
	
	
FinProceso
