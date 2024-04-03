Proceso ejercicio3
	//Hacer un algoritmo en Pseint que lea un número y determinar si termina en 4.
	Definir numerito, ultimoDigito como Entero
	Escribir "Ingrese un número"
	leer numerito
	
	ultimoDigito = numerito mod 10
	
	Si ultimoDigito == 4 Entonces
		Escribir "El número ",numerito, " termina en 4"
	SiNo
		Escribir "El número ",numerito, " no termina en 4"
	Fin Si
FinProceso
