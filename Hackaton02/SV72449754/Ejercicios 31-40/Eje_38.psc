Proceso Prog_38
	//Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto
	
	Escribir "Ingrese el numero"
	Leer num1
	Dimensionar Div[5000]
	Div[1]=0
	Sum=0
	cont=0
	
	si num1>=0 Entonces
		//Calculo de divisores
		para i=2 hasta num1 hacer
			si (num1 Mod i ==0) Entonces
				cont=cont+1
				Div[cont]=num1/i
				
				Escribir "Divisor ",cont ,": ",Div[cont]
			FinSi
		FinPara
		Escribir "cantidad de divisores: ",cont
		
		
		// Suma de divisores
		para j=1 hasta cont hacer
			Sum=sum+Div[j]
		FinPara
		
		Escribir "Suma de divisores: ",Sum
		
		
		//Determinar si el numero es perfecto
		si num1==Sum Entonces
			Escribir "El numero es Perfecto"
		SiNo
			Escribir "El numero No es Perfecto"
		FinSi
		
	SiNo
		Escribir"Ingrese un numero valido"
		
	FinSi
	
	
	
FinProceso
