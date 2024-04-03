Proceso Ejercicio20
//Hacer un algoritmo en Pseint que que lea 4 numeros enteros positivos y verifique y realice las siguientes operaciones:
//Cuantos numeros son Pares?
//Cuul es el mayor de todos?
//Si el tercero es par, calcular el cuadrado del segundo.
//Si el primero es menor que el cuarto, calcular la media de los 4 numeros.
//Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700.
//Si cumple se cumple la segunda condicion, calcular la suma de los 4 numeros.
	cantidad_pares <- 0
    // Leer los 4 numeros enteros positivos
    Escribir "Ingrese el primer numero:"
    Leer num1
    Escribir "Ingrese el segundo numero:"
    Leer num2
    Escribir "Ingrese el tercer numero:"
    Leer num3
    Escribir "Ingrese el cuarto numero:"
    Leer num4	
    // Contar cuantos numeros son pares
    Si num1 MOD 2 = 0 Entonces
        cantidad_pares <- cantidad_pares + 1
    Fin Si
    Si num2 MOD 2 = 0 Entonces
        cantidad_pares <- cantidad_pares + 1
    Fin Si
    Si num3 MOD 2 = 0 Entonces
        cantidad_pares <- cantidad_pares + 1
    Fin Si
    Si num4 MOD 2 = 0 Entonces
        cantidad_pares <- cantidad_pares + 1
    Fin Si	
    // Determinar el mayor de todos
    mayor <- num1
    Si num2 > mayor Entonces
        mayor <- num2
    Fin Si
    Si num3 > mayor Entonces
        mayor <- num3
    Fin Si
    Si num4 > mayor Entonces
        mayor <- num4
    Fin Si
	// Si el tercer numero es par, calcular el cuadrado del segundo
    Si num3 MOD 2 = 0 Entonces
        suma_cuadrado_segundo <- num2 * num2
    Fin Si	
    // Si el primer numero es menor que el cuarto, calcular la media de los 4 numeros
    Si num1 < num4 Entonces
        media <- (num1 + num2 + num3 + num4) / 4
    Fin Si	
    // Si el segundo es mayor que el tercero, verificar si el tercero esta entre 50 y 700
    Si num2 > num3 Entonces
        Si num3 >= 50 Y num3 <= 700 Entonces
            // Si cumple la condicion, calcular la suma de los 4 numeros
            suma_cuadrado_segundo <- num1 + num2 + num3 + num4
        Fin Si
    Fin Si	
    // Mostrar resultados
    Escribir "Cantidad de numeros pares:", cantidad_pares
    Escribir "El mayor de todos los numeros es:", mayor
    Escribir "Cuadrado del segundo numero si el tercero es par:", suma_cuadrado_segundo
    Escribir "Media de los 4 numeros si el primero es menor que el cuarto:", media
    Escribir "Suma de los 4 numeros si el segundo es mayor que el tercero y el tercero esta entre 50 y 700:", suma_cuadrado_segundo
FinProceso
