Proceso ejercicio37
	//Hacer un algoritmo en Pseint para conseguir el M.C.D de un número por medio del algoritmo de Euclides.
	
	Definir numero1, numero2, residuo Como Entero
	
	Escribir "Ingrese el primer numero: "
	Leer numero1
	Escribir "Ingrese el segundo numero"
	Leer numero2
	
	Mientras numero2 <> 0 Hacer
		residuo = numero1 Mod numero2
		numero1 = numero2
		numero2 = residuo
	FinMientras
	
	Escribir "El MCD de los numeros son: ", numero1
FinProceso
