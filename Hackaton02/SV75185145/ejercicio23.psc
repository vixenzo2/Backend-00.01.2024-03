Proceso ejercicio23
	//23. Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n
	Escribir "digite el valor de n"
	leer n
	suma = 0
	contador = 1
	Repetir
		si contador % 2 <> 0 Entonces
			suma = suma + 1
		FinSi
		contador = contador + 1
	Hasta Que contador = n
	Escribir "la suma del os numeros impares menores que " n " es" suma
FinProceso
