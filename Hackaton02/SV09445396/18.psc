Proceso Venta_CDS
	
	// 18.	Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribución de CD vírgenes.
	// Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:
	//	$10. Si se compran unidades separadas hasta 9.
	//	$8. Si se compran entre 10 unidades hasta 99.
	//	$7. Entre 100 y 499 unidades.
	//	$6. Para mas de 500 unidades.
	//  La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en Pseint que dado un número 
	// de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.
	
	Escribir "************************"
	Escribir "*     Venta de CDs     *"  
	Escribir "************************"
	
	Escribir "Ingresar numero de CDs a comprar:"
	Leer nCDs
	
	si nCDs<=9
		nPrecio = 10
	SiNo
		si nCDs<=99
			nPrecio = 8
		SiNo
			si nCDs<=499
				nPrecio = 7
			SiNo
				nPrecio = 6
			FinSi
		FinSi
	FinSi
	nTotal = nCDs * nPrecio
	nGanancia = nTotal * 8.25/100
	
	Escribir "El precio total de la venta  es: ",nTotal
	Escribir "La ganancia para el vendedor es: ",nGanancia
	
FinProceso
