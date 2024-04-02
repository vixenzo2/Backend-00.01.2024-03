// Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:
// Cajero (56$/día).
// Servidor (64$/día).
// Preparador de mezclas (80$/día).
// Mantenimiento (48$/día).
// El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó

Proceso PagoEmpleado
    Definir id, dias, salario Como Entero
    
    Escribir "Ingrese el identificador del empleado (1=Cajero, 2=Servidor, 3=Preparador de mezclas, 4=Mantenimiento):"
    Leer id
    
    Escribir "Ingrese la cantidad de días que trabajó en la semana (máximo 6):"
    Leer dias
    
    // Determinar el salario diario según el identificador del empleado
    Segun id Hacer
        Caso 1:
            salario <- 56
        Caso 2:
            salario <- 64
        Caso 3:
            salario <- 80
        Caso 4:
            salario <- 48
        De Otro Modo:
            Escribir "Identificador de empleado inválido."
            
		FinSegun
		
		// Calcular el total a pagar
		salario <- salario * dias
		
		Escribir "El dueño le debe pagar al empleado: $", salario
		
FinProceso