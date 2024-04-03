Proceso Prog_14
	//Hacer un algoritmo en Pseint que lea un entero positivo del 1 
	//al diez y al 9 y determine si es un número primo
	
	Escribir "Digite el numero"
	Leer Numero1
	contador2=0
	contador1=0
	
	si Numero1>= 1 y Numero1 <= 9 Entonces
		para i=1 hasta numero1 Hacer
			si (numero1 Mod i)==0 Entonces
				contador2=contador2+1
			FinSi
		FinPara
		
		si contador2 ==2 Entonces
			Escribir "El Numero es primo"
			Escribir "Cantidad de divisores: ",contador2
		SiNo
			Escribir "El Numero no es primo"
			Escribir "Cantidad de divisores: ",contador2
		FinSi
		
	SiNo
		Escribir  "Ingrese un numero en el rango de 1 al 9"
	FinSi
	
	
FinProceso
