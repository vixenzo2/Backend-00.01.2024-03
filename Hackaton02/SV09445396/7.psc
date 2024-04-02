Proceso Venta_Helados
	
	// 7.	Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus
	// 		clientes con membresía dependiendo de su tipo,
	// 		sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
	// 		Tipo A 10% de descuento Tipo B 15% de descuento Tipo C 20% de descuento
	
	Escribir "*******************************"
	Escribir "*       Venta de helados      *"  
	Escribir "*******************************"
	
	nPrecioHelado = 10
	Escribir "EL precio del helado es:", nPrecioHelado
	Escribir "Numero de helados a comprar:"
	Leer nHelados
	Escribir "Ingresar tipo de membresia [A/B/C]:"
	Leer cMembrecia
	
	Segun cMembrecia Hacer
		"A","a":
			nDescuento = 10
		"B","b":
			nDescuento = 15
		"C","c":
			nDescuento = 20
		De Otro Modo:
			nDescuento = 0
	Fin Segun
	
	Escribir "Total a Pagar  : ", nHelados * nPrecioHelado
	Escribir "Descuento % ",nDescuento," :  ",(nHelados * nPrecioHelado) * nDescuento/100
	Escribir "Total con Dscto: ", (nHelados * nPrecioHelado) - (nHelados * nPrecioHelado) * nDescuento/100
	
FinProceso
