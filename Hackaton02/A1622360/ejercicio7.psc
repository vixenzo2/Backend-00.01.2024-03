Proceso ejercicio7
	Definir precio,descuento Como Real
	definir tipo Como Caracter
	escribir "cual es el precio del helado"
	leer precio
	escribir "Que tipo de helado es (tipo a,b y c)"
	leer tipo 
	segun tipo Hacer 
		"a":
			descuento=(precio*10)/100
			precio= precio - descuento
		"b":
			descuento = (precio*15)/100
			precio = precio - descuento
		"c":
			descuento = (precio*20)/100
			precio =precio - descuento
	FinSegun
	escribir "el precio es ", precio 
FinProceso
