Proceso ejercicio20
	Definir numero1, numero2, numero3, numero4, contador_pares, mayorcito, media, suma Como Real
	Escribir "Ingrese un número"
	Leer numero1
	Escribir "Ingrese un número"
	Leer numero2
	Escribir "Ingrese un número"
	Leer numero3
	Escribir "Ingrese un número"
	Leer numero4
	
	contador_pares = 0
	
	si numero1 mod 2 = 0 Entonces
		contador_pares = contador_pares + 1
	FinSi
	si numero2 mod 2 = 0 Entonces
		contador_pares = contador_pares + 1
	FinSi
	si numero3 mod 2 = 0 Entonces
		contador_pares = contador_pares + 1
	FinSi
	si numero4 mod 2 = 0 Entonces
		contador_pares = contador_pares + 1
	FinSi
	
	Escribir "La cantidad de números pares es de: ", contador_pares
	
	mayorcito = numero1
	
	si numero2 > mayorcito Entonces
		mayorcito = numero2
	FinSi
	si numero3 > mayorcito Entonces
		mayorcito = numero3
	FinSi
	si numero4 > mayorcito Entonces
		mayorcito = numero4
	FinSi
	
	Escribir "El número mayor es: ", mayorcito
	
	si numero3 mod 2 = 0 Entonces
		segundo_cuadrado = numero2 ^ 2
		Escribir "El cuadrado del segundo número es: ", segundo_cuadrado
	FinSi
	si numero1 < numero4 Entonces
		media = (numero1 + numero2 + numero3 + numero4) / 4.0
		Escribir "La media es de: ", media
	FinSi
	si numero2 > numero3 Entonces
		si numero3 >= 50 y numero3 <= 700 Entonces
			suma = numero1 + numero2 + numero3 + numero4
			
			Escribir "La suma de los 4 números es de: ", suma
		FinSi
	FinSi
FinProceso
