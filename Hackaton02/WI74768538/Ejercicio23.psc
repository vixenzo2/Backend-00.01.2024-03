Proceso Ejercicio23
	Definir n, suma, numero Como Entero
    
    Escribir "Ingrese un número para calcular la suma de los números impares hasta ese número:"
    Leer n
    
    suma = 0  // Inicializamos la variable de suma
    
    Para numero = 1 Hasta n Con Paso 2 Hacer
        suma = suma + numero  // Sumamos solo los números impares
    FinPara
    
    Escribir "La suma de los números impares hasta ", n, " es: ", suma
	
FinProceso
