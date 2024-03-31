Proceso ejercicio23
	definir i,n,imod2,acuminp como real 
	i=0
	n=0
	imod2=0
	Escribir"ingrese numero"
	Leer n;
	Para i<-1 Hasta n con paso 2 Hacer
		si imod2<>0 Entonces
			escribir "es par"
		SiNo
			acuminp<-acuminp+i
		FinSi
	FinPara
	Escribir " la sumatoria de impares menores o iguales a es: ",acuminp
FinProceso
