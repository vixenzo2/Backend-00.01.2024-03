Proceso ejercico38
	Definir i,n,suma Como Entero
	escribir" ingresa un numero"
	leer n
	i=2
	suma=0
	mientras i<=n Hacer
		si n%i== 0 Entonces
			suma=suma + trunc(n/i)
			
		FinSi
		i= i + 1
	FinMientras
	si suma ==n Entonces
		escribir"el numero es perfecto"
	sino
		escribir"el numero NO es perfecto"
	FinSi
FinProceso
