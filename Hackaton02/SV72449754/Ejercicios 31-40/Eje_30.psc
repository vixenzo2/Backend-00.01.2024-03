Proceso Prog_30
	//Hacer un algoritmo en Pseint para calcular la suma de los primeros cien números con un ciclo para.

	Escribir "Ingrese el numero de terminos"
	Leer n
	Sum=0
	si n<=100 Entonces
		para i=1 hasta n Hacer
			Sum=sum+i
		FinPara
		Escribir "La suma de numeros del 1 al ",n, " es: " ,Sum
	SiNo
		Escribir "ingrese un numero en el rango de <1,100>"
	FinSi
	
FinProceso
