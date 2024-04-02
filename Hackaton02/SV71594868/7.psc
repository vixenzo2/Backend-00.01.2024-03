Proceso ejercicio7
	definir precio,descuento Como Real;
	definir tipo Como Caracter;
	escribir "¿Cual es el precio del helado?";
	leer precio;
	escribir "¿Cual es su tipo de menbrecia?(tipo a, b y c)";
	leer tipo;
	Segun tipo Hacer
		"a":
			descuento = (precio * 10)/100;
			precio = precio - descuento;
		"b":
			descuento = (precio * 15)/100;
			precio = precio - descuento;
		"c":
			descuento = (precio * 20)/100;
			precio = precio - descuento;
	Fin Segun
	escribir "el precio es ",precio," soles";
FinProceso
