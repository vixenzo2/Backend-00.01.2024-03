Proceso ejercicio35
	definir i,t,ns,may,men Como Entero
	may <-0
	men <-0
	i<-1
	escribir "ingrese la cantidad de numeros"
	leer ns
	mientras (i<=ns) hacer 
		escribir "ingrese el numero : " ,i
		leer t
		si(i==1) Entonces
			may <- t
			men <- t
		SiNo 
			si(t>may) Entonces
				may <-t
			FinSi
			si (t<men) Entonces
				men <-t
			
			FinSi
		FinSi
		i<-i+1
	FinMientras
	escribir " el numero menor ingresado es : ",men
	escribir " el numero mayor ingresado es : ",may
	
FinProceso
