Proceso TerminaEnCuatro
    Definir numero, ultimo_digito como Entero
	
    Escribir "Ingrese un número:"
    Leer numero
	
    ultimo_digito = numero % 10
	
    Si ultimo_digito = 4 Entonces
        Escribir "El número ", numero, " termina en 4."
    Sino
        Escribir "El número ", numero, " no termina en 4."
    Fin Si
FinProceso