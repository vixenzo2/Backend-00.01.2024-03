Proceso Ejercicio7
//	Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus clientes con membresia dependiendo de su tipo,
//	solo existen tres tipos de membresia, tipo A, tipo B y tipo C. Los descuentos son los siguientes:				
//	Tipo A 10% de descuento
//	Tipo B 15% de descuento
//	Tipo C 20% de descuento
	Escribir "Ingrese el tipo de membresia del cliente (A, B o C):"
    Leer tipo_membresia
	Escribir "Ingrese el precio del helado:"
    Leer precio_helado	
    Segun tipo_membresia
			Caso "A":
				descuento <- 0.1
			Caso "B":
				descuento <- 0.15
			Caso "C":
				descuento <- 0.2
			De Otro Modo:			
				Escribir "Tipo de membresia no valido."
            
    Fin Segun	
    precio_total <- precio_helado - (precio_helado * descuento)	
    Escribir "El precio total con descuento es:", precio_total
FinProceso
