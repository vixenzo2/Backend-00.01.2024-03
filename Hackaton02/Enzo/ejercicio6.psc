Algoritmo Pregunta6
    Definir horas_trabajadas, sueldo_base, sueldo_total como Entero
	
    Escribir "Ingrese las horas trabajadas esta semana:"
    Leer horas_trabajadas
	
    si horas_trabajadas <= 40 Entonces
        sueldo_base = horas_trabajadas * 20
    Sino
        sueldo_base = 40 * 20 + (horas_trabajadas - 40) * 25
    Fin Si
	
    Escribir "Sueldo:", sueldo_base
FinAlgoritmo