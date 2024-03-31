Algoritmo Pregunta9
    Definir salario_actual, aumento, salario_nuevo como Real
	
    Escribir "Ingrese el salario actual del trabajador:"
    Leer salario_actual
	
    Si salario_actual > 2000 Entonces
        aumento = salario_actual * 0.05
    Sino
        aumento = salario_actual * 0.10
    Fin Si
	
    salario_nuevo = salario_actual + aumento
	
    Escribir "El aumento salarial es:", aumento
    Escribir "El nuevo salario es:", salario_nuevo
FinAlgoritmo