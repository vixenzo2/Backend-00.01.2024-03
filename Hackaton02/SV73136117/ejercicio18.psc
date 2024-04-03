Proceso sin_titulo
	Definir cantidad, precio, precio_total, precio_total_cliente, ganancia_vendedor Como Real
	
	Escribir "Ingrese una cantidad"
	Leer cantidad
	
	Si cantidad <= 9 Entonces
		precio = 10
	SiNo
		si cantidad >= 10 y cantidad <= 99 Entonces
			precio = 8
		SiNo
			si cantidad >= 100 y cantidad <= 499 Entonces
				precio = 7
			SiNo
				precio = 6
			FinSi
		FinSi
	Fin Si
	
	precio_total_cliente = cantidad * precio
	ganancia_vendedor = precio_total_cliente * 0.0825
	Escribir "Precio total para el cliente es de: ", precio_total_cliente
	Escribir "La ganancia del vendedor es de: ", ganancia_vendedor
FinProceso
