Proceso Repeticiones
	
	numero1 = 0
	Repetir
		Escribir "Hola ", numero1
		numero1 = numero1 + 1
	Hasta Que numero1 == 10
	
	bandera = Falso
	
	
	Repetir
		Escribir "Adivina el numero que estoy pensando"
		Leer numero2 
		si numero2 == 40 Entonces
			bandera = Verdadero
		FinSi
	Hasta Que bandera
	
	
	bandera2 = Verdadero
	Mientras bandera2 Hacer
		Escribir  "Adivina el numero que estoy pensando"
		Leer numero2
		si numero2 == 40 Entonces
			bandera2 = Falso
		FinSi
	Fin Mientras
FinProceso
