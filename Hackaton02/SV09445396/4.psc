Proceso Numero_Menor_A_Mayor
	// 4.	Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor.
	
	Escribir "*******************************"
	Escribir "*   Numeros de menor a mayor  *"  
	Escribir "*******************************"
	
	Definir n1,n2,n3 Como Entero
	
	Escribir "Ingresar tres numeros enteros:"
	Leer n1,n2,n3
	
	Si n1>n2 
		si n1>n3 
			mayor = n1
			si n2>n3 
				medio = n2
				menor = n3
			SiNo
				medio = n3
				menor = n2
			FinSi
		SiNo
			mayor = n3
			medio  = n1
			menor = n2
		FinSi
	SiNo
		si n2>n3  
			mayor = n2
			si  n3>n1 
				medio=n3
				menor=n1
			SiNo
				medio=n1
				menor=n3
			FinSi
		SiNo
			mayor = n3
			medio = n2
			menor = n1
		FinSi
	FinSi
	
	Escribir "Los numeros ordenados de menor a mayor son :",menor,", ",medio,", y ",mayor
	
FinProceso
