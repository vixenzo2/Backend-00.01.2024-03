Proceso Heladeria
	
	//19.	Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número
	// 		identificador y salario diario correspondiente:
	//		 Cajero (56$/día).
	//		 Servidor (64$/día).
	//		 Preparador de mezclas (80$/día).
	//		 Mantenimiento (48$/día).
	//		El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número
	//		identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará 
	//  	por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó
	
	Escribir "******************************************"
	Escribir "*         Heladeria: Pago Empleado       *"  
	Escribir "******************************************"
	
	Escribir "Ingresar tipo de empleado:"
	Escribir " [1] Cajero"
	Escribir " [2] Servidor"
	Escribir " [3] Preparador de mezclas"
	Escribir " [4] Mantenimiento"
	Leer nTipo
	
	Escribir "Ingresar numero identificador de empleado:"
	Leer nIdentificador
	
	Escribir "Ingresar numero de dias trabajados:"
	Leer nDias
	
	si nIdentificador<=9 o nIdentificador>=100
		Escribir "Numero identificador invalido"
	SiNo
		Si nDias>6
			Escribir "Numero de dias en exceso"
		SiNo
			si nTipo>=1 y nTipo<=4
				Segun nTipo Hacer
					1: nPago = 66
					2: nPago = 64
					3: nPago = 80
					4: nPago = 48
				Fin Segun
				nTotPago = nPago * nDias
				Escribir "AL trabajador se le debe pagar: ", nTotPago
			SiNo
				Escribir "Tipo de trabajador incorrecto."
			FinSi
			
		FinSi
	FinSi
	
FinProceso
