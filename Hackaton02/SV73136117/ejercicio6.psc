Proceso ejercicio6
	//Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.
	Definir horas_trabajadas, sueldo_base, sueldo_extra, sueldo_total como Entero
	
	sueldo_base = 20
	sueldo_extra = 25
	
	Escribir "Ingrese el número de horas trabajadas:"
	Leer horasTrabajadas
	
	Si horasTrabajadas <= 40 Entonces
		sueldo_total = sueldo_base * horasTrabajadas
	SiNo
		sueldo_total = ((40 * sueldo_base) + (horasTrabajadas - 40) * sueldo_extra)
	Fin Si
	
	Escribir "El sueldo semanal es de: ", sueldo_total
FinProceso
