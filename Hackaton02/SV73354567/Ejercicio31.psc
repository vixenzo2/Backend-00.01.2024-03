Proceso Ejercicio31
	//Hacer un algoritmo en Pseint parar calcular la media de los numeros pares e impares, solo se ingresar diez numeros.
	sumaPares <- 0
    sumaImpares <- 0
    contadorPares <- 0
    contadorImpares <- 0	
    Para i <- 1 Hasta 10 Con Paso 1 Hacer
        Escribir "Ingrese el numero ", i, ":"
        Leer numero		
        Si numero MOD 2 = 0 Entonces
            sumaPares <- sumaPares + numero
            contadorPares <- contadorPares + 1
        Sino
            sumaImpares <- sumaImpares + numero
            contadorImpares <- contadorImpares + 1
        Fin Si
    Fin Para	
    Si contadorPares > 0 Entonces
        mediaPares <- sumaPares / contadorPares
        Escribir "La media de los numeros pares ingresados es:", mediaPares
    Sino
        Escribir "No se ingresaron numeros pares."
    Fin Si	
    Si contadorImpares > 0 Entonces
        mediaImpares <- sumaImpares / contadorImpares
        Escribir "La media de los numeros impares ingresados es:", mediaImpares
    Sino
        Escribir "No se ingresaron numeros impares."
    Fin Si
FinProceso
