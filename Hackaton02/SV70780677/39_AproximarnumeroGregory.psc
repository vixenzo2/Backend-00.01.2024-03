//Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. 
// La formula que se debe aplicar es:
Proceso AproximarnumeroGregory
    Definir i, n como Entero
    Definir numero, denominador, resultado como Real
    Escribir "Ingrese la cantidad de términos a utilizar en la aproximación: "
    Leer n
	resultado <- 0
    Para i <- 1 Hasta n Hacer
		numero <- contador + i
		contador<- contador + 1
		si i MOD 2 == 0 Entonces
			signo = -1
		SiNo
			signo = 1
		FinSi
		denominador = (4 / numero) * signo
		resultado<- resultado + denominador 
    FinPara
    
    Escribir "La aproximación de numero con ", n, " términos es: ", resultado
FinProceso

