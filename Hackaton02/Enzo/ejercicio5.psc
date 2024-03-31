Algoritmo Pregunta5
    Definir cantidad_zapatos, precio_unitario, precio_total, descuento_porcentaje, precio_con_descuento como Entero
	
    Escribir "Ingrese la cantidad de zapatos a comprar:"
    Leer cantidad_zapatos
	
    precio_unitario = 80
    precio_total = cantidad_zapatos * precio_unitario
	
    Si cantidad_zapatos > 30 Entonces
        descuento_porcentaje = 40
    Sino Si cantidad_zapatos > 20 y cantidad_zapatos <= 30 Entonces
			descuento_porcentaje = 20
		Sino Si cantidad_zapatos > 10 y cantidad_zapatos <= 20 Entonces
				descuento_porcentaje = 10
			Sino
				descuento_porcentaje = 0
			Fin Si
		Fin Si
	Fin Si
	
	precio_con_descuento = precio_total -  precio_total * descuento_porcentaje / 100
	
	Escribir "Cantidad de zapatos:", cantidad_zapatos
	Escribir "Precio total sin descuento:", precio_total
	Escribir "Descuento aplicado:", descuento_porcentaje, "%"
	Escribir "Precio total con descuento:", precio_con_descuento
	
FinAlgoritmo