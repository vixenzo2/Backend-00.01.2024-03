Proceso Numero_Mayor2
	
	//12.	Hacer un algoritmo en Pseint que lea dos números y diga cuál es el mayor.
	
	Escribir "*******************************"
	Escribir "*  Numero mayor de 2 numeros  *"  
	Escribir "*******************************"
	
	Escribir "Ingresar primer numero:"
	Leer nNum1
	Escribir "Ingresar segundo numero:"	
	Leer nNum2
	
	si nNum1 == nNum2
		Escribir "Los numeros ingresados son iguales"
	SiNo
		Si nNum1>nNum2
			nMayor = nNum1
		SiNo
			nMayor = nNum2
		FinSi
		
		Escribir "El numero mayor es: ", nMayor	
	FinSi
		
FinProceso
