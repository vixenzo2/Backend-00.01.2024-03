Proceso Prog_20
	
    //Hacer un algoritmo en Pseint que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:
	
	//Declaracion de variables
	Cantidad=4
	Prom=0
	Suma=0
	Sum2=0
	Dimensionar Val[Cantidad]
	may=0
	Valor2=0
	
	//Ingreso de elementos por Teclado
	para i=1 hasta cantidad Hacer
		Escribir "Ingrese el Numero ",i
		Leer Val[i]
	FinPara
	
	
	//¿Cuántos números son Pares?
	Num_Pares=0
	para i=1 hasta cantidad Hacer
		
		si (val[i] Mod 2 ==0) Entonces
			Num_Pares=Num_Pares+1
		FinSi
	FinPara
	Escribir "Cantidad de numeros pares ",Num_Pares
	
	//¿Cuál es el mayor de todos?
	si val[1] > val[2] Entonces
		may=val[1]
	SiNo
		may=val[2]
	FinSi
	
	para j=3 hasta cantidad hacer
		si val[j]>may Entonces
			may=val[j]
		FinSi
	FinPara
	Escribir "El numero mayor es ",may
	
	//Si el tercero es par, calcular el cuadrado del segundo.
	Si (val[3] Mod 2 ==0) Entonces
		Valor2=val[2]*val[2]
		Escribir "el cuadrado del segundo elemento es: ",Valor2
	SiNo
		Escribir "el tercer elemento no es par"
	FinSi
	
	
	//Si el primero es menor que el cuarto, calcular la media de los 4 números.
	si val[1] < val[4] Entonces
		para j=1 hasta cantidad hacer
			Suma=Suma+val[j]
		FinPara
		Prom=Suma/cantidad
		Escribir "El promedio de numeros es: ",Prom
	SiNo
		Escribir "El 1er elemento no es menor que el 4to elemento"
	FinSi
	
	
	//Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido 
	//entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.
	si val[2] > val[3] Entonces
		
		si val[3]>=50 y val[3]<=700
			para i=1 hasta cantidad hacer
				Sum2=Sum2+val[i]
			FinPara
			Escribir "La suma de elementos es: ",Sum2
		SiNo
			Escribir "El 3er elemento no esta en el rango <50,700>: "
		FinSi
	SiNo
		Escribir "El 2do elemento no es mayor que el 3ro elemento"
	FinSi
	
	
	
	
FinProceso
