Proceso Prog_36
	//Hacer un algoritmo en Pseint para calcular la serie de Fibonacc
	//S=0,1,1,2,3,5,8,13,21,34......
	
	Escribir "Ingrese el numero de terminos"
	leer n
	Dimensionar S[n]
	
	
	si n>=1 Entonces
		S[1]=0
	FinSi
	
	si n>=2 Entonces
		S[2]=1
	FinSi
	
	si n>=3 entonces
		para i=3 hasta n hacer
			S[i]=S[i-1] + S[i-2] 
		FinPara
	
	FinSi

	
	//imorimir elementos de la serie
	para i=1 hasta n hacer
		Escribir "Elemento ",i,": ",S[i]
	FinPara
	
FinProceso
