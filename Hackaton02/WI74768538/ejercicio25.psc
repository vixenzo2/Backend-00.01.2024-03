Proceso ejercicio25
	Definir numero, factorial, contador Como Entero
    
    Escribir "Ingrese un número para calcular su factorial:"
    Leer numero
    
    factorial <- 1
    
    Si numero <= 1 Entonces
        factorial <- 1
    Sino
        Para contador <- 2 Hasta numero Hacer
            factorial <- factorial * contador
        FinPara
    FinSi
    
    Escribir "El factorial de ", numero, " es: ", factorial
FinProceso
