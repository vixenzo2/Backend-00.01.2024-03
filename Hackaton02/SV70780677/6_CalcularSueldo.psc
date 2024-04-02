//Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.


Proceso CalcularSueldo
    Definir horas_trabajadas, sueldo_base, sueldo_total Como Entero
    
    sueldo_base <- 20  // Sueldo por hora normal
    horas_base <- 40   // Horas base de trabajo
    sueldo_extra <- 25  // Sueldo por hora extra
    
    Escribir "Ingrese las horas trabajadas en la semana:"
    Leer horas_trabajadas
    
    // Calcular el sueldo total
    Si horas_trabajadas <= horas_base Entonces
        sueldo_total <- horas_trabajadas * sueldo_base
    Sino
        horas_extra <- horas_trabajadas - horas_base
        sueldo_total <- (horas_base * sueldo_base) + (horas_extra * sueldo_extra)
    FinSi
    
    // Mostrar el sueldo total
    Escribir "El sueldo semanal es:", sueldo_total, "soles."
    
FinProceso
