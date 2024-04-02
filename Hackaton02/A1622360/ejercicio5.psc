Proceso ejercicio5
	escribir "Ingresa el valor de numero de zapatos"
	leer num1
	subtotal <- num1*80
	descuento <-0
	si num1>10 y num1<=20 Entonces
		descuento <-subtotal*0.1
	FinSi
	si num1>20 y num1<=30 Entonces
		descuento <- subtotal*0.2
		
	FinSi
	si num1 >30 Entonces
		descuento <-subtotal*0.4
	FinSi
	total<-subtotal-descuento	
	escribir "Valor de descuento: ", descuento
	escribir "valor de subtotal: ", subtotal
	escribir "valor de total: " , total
FinProceso
