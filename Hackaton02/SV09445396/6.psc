Proceso Sueldo_Semanal
	
	// 6.	Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cuál será su sueldo semanal,se sabe que
	//		si trabaja 40 horas o menos, se le pagará $20 por hora, pero
	//		si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.
	
	Escribir "***********************************"
	Escribir "*          Sueldo semanal         *"  
	Escribir "***********************************"
	
	Escribir "Ingresar numero de horas trabajadas:"
	Leer nHoras
	
	Si nHoras<= 40
		nHorasTrabajadas = nHoras * 20
	SiNo
		nHorasTrabajadas = nHoras * 25
	FinSi
	
	Escribir "Horas trabajadas: ", nHorasTrabajadas
		
FinProceso
