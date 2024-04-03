Proceso ejercicio31
	//Hacer un algoritmo en Pseint parar calcular la media de los números pares e impares, sólo se ingresará diez números.
	Definir numerito, suma_pares, suma_impares, contador, contador_par, contador_impar Como Real
	
	para i = 1 hasta 10 hacer
		Escribir "Ingrese el numero: " i, ":"
		Leer numerito
		
		si numerito Mod 2 = 0 Entonces
			suma_pares = suma_pares + numerito
			contador_par = contador_par + 1
		SiNo
			suma_impares = suma_impares + numerito
			contador_impar = contador_impar + 1
		FinSi
	FinPara
	
	si contador_par > 0 Entonces
		media_par = suma_pares / contador_par
		Escribir "La media de los numeros pares es de: ", media_par
	SiNo
		Escribir "No hay numeros pares"
	FinSi
	
	si contador_impar > 0 Entonces
		media_impar = suma_impares / contador_impar
		Escribir "La media de los numeros impares es de: ", media_impar
	SiNo
		Escribir "No se ingresaron impares "
	FinSi
	
FinProceso
