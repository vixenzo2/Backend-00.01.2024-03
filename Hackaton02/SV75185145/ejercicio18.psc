Proceso ejercicio18
	//18. Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribución de CD vírgenes. Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:
    //$10. Si se compran unidades separadas hasta 9.
	//$8. Si se compran entre 10 unidades hasta 99.
	//$7. Entre 100 y 499 unidades.
	//$6. Para mas de 500 unidades.
	//La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en Pseint que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.
	Escribir "cuantos cd compraras?"
	leer cd
	si cd > 0 y cd <= 9 Entonces
		precio = 10
	SiNo si cd >= 10 y cd <= 99
			precio = 8
		sino si cd <= 100 y cd >= 499 Entonces
				precio = 7
			sino si cd >= 500 Entonces
					precio = 6
				FinSi
		FinSi
	FinSi
fin si
Escribir "el precio total para el cliente sera de " precio * cd
Escribir "la ganancia del vendedor es de " precio * cd * 0.0825
FinProceso
