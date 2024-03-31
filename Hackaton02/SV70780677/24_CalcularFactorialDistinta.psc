//Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta.
Proceso CalcularFactorialDistinta
	Escribir "Ingrese el numero: "
    Leer num
    contador <- 1 
    resultado <- 1 
    repetir
        resultado <- resultado * contador 
        contador <- contador + 1 
    hasta que (contador > num)
    Escribir resultado
FinProceso
