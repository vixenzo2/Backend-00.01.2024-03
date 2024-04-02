Proceso ejercicio4
	escribir "Digite los tres numero"
	leer a,b,c
	si (a>c) y (a>b) Entonces
		may<-a
		si b>c Entonces
			inter <-b
			men<-c
		SiNo
			inter<-c
			men<-b
		FinSi
		sino men<-a
		FinSi
		si(b>a) y (b>c) Entonces
			may<-b
			si a>c Entonces
				inter <-a
				men <-c
			sino 
				inter <-c
				men <-a
			FinSi
		sino 
			men <-b
		FinSi
		si(c>a) y (c>b) Entonces
			may <-c
			si a > b Entonces
				inter <-a
				men <-b
			sino 
				inter <-c
				men <-a
				
			FinSi
		sino 
			men <-c
		FinSi
		escribir "Menor= ",men
		escribir "Intermedio= ",inter
		escribir "Mayor= ",may
	
FinProceso
