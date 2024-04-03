Proceso ejercicio39
	s <- 0
	Escribir " cantidad de termininos a generar"
	Leer x
	para i<- 1 Hasta x Hacer
		si i % 2 = 0 entonces 
			s<-s-(4/((i*2)-1))
		sino
			s<-s+(4/((i*2)-1))
		FinSi
	FinPara
	Escribir "PI se acerca a :", s
	
FinProceso
