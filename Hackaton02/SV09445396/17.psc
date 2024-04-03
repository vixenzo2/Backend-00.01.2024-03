Proceso Hora_Segundos
	
	// 17.	Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.
	
	Escribir "*********************************************"
	Escribir "*            Horas en segundos              *"  
	Escribir "*********************************************"
	
	Repetir
		Escribir "Ingresar la hora, minutos y segundos:"
		Escribir "Hora [1-12], Minutos [0-60], Segundos [0-60]" 
		Leer nHoras, nMinutos, nSegundos
		
		lValido = 1
		si nHoras<0 o nHoras>12
			Escribir "Numero de horas invalido, rango [0-12]"
			lValido = 0
		FinSi
		si nMinutos<0 o nMinutos>60
			Escribir "Numero de minutos invalido, rango [0-60]"
			lValido = 0
		FinSi
		si nSegundos<0 o nSegundos>60
			Escribir "Numero de segundos invalido, rango [0-60]"
			lValido = 0
		FinSi
		
		si lValido==0
			Escribir ""
			Escribir "---------------------------------------------"	
		FinSi
		
	Hasta Que lValido==1
	
	nTotSegundos = (nHoras*3600) + (nMinutos*60) + nSegundos	
	Escribir "La hora ",nHoras,":",nMinutos,":",nSegundos," en segundos es: ",nTotSegundos
	
FinProceso
