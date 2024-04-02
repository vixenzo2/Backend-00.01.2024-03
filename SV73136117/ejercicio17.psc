Proceso Pregunta17
	//	17. Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.
	Definir horas, minutos, segundos Como Entero
	Definir valorescorrectos Como Logico
	
	valorescorrectos=Verdadero
	Escribir Sin Saltar "Digite la hora (0 y 23)"
	leer horas
	Escribir Sin Saltar "Digite los minutos (entre 0 y 59)"
	leer minutos
	Escribir Sin Saltar "Digite los segundos (0 y 59)"
	leer segundos
	
	Si horas < 0 O horas > 23
		Escribir "Error al digitar la hora, debe ser un valor entre 0 y 23"
		valorescorrectos=Falso	
	FinSi
	Si minutos < 0 O minutos > 59
		Escribir "Error al digitar los minutos, debe ser un valor entre 0 y 59"
		valorescorrectos=Falso	
	FinSi
	Si segundos < 0 O segundos > 59
		Escribir "Error al digitar los segundos, debe ser un valor entre 0 y 59"
		valorescorrectos=Falso
	FinSi
		Si valorescorrectos
			Mientras horas <= 23
				Mientras minutos <= 59
					Mientras segundos < 59
						Limpiar Pantalla
						Si horas>9
							Escribir Sin Saltar"La hora digitada es: " , horas
						SiNo
							Escribir Sin Saltar"La hora digitada es: 0" , horas
						FinSi
						Si minutos > 9
							Escribir Sin Saltar ":", minutos
						SiNo
							Escribir Sin Saltar ":0", minutos 
						FinSi
						Si (segundos>9)
							Escribir Sin Saltar ":", segundos
						SiNo
							Escribir Sin Saltar ":0", segundos
						FinSi
						
						segundos = segundos + 1
						esperar 1 segundos
					FinMientras
					segundos=0
					minutos = minutos + 1
				FinMientras
				minutos=0
				horas = horas + 1
				si horas = 24
					horas = 0
				FinSi
			FinMientras
		FinSi
	FinProceso
