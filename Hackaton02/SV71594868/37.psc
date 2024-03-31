Proceso ejercicio37
	definir a,b, aux, residuo Como Entero
	Repetir
		escribir "ingrese el primer numero"
		leer a
		
	Hasta Que a>0
	Repetir
		escribir "ingrese el segundo numero"
		leer b
	Hasta Que b>0	
	si b>a Entonces
		aux=b
		b=a
		a=aux

	FinSi
	escribir"a=" , a
	escribir"b=" , b
	residuo=a mod b
	mientras residuo>0 Hacer
		aux=b
		b=residuo 
		a=aux
		residuo= a mod b

	FinMientras
	Escribir "MCD=", B
	
FinProceso
