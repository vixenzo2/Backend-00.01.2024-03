Proceso Ejercicio19
//Hacer un algoritmo en Pseint para una heladera se tienen 4 tipos de empleados ordenados de la siguiente forma con su numero identificador y 
//salario diario correspondiente:				
//Cajero (56$/dia).			
//Servidor (64$/dia).
//Preparador de mezclas (80$/dia).
//Mantenimiento (48$/dia).		
//El dueño de la tienda desea tener un programa donde solo ingrese dos numeros enteros que representen al 
//numero identificador del empleado y la cantidad de dias que trabajo en la semana (6 dias maximos). 
//Y el programa le mostrara por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingreso
	Escribir "Ingrese el numero identificador del empleado:"
    Leer identificador_empleado
    Escribir "Ingrese la cantidad de dias trabajados en la semana (maximo 6 dias):"
    Leer dias_trabajados	
    Segun identificador_empleado
		Caso 1:
            salario_diario <- 56
		Caso 2:
            salario_diario <- 64
		Caso 3:
            salario_diario <- 80
		Caso 4:
            salario_diario <- 48
		De Otro Modo:
			Escribir "Numero de empleado no valido."
	Fin Segun	
    Si dias_trabajados < 1 o dias_trabajados > 6 Entonces
        Escribir "Cantidad de dias trabajados no valida."
	Fin Si	
    salario_semanal <- salario_diario * dias_trabajados	
    Escribir "El salario semanal del empleado es:", salario_semanal
FinProceso
