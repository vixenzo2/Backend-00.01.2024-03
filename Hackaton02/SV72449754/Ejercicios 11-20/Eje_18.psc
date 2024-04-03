Proceso Prog_18
	
   //Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribución de CD vírgenes. 
   //Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:
		//$10. Si se compran unidades separadas hasta 9.
		//$8. Si se compran entre 10 unidades hasta 99.
		//$7. Entre 100 y 499 unidades.
		//$6. Para mas de 500 unidades.
							
	//La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en Pseint que dado 
	//un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.
	
	Escribir "Ingrese la cantidad de productos a comprar"
	Leer valor1
	Val_Unidad=0
	
	si valor1>0 y valor1 <= 9 Entonces
		Val_Unidad=10
	FinSi
	
	si valor1>9 y valor1<= 99 Entonces
		Val_Unidad=8
	FinSi
	
	si valor1 >99 y valor1 <=499 Entonces
		Val_Unidad=7
	FinSi
	
	si valor1>499  Entonces
		Val_Unidad=6
	FinSi
	
	Total_Pagar=valor1*Val_Unidad
	Comision=(8.25*Total_Pagar)/100
	
	Escribir "Importe Total: $ ", Total_Pagar
	Escribir "Comision del vendedor: $ ", Comision
	
FinProceso
