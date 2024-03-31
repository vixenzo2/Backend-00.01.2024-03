Proceso ejercico17
	definir hh,mm,ss como entero
	escribir "ingrese hh,mm,ss";
	leer hh
	leer mm
	leer ss
	si(hh<24 y mm <60 y ss <60)Entonces
		ss<-ss+1
		si(ss=60)Entonces
			ss<-0
			mm<-mm+1
			si(mm=60)Entonces
				mm<-0
				hh<-hh+1
				si(hh=24)Entonces
					hh<-0
				FinSi
				
			FinSi
		FinSi
	FinSi
	 escribir hh,":",mm,":",ss,":"
FinProceso
