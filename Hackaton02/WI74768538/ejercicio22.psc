Proceso ejercicio22
	Definir n, suma, contador Como Entero
    
    Escribir "Ingrese el valor de n:"
    Leer n
    
    suma = 0  // Inicializamos la variable suma en 0
    
    Para contador = 1 Hasta n Con Paso 1 Hacer
        suma = suma + contador  // Sumamos el valor actual de contador a suma
    FinPara
    
    Escribir "La suma de los primeros ", n, " números es: ", suma
	
FinProceso
