Proceso Promedio_Nota
	//8.	Hacer un algoritmo en Pseint para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
	
	Escribir "*****************************"
	Escribir "*  Sacar promedio de Notas  *"  
	Escribir "*****************************"
	
	Escribir "Ingresar primera nota:"
	Leer nNota1
	Escribir "Ingresar segunda nota:"
	Leer nNota2
	Escribir "Ingresar tercera nota:"
	Leer nNota3
	
	nPromedio = (nNota1 + nNota2 + nNota3) / 3
	
	Si nPromedio>=10.5
		cMensaje = "Aprobo"
	SiNo
		cMensaje = "Desaprobo"
	FinSi
	
	Escribir "El estudiante: ", cMensaje, " con ", nPromedio
	
FinProceso
