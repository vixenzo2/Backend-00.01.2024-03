Proceso ejercicio15
	//Hacer un algoritmo en Pseint que convierta centímetros a pulgadas y libras a kilogramos.
	Escribir "seleccione la conversion a usar"
	Escribir "1 centimetros a pulgadas"
	Escribir "2 libras a kilogramos"
	Leer opcion1
	Segun opcion1 Hacer
		1:
			Escribir "digite los centimetros a convertir"
			Leer cm
			pulgadas = cm * 0.393701
			Escribir "en pulgadas son: " pulgadas
		2:
			Escribir "digite las libras a convertir"
			Leer lb
			kilogramnos = lb * 2.20462
			Escribir "en kilogramos son: " kilogramnos
		De Otro Modo:
			Escribir "no existe conversion"
	Fin Segun
FinProceso
