Proceso Numero_Mayor
	
	//11.	Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.
	
	Escribir "*******************************"
	Escribir "*  Numero mayor de 3 numeros  *"  
	Escribir "*******************************"
	
	Escribir "Ingresar primer numero:"
	Leer nNum1
	Escribir "Ingresar segundo numero:"	
	Leer nNum2
	Escribir "Ingresar tercer numero:"
	Leer nNum3
	
	si nNum1==nNum2 y nNum1==nNum3
		Escribir "Los tres numeros son iguales"
	SiNo
		Si nNum1>nNum2
			Si nNum1>nNum3
				nMayor = nNum1
			SiNo
				nMayor = nNum3
			FinSi
		SiNo
			Si nNum2>nNum3
				nMayor = nNum2
			SiNo
				nMayor = nNum3
			FinSi
		FinSi
		
		Escribir "El numero mayor es: ", nMayor	
	FinSi
	
FinProceso

