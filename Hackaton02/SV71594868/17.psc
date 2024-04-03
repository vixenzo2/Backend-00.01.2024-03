Proceso ejercicio16
	escribir "Ingrese horas"
	leer h
	escribir "Ingrese minutos"
	leer m
	escribir "Ingrese segundos"
	leer s
	segundosT <- (h*3600)+(m*60)+s+1
	h1<- Trunc(segundosT/3600)
	r1<-segundosT mod 3600
	m1<- trunc (r1/60)
	s1<-r1 mod 60
	escribir" el numero de horas es: " , h1
	escribir" el numero de minutos es: " , m1
	escribir" el numero de segundos es: " , s1
FinProceso
