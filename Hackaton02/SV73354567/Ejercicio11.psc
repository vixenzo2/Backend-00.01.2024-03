Proceso Ejercicio11
	//Hacer un algoritmo en Pseint que lea tres numeros y diga cual es el mayor.
	Escribir "Ingrese el primer numero:"
    Leer num1
    Escribir "Ingrese el segundo numero:"
    Leer num2
    Escribir "Ingrese el tercer numero:"
    Leer num3	
    Si num1 >= num2 Y num1 >= num3 Entonces
        mayor <- num1
    Sino
        Si num2 >= num1 Y num2 >= num3 Entonces
            mayor <- num2
        Sino
            mayor <- num3
        Fin Si
    Fin Si
	Escribir "El mayor de los tres numeros es:", mayor	
FinProceso
