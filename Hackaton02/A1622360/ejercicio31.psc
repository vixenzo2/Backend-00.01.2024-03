Proceso ejercicio31
	
	definir c como entero 
	
	definir suma , n como real 
	n=1 
	suma = 0 
	c = 0 
	mientras n<>0 hacer 
		escribir "ingresa un numero"
		leer n 
		si n <>0 Entonces
			si n mod 2==0 entonces 
				suma = suma + n
				c= c + 1
			FinSi
		FinSi
		
		
	FinMientras
	
	escribir " la suma de los numero pares es : " , suma 
	escribir " numero pares es : " , n
	escribir " el promedio de numero pares es : " , suma/c
 	
FinProceso
