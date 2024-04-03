//Hacer un algoritmo en Pseint parar calcular la media de los números pares e impares, sólo se ingresará diez números.
Proceso MediaParesImpares
    Definir num, sumaPares, sumaImpares, contadorPares, contadorImpares, mediaPares, mediaImpares como Entero
    sumaPares <- 0
    sumaImpares <- 0
    contadorPares <- 0
    contadorImpares <- 0
    Escribir "Ingrese diez numeros: "
    Para i <- 1 Hasta 10 Hacer
        Leer num
        Si num % 2 = 0 Entonces
            sumaPares <- sumaPares + num
            contadorPares <- contadorPares + 1
        Sino
            sumaImpares <- sumaImpares + num
            contadorImpares <- contadorImpares + 1
        FinSi
    FinPara
    Si contadorPares > 0 Entonces
        mediaPares <- sumaPares / contadorPares
        Escribir "La media de los números pares es: ", mediaPares
    Sino
        Escribir "No se ingresaron numeros pares"
    FinSi
    Si contadorImpares > 0 Entonces
        mediaImpares <- sumaImpares / contadorImpares
        Escribir "La media de los números impares es: ", mediaImpares
    Sino
        Escribir "No se ingresaron numeros impares"
    FinSi	
FinProceso
