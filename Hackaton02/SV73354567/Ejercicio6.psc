Proceso Ejercicio6
	//Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cual sera su sueldo semanal,
	//se sabe que si trabaja 40 horas o menos, se le pagara $20 por hora, pero si trabaja mas de 40 horas entonces las horas extras se le pagaran a $25 por hora.
	sueldo_base <- 20
    horas_extra <- 0	
    Escribir "Ingrese las horas trabajadas en la semana:"
    Leer horas_trabajadas	
    Si horas_trabajadas > 40 Entonces
        horas_extra <- horas_trabajadas - 40
        horas_trabajadas <- 40
    Fin Si	
    sueldo_total <- (horas_trabajadas * sueldo_base) + (horas_extra * 25)	
    Escribir "Sueldo semanal total:", sueldo_total
FinProceso
