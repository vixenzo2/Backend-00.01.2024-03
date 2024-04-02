//Se quiere saber cu�l es la ciudad con la poblaci�n de m�s personas, son tres provincias y once ciudades, 
//hacer un algoritmo en Pseint que nos permita saber eso. (NO HAY DATOS SUFICIENTES)
Proceso CiudadPoblacion
	Dimension CantidadPersonas[14]
	Definir mayor Como Entero
	Escribir "Ingrese la poblacion de las ciudades: "
	Para i <- 1 Hasta 14 Hacer 
		Leer CantidadPersonas[i]
		Si i = 1 Entonces
			mayor = CantidadPersonas[i] 
		SiNo
			Si mayor < CantidadPersonas[i] Entonces
				mayor = CantidadPersonas[i]
			FinSi
		FinSi
	FinPara
	Si mayor > 0 Entonces
		Escribir "La ciudad de mayor poblacion es: ", mayor
	SiNo
		Escribir "No hay datos suficientes"	
	FinSi
	
FinProceso
