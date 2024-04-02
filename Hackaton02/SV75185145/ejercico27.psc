Proceso ejercicio27
	//27. Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo
	suma = 0
	cantidadNumeros = 1
	Mientras Verdadero Hacer
		Escribir "digite un numero positivo"
		leer positivo1
		si positivo1 > 0 Entonces
			suma = suma + positivo1
			promedio = suma / cantidadNumeros
			Escribir "el promedio de los numeros es " promedio
		SiNo
			Escribir "es un numero negativo"
		FinSi
		
		cantidadNumeros = cantidadNumeros + 1
	Fin Mientras
FinProceso
