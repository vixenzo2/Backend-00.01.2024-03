Proceso Numero_Primo
	
	//14.	Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.
	
	Escribir "*******************************"
	Escribir "*        Numero Primo         *"  
	Escribir "*******************************"
	
	Escribir "Ingresar un numero entre [1-10]:"
	Leer nNumero
	
	div = 1
	cont= 0
	
	si nNumero<1 o nNumero>10
		Escribir "Numero ingresado incorrecto."
	SiNo
		Mientras  div <= nNumero 
			si nNumero % div == 0
				cont = cont + 1
			FinSi
			div = div + 1
		FinMientras	
		
		si cont == 2
			cMsg= " es primo"
		SiNo
			cMsg= " no es primo"
		FinSi
		Escribir "El numero ",nNumero, cMsg	
		
	FinSi
	
FinProceso
