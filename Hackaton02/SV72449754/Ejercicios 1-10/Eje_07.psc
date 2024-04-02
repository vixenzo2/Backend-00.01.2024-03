Proceso Prog_07
//	Hacer un algoritmo en Pseint para una tienda de helado que da un descuento 
//	por compra a sus clientes con membresía dependiendo de su tipo, sólo existen 
//	tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
//	Tipo A 10% de descuento Tipo B 15% de descuento Tipo C 20% de descuento
	
	Escribir "Tipo de Membresia"
	Leer TypeMemb
	Descuento=0
	
	Escribir "Validando Membresia"
	
	Si typeMemb=="A" o typeMemb=="B" o typeMemb=="C" Entonces
		Escribir "Membresia Correcta"
		segun typeMemb Hacer
			"A":Descuento =10
			"B":Descuento =15
			"C":Descuento =20
				
		De Otro Modo:
			Escribir "No hay descuento"
	    FinSegun
	
		Escribir "Porcentaje de Descuento: %",Descuento
	SiNo
		Escribir "Membresia Incorrecta"
	FinSi
	
	
	
FinProceso
