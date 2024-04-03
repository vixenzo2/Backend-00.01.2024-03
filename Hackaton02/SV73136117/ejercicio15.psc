Proceso Pregunta15
	// 15. Hacer un algoritmo en Pseint que convierta centímetros a pulgadas y libras a kilogramos.
	Escribir "Digite una medida en centimetros o libras"
	Leer Numero1
	Escribir "Digita la opcion: 1 para convertir centimetros a pulgadas, 2 para convertir libras a kilogramos" 
	Leer operacion
	Segun operacion Hacer
		1: 
			respuesta = numero1 / 2.54
		2: 
			respuesta = numero1 * 0.453592
		
		De Otro Modo:
			Escribir "Operacion no valida"
	FinSegun
	Escribir "La respuesta es ", respuesta
FinProceso
