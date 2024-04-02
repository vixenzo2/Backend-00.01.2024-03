Proceso Aumento_Trabajador
	
	//9.	Hacer un algoritmo en Pseint para determinar el aumento de un trabajador,
	// 		se debe tomar en cuenta que 
	//		si ganaba más de $2000 tendrá un aumento del 5%,
	//		si generaba menos de $2000 su aumento será de un 10%.
	
	Escribir "****************************************"
	Escribir "*         Aumento trabajador           *"  
	Escribir "****************************************"
	
	Escribir "Ingresar monto ganado por el trabajador:"
	Leer nMonto
	
	Si nMonto>2000
		nMonto = nMonto + nMonto * 5/100
	SiNo
		nMonto = nMonto + nMonto * 10/100
	FinSi
	
	Escribir "Monto final del trabajador: ", nMonto
	
FinProceso
