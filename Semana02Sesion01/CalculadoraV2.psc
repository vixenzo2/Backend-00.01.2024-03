Proceso CalculadoraV2
	
	Escribir "Digita el primer numero"
	leer Numero1
	Escribir "Digita el segundo numero"
	Leer Numero2
	Escribir  "Digita la opcion: 1 para sumar, 2 para restar, 3 para multiplicar, 4 para dividir"
	Leer operacion
	respuesta = 0
	si operacion == "1" Entonces
		respuesta = Numero1 + Numero2
	SiNo
		si operacion == "2" Entonces
			respuesta = Numero1 - Numero2
		SiNo
			si operacion == "3" Entonces
				respuesta = Numero1 * Numero2
			SiNo
				si operacion == "4" entonces
				respuesta = Numero1 / Numero2
				FinSi
			
			FinSi
		FinSi
	FinSi
	
	Escribir "La respuesta es ",respuesta
FinProceso
