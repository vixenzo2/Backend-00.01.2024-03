Algoritmo MayorDeTresNumeros
    Definir num1, num2, num3, mayor como Entero
	
    Escribir "Ingrese el primer número:"
    Leer num1
    Escribir "Ingrese el segundo número:"
    Leer num2
    Escribir "Ingrese el tercer número:"
    Leer num3
	
    Si num1 >= num2 y num1 >= num3 Entonces
        mayor = num1
    Sino Si num2 >= num1 y num2 >= num3 Entonces
			mayor = num2
		Sino
			mayor = num3
		Fin Si
	Fin Si
		
		Escribir "El mayor de los tres números es: ", mayor
FinAlgoritmo