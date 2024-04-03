Proceso ejercicio35
	//35. Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.
	
	Escribir "Ingrese el número 1:"
    Leer numero1
    mayor = numero1
    menor = numero1
	Para i desde 2 hasta 20 hacer
        Escribir "Ingrese el número ", i, ":"
        Leer numero1
		
        Si numero1 > mayor entonces
            mayor = numero1
        Fin Si
		
        Si numero1 < menor entonces
            menor = numero1
        Fin Si
    Fin Para
	
    Escribir "El número mayor es:", mayor
    Escribir "El número menor es:", menor
FinProceso
