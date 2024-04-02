//Hacer un algoritmo en Pseint que cumpla con la aproximaci�n del n�mero pi con la serie de Nilakantha. 
//La formula que se debe aplicar es:
//Pi = = 3 + 4/(234) - 4/(456) + 4/(678) - 4/(8910) + 4/(101112) - 4/(121314) ...
Proceso AproximacionNilakantha
	Definir i, n como Entero
    Definir numero, denominador, signo como Real
    Escribir "Ingrese la cantidad de t�rminos a utilizar en la aproximaci�n:"
    Leer n
    numero <- 3
    Para i <- 1 Hasta n Hacer
		si i MOD 2 == 0 Entonces
			signo = -1
		SiNo
			signo = 1
		FinSi
		numero = numero + (4 / (( 2 * i ) * ((2 * i) + 1) * ((2 * i) + 2))) * signo
    FinPara
    Escribir "La aproximaci�n de numero con ", n, " t�rminos es:", numero
FinProceso
