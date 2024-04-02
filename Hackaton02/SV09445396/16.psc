Proceso Dia
	
	//16.	Hacer un algoritmo en Pseint que lea un número y según ese número, indique el día que corresponde.
	
	Escribir "*********************"
	Escribir "*   Encontrar DIA   *"  
	Escribir "*********************"
	
	Escribir "Ingresar un numero:"
	Leer nNumero
	
	si nNumero<=0 o nNumero>=8
		Escribir "Numero ingresado es incorrecto."
	SiNo
		Segun nNumero
			1: cDia = "Lunes"
			2: cDia = "Martes"
			3: cDia = "Miercoles"
			4: cDia = "Jueves"
			5: cDia = "Viernes"
			6: cDia = "Sabado"
			7: cDia = "Domingo"
		FinSegun
		Escribir "El numero de dia de ",nNumero," es: ",cDia	
	FinSi
	
FinProceso
