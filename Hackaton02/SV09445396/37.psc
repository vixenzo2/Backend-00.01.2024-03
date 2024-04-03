Proceso MCD_Euclides
	
	// 37.	Hacer un algoritmo en Pseint para conseguir el M.C.D de un número por medio del algoritmo de Euclides.
	
	Escribir "*******************************"
	Escribir "*      M.C.D - Euclides       *"
	Escribir "*******************************"
	
	Escribir "Ingresar primer numero:"
	Leer nNum1
	Escribir "Ingresar segundo numero:"
	Leer nNum2
	
	si nNum1>nNum2
		nNumX = nNum1
		nNum1 = nNum2
		nNum2 = nNumX
	FinSi
	Escribir "A=",nNum1
	Escribir "B=",nNum2
	nResiduo = nNum1 % nNum2
	
	Mientras nResiduo>0 Hacer
		nNum = nNum2
		nNum2= nResiduo
		nNum1= nNum
		nResiduo = nNum1 % nNum2
	Fin Mientras
	
	Escribir  "El M.C.D es:", nNum2
	
FinProceso
