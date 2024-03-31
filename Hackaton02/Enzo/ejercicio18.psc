Algoritmo CalcularPrecioYGanancia
    Definir cantidad_cd, precio_unitario, precio_total_cliente como Entero
    Definir ganancia_porcentaje, ganancia_vendedor como Real
	
    Escribir "Ingrese la cantidad de CDs a vender:"
    Leer cantidad_cd
	
    Si cantidad_cd >= 1 y cantidad_cd <= 9 Entonces
        precio_unitario = 10
    Sino Si cantidad_cd >= 10 y cantidad_cd <= 99 Entonces
			precio_unitario = 8
		Sino Si cantidad_cd >= 100 y cantidad_cd <= 499 Entonces
				precio_unitario = 7
			Sino
				precio_unitario = 6
			Fin Si
		Fin Si
	Fin Si

	precio_total_cliente = cantidad_cd * precio_unitario
	
	ganancia_porcentaje = 8.25
	ganancia_vendedor = precio_total_cliente * ganancia_porcentaje / 100
	
	Escribir "Precio total para el cliente:", precio_total_cliente
	Escribir "Ganancia para el vendedor:", ganancia_vendedor
FinAlgoritmo