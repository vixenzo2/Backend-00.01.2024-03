Proceso ejercicio9
	Definir salario_actual, salario_nuevo, aumento Como Real
	
	Escribir "Ingrese el salario actual del trabajador:"
	Leer salario_actual
	
	Si salario_actual > 2000 Entonces
		aumento = salario_actual * 0.05
	SiNo
		aumento = salario_actual * 0.1
	Fin Si
	salario_nuevo = salario_actual + aumento
	Escribir "El nuevo salario es de: ", salario_nuevo
FinProceso
