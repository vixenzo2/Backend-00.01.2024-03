Proceso ejercicio20
	escribir " ingrese el pirmer numero "
	leer num1
	escribir "ingreso el segundo numero "
	leer num2
	escribir " ingrese el tercer numero "
	leer num3
	escribir " ingrese el cuarto numero "
	leer num4
	contar_pares = 0
	maximo = num1
	si num2 >maximo Entonces
		maximo = num2
		
	FinSi
	si num3 > maximo Entonces
		maximo = num3
	FinSi
	si num4 >maximo Entonces
		maximo = num4
	FinSi
	si num1%2 == 0 Entonces
		contar_pares = contar_pares + 1
	FinSi
	si num2%2 == 0 Entonces
		contar_pares = contar_pares + 1
	FinSi
	si num3%2 == 0 Entonces
		contrar_pares = contar_pares +1
		
	FinSi
	si num4%2 == 0 Entonces
		contrar_pares = contar_pares +1
		
	FinSi
	
	escribir " cantidad de numero pares " , contar_pares
	escribir "el maximo es  " , maximo
	si num3%2 == 0 Entonces
		cuadrado_segundo = num2  * num2
		escribir "el cuadrado del segundo numero es ", cuadrado_segundo
	FinSi
	si num1 < num4 entonces 
		media = (num1  + num2 + num3 + num4) / 4.0
		escribir "la media de los cuatro numero es " , media
	FinSi
	si num2> num3 Entonces
		si num3 >= 50 y num3 <= 700 entonces 
			suma =num1 + num2 + num3+num4
			escribir  " la suma de los cuatros numero es : " , suma
		FinSi
	FinSi
FinProceso
