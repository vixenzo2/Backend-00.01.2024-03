Proceso ejericio37
	definir a,b,x,maximo Como Entero
	leer a ,b 
	si a > 0 y b>0 Entonces
		maximo = 1
		x = 1
		mientras x<= a hacer
			si a mod x == 0 y b mod x == 0 entonces
				si x > maximo entonces 
					maximo = x
				FinSi
			FinSi
			x= x+1
		FinMientras
		escribir " el maximo comuni divisor es: " , maximo
	sino 
		escribir "debes ingresar numeros mayores a cero : " 
	FinSi
	
FinProceso
