Algoritmo Pregunta16
    Definir numero como Entero
    Definir dia como Carácter
	Definir es_valido Como Logico
	
    Escribir "Ingrese un número del 1 al 7:"
    Leer numero
	
	es_valido = Verdadero
    Segun numero
        Caso 1:
            dia = "Lunes"
        Caso 2:
            dia = "Martes"
        Caso 3:
            dia = "Miércoles"
        Caso 4:
            dia = "Jueves"
        Caso 5:
            dia = "Viernes"
        Caso 6:
            dia = "Sábado"
        Caso 7:
            dia = "Domingo"
        De Otro Modo:
            Escribir "Número inválido."
			es_valido = Falso
    Fin Segun
	
	si es_valido Entonces
		Escribir "El número ", numero, " corresponde al día ", dia
	FinSi
FinAlgoritmo