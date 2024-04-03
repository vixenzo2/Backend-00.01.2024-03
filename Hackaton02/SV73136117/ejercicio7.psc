Proceso ejercicio7
	Definir tipo_Membresia Como Caracter
	Definir precio_total, descuento Como Real
	
	Escribir "Ingrese el tipo de membresia:"
	Leer tipo_Membresia
	
	Escribir "El precio total de la venta:"
	Leer precio_total
	
	Segun tipo_Membresia Hacer
		caso "A":
			descuento = precio_total * 0.1
		caso "B":
			descuento = precio_total * 0.15
		caso "C":
			descuento = precio_total * 0.2
		De Otro Modo:
			Escribir "No existe el tipo de membresia ingresado"
	Fin Segun
	
	precio_final = precio_total - descuento
	
	Escribir "El cliente tiene un tipo de membresia: ", tipo_Membresia
	Escribir "Y el total a pagar es de: ", precio_final
FinProceso
