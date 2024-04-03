Proceso Ejercicio9
//	Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba mas de $2000 tendra un aumento del 5%,
//	si generaba menos de $2000 su aumento sera de un 10%.
	Escribir "Ingrese el salario actual del trabajador:"
    Leer salario_actual	
    Si salario_actual > 2000 Entonces
        aumento <- 0.05 * salario_actual
    Sino
        aumento <- 0.1 * salario_actual
    Fin Si
    salario_nuevo <- salario_actual + aumento	
    Escribir "El nuevo salario del trabajador es:", salario_nuevo	
FinProceso
