Proceso ejercicio21
	//21. Hacer un algoritmo en Pseint que permita calcular el factorial de un número.
	Definir numero, factorial, contador Como Entero
    
    Escribir "Ingrese un número para calcular su factorial:"
    Leer numero
    
    factorial = 1  // Inicializamos el factorial en 1
    
    Para contador = 1 Hasta numero Con Paso 1 Hacer
        factorial = factorial * contador  // Calculamos el factorial multiplicando el resultado actual por el contador
    FinPara
    
    Escribir "El factorial de ", numero, " es ", factorial
FinProceso
