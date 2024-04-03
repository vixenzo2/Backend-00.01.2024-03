Proceso Entero_Negativo
	// 2.	Hacer un algoritmo en Pseint que lea un número entero por el teclado y determinar si es negativo.
	
	Escribir "*******************************"
	Escribir "*     Numero es negativo      *"  
	Escribir "*******************************"
	
	Escribir "Ingresar un numero entero:"
	Leer numero
	
	Escribir entero
	si numero - trunc(numero) == 0 
		Escribir "El numero es un entero"
		si numero < 0 
			Escribir "y es negativo"
		sino
			Escribir "y es positivo"			
		FinSi
	SiNo
		Escribir "El numero no es entero, ingresar un numero entero"
	FinSi
	
FinProceso
