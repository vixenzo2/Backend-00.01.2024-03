// Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.
Proceso DeterminarAumentoSalario
    Definir salario_actual, salario_nuevo Como Real
    
    Escribir "Ingrese el salario actual del trabajador:"
    Leer salario_actual
    
    // Determinar el aumento según el salario actual
    Si salario_actual > 2000 Entonces
        salario_nuevo <- salario_actual * 1.05  // Aumento del 5%
    Sino
        salario_nuevo <- salario_actual * 1.10  // Aumento del 10%
    FinSi
    
    // Mostrar el nuevo salario con aumento
    Escribir "El nuevo salario con aumento es:", salario_nuevo
    
FinProceso
