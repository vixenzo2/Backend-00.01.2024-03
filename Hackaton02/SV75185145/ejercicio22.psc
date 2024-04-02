Proceso ejercicio22
	//22. Hacer un algoritmo en Pseint para calcular la suma de los n primeros números
	Escribir "ingresar el valor de n"
	leer n
	suma = 0
	contador = 1
	si n <= 0 Entonces
		Escribir "el valor de n debe ser un numero natural mayor que cero"
	SiNo
		Repetir
			suma = suma + contador
			contador = contador + 1
		Hasta Que contador = n + 1
	FinSi
	Escribir "la suma de los primeros " n " numeros es " suma
FinProceso
