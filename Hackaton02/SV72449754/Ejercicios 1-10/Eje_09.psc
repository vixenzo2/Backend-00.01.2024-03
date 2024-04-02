Proceso Prog_09
	
//	Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, 
//	se debe tomar en cuenta que si generaba más de $2000 tendrá un aumento del 5%, 
//	si generaba menos de $2000 su aumento será de un 10%.
	
	Escribir "Ingrese su sueldo actual"
	Leer Sueldo_Actual
	Sueldo_Futuro=0
	
	Si Sueldo_Actual > 0 Entonces
		si Sueldo_Actual < 2000 Entonces
			Sueldo_Futuro = 1.1*Sueldo_Actual
		SiNo
			Sueldo_Futuro = 1.05*Sueldo_Actual
			
		FinSi
	
		Escribir "Su sueldo Actual es :",Sueldo_Actual
		Escribir "Su Futuro Sueldo sera :",Sueldo_Futuro
	SiNo 
		Escribir "Ingrese un monto valido"
    FinSi
	
FinProceso
