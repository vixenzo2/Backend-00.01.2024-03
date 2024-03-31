Proceso ejercicio1
	//defino mis variables 
	Definir num, tamaño Como entero
	Definir continuar, x Como Caracter
	continuar <- 's'
	Mientras continuar='s' Hacer
		//ingreso de datos
		Escribir '¿El número tiene tres dígitos?: '
		Escribir 'Ingrese número: '
		Repetir
			Leer num
		Hasta Que num >= 0
		//conversion de el numero a texto para contabilizar digitos
		x <- ConvertirATexto(num)
		// Contar los dígitos 
		tamaño <- Longitud(x)		
		// Muestra de resultados
		si tamaño = 3 Entonces
			Escribir 'El número ingresado tiene 3 dígitos '
		SiNo
			Escribir 'El número ingresado NO tiene 3 dígitos '
			Escribir 'El número tiene: ', tamaño, " dígitos"
		FinSi
		Repetir
			Escribir '¿Continuar? (s/n)'
			Leer continuar
			continuar <- Minusculas(continuar)
		Mientras Que (continuar<>'s' Y continuar<>'n')
	FinMientras

FinProceso
