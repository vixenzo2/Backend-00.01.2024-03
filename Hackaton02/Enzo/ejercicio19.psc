Algoritmo Pregunta18
    Definir numero_empleado, dias_trabajados como Entero
    Definir salario_diario, pago_total como Real
	Definir es_valido Como Logico
	
    Escribir "Ingrese el número identificador del empleado (1, 2, 3, 4):"
    Leer numero_empleado
	
    Escribir "Ingrese la cantidad de días trabajados en la semana (máximo 6 días):"
    Leer dias_trabajados
	
	es_valido = Verdadero
    Segun numero_empleado
        Caso 1:
            salario_diario = 56
        Caso 2:
            salario_diario = 64
        Caso 3:
            salario_diario = 80
        Caso 4:
            salario_diario = 48
        De Otro Modo:
            Escribir "Número de empleado inválido."
			es_valido = False
    Fin Segun
	
	Si es_valido Entonces
		Si dias_trabajados < 1 o dias_trabajados > 6 Entonces
			Escribir "Cantidad de días trabajados inválida."
		Sino
			pago_total = dias_trabajados * salario_diario
			Escribir "El empleado ", numero_empleado, " debe recibir ", pago_total, "$ por ", dias_trabajados, " días trabajados."
		Fin Si
	FinSi
FinAlgoritmo
