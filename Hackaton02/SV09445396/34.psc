Proceso Tabla_Multiplicar
	
	// 34.	Hacer un algoritmo en Pseint que imprima la tabla de multiplicar de los números del uno nueve
		
	Escribir "*****************************************"
	Escribir "*    Tabla de multiplicar del 1 al 9    *"  
	Escribir "*****************************************"
	
	Para nTabla=1 Hasta 9 Con Paso 1 Hacer
		Escribir "Tabla del ",nTabla,":"
		Escribir "============"
		
		Para nNum=1 Hasta 12 Con Paso 1 Hacer
			Escribir nTabla," * ",nNum," = ", nTabla * nNum
		Fin Para
		
		Escribir ""
		
	Fin Para
	
FinProceso
