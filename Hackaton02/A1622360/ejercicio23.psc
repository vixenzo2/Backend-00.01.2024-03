Proceso ejercicio23
	Definir  i,n,imod2,acumimp Como Real
	i=0
	n=0
	imod2=0
	acumimp=0
	escribir "ingrese numero"
	leer n
	para i<-1 hasta N Con Paso 2 hacer 
		si imod2 <>0 Entonces
			escribir "es par" ;
		sino 
			acumimp<-acumimp +i
			
		FinSi
	
	FinPara
	escribir " la sumatoria de impares menores o iguales de n es :" , acumimp
FinProceso
