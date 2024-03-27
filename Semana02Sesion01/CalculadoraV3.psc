Proceso CalculadoraV3
	Escribir "Digita el primer numero"
	leer Numero1
	Escribir "Digita el segundo numero"
	Leer Numero2
	Escribir  "Digita la opcion: 1 para sumar, 2 para restar, 3 para multiplicar, 4 para dividir"
	Leer operacion
	respuesta = 0
	
	si Numero2 == 0 y operacion == 4  Entonces
		Escribir "No se puede dividir para 0"
	SiNo
		Segun operacion Hacer
			1:
				respuesta = Numero1 + Numero2
			2:
				respuesta = Numero1 - Numero2
			3:
				respuesta = Numero1 * Numero2
			4:
				respuesta = Numero1 / Numero2
			De Otro Modo:
				Escribir "Operacion No Valida"
		Fin Segun
		Escribir "La respuesta es ",respuesta
	FinSi
	
FinProceso
