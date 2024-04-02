Proceso ejercicio5
	Escribir "cuantos zapatos va a comprar"
	Leer  numero1
	descuento = 0
	si numero1 <= 10 Entonces
		Escribir "no hay descuento"
	SiNo
		si numero1 <= 20 Entonces
			descuento = numero1 * 80 * 0.1
			Escribir "el descuento es de: " 
			Escribir descuento
		sino 
			si numero1 <= 30 Entonces
				descuento = numero1 * 80 * 0.2
				Escribir "el descuento es de: " 
				Escribir descuento
			sino 
				descuento = numero1 * 80 * 0.4
				Escribir "el descuento es de: " 
				Escribir descuento
			FinSi
		FinSi
	FinSi
	
FinProceso
