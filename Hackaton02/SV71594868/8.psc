Proceso ejercicio8
	Definir nota1, nota2, nota3 ,suma, promedio como real
	
    Escribir Sin Saltar "Ingrese la nota 1: "
	Leer nota1
	
    Escribir Sin Saltar "Ingrese la nota 2: "
    Leer nota2
    
    Escribir Sin Saltar "Ingrese la nota 3: "
    Leer nota3
	
    suma = nota1 + nota2 + nota3
    promedio = suma / 3
    Escribir "El promedio es: ", promedio
	si promedio >= 12 Entonces
		Escribir "El alumno esta Aprobado"
	sino 
		Escribir" El alumno esta Desaprobado"
	FinSi
FinProceso
