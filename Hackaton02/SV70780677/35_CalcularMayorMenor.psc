//Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor, 
//se debe ingresar sólo veinte números. i
Proceso CalcularMayorMenor
	Dimension totalnumeros[20]
	Definir mayor,menor Como Entero
	Escribir "Ingrese la cantidad de numeros: "
	Para i <- 1 Hasta 20 Hacer 
		Leer totalnumeros[i]
		Si i = 1 Entonces
			mayor = totalnumeros[i] 
			menor = totalnumeros[i] 
		SiNo
			Si mayor < totalnumeros[i] Entonces
				mayor = totalnumeros[i]
			FinSi
			Si menor > totalnumeros[i] Entonces
				menor = totalnumeros[i]
			FinSi
		FinSi
	FinPara
	Si mayor > 0 Entonces
		Escribir "El numero mayor es: ", mayor
	SiNo
		Escribir "No hay datos suficientes"	
	FinSi
	Si menor > 0 Entonces
		Escribir "El numero menor es: ", menor
	SiNo
		Escribir "No hay datos suficientes"	
	FinSi
FinProceso



