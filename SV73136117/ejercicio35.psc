Proceso ejercicio35
	definir numerito, mayorcito, menorcito, i como Entero
	
	Escribir "Ingresar 20 numeros"
	Escribir "Numero 1"
	
	mayorcito = numero1
	menorcito = numero1
	
	Para i = 2	hasta 20 Hacer
		Escribir "numero ", i
		Leer numerito
		
		si numerito > mayorcito Entonces
			mayorcito = numerito
		FinSi
		
		si numerito < menorcito Entonces
			menorcito = numerito
		FinSi
	FinPara
	
	Escribir "El numero mayor es: ", mayorcito
	Escribir "El numero menor es: ", menorcito
	
FinProceso
