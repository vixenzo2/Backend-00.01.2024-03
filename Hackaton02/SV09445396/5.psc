Proceso Venta_Zapatos
	//5.	Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una promoción de descuento para vender al mayor,
	//      esta dependerá del número de zapatos que se compren.
	//      * Si son más de diez, se les dará un 10% de descuento sobre el total de la compra;
	//      * si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento;
	//      * si son más treinta zapatos se otorgará un 40% de descuento.
	//      El precio de cada zapato es de $80.
	
	Escribir "***************************************"
	Escribir "* TIENDA: Venta de zapatos            *"
	Escribir "***************************************"
	Escribir "Ingresar numero de zapatos a comprar:"
	Leer nNumZapatos
	
	nPrecioZapato = 80
	nTotal = nNumZapatos * nPrecioZapato
	
	Si nNumZapatos>30
		nDscto = (nNumZapatos * nPrecioZapato) * 40/100
	SiNo
		si nNumZapatos>20
			nDscto = (nNumZapatos * nPrecioZapato) * 20/100
		SiNo
			si nNumZapatos>10
				nDscto = (nNumZapatos * nPrecioZapato) * 10/100
			SiNo
				nDscto = 0.00
			FinSi
		FinSi
	FinSi
	
	nTotalPago = nTotal - nDscto
	Escribir "Precio total de compra es: ", nTotalPago
	
FinProceso
