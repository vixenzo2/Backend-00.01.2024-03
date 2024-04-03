Proceso ejercicio31
	Definir n,x,suma_impares,suma_pares,pares,impares Como Entero
	suma_impares = 0
	suma_pares = 0
	pares = 0
	impares = 0
	para x = 1 Hasta 10 Con Paso 1 Hacer
		Escribir "Ingresa un número"
		leer n
		si n mod 2 == 0 Entonces
			suma_pares = suma_pares + n
			pares = pares + 1
		sino 
			suma_impares = suma_impares + n
			impares = impares + 1
		FinSi
		
	FinPara
Escribir "La suma de los números pares es: ",suma_pares/pares
Escribir "El promedio de números impares es:",suma_impares/impares

FinProceso
