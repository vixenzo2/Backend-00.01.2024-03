Proceso ejercicio24
	//Hacer un algoritmo en Pseint para realizar la suma de todos los números pares hasta el 1000.
	
	Escribir "A continuación se mostrara la suma de todos los números pares hasta 1000"
	
	Definir suma Como Entero
	suma = 0
	contador = 2
	Mientras contador <= 1000 Hacer
		si contador Mod 2 = 0 Entonces
			suma = suma + contador
		FinSi
		contador = contador + 1
	Fin Mientras
	Escribir "La suma es: ",suma
FinProceso
