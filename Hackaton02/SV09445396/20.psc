Proceso Verificar_Numeros
	
	// 20.	Hacer un algoritmo en Pseint que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:
	//		 ¿Cuántos números son Pares?
	//		 ¿Cuál es el mayor de todos?
	//		 Si el tercero es par, calcular el cuadrado del segundo.
	//		 Si el primero es menor que el cuarto, calcular la media de los 4 números.
	//	 	 Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los
	//		 valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.

	Escribir "**************************"
	Escribir "*    Verificar numeros   *"  
	Escribir "**************************"
	
	Escribir "Ingresar primer numero:"	
	Leer nNum1
	Escribir "Ingresar segundo numero:"	
	Leer nNum2
	Escribir "Ingresar tercer numero:"	
	Leer nNum3
	Escribir "Ingresar cuarto numero:"	
	Leer nNum4
	
	// Cuantos numeros son pares
	Escribir "---Primera respuesta---------------------"		
	nPares = 0
	si nNum1%2 == 0
		nPares= nPares + 1
	Finsi
	si nNum2%2 == 0
		nPares= nPares + 1
	FinSi
	si nNum3%2 == 0
		nPares= nPares + 1
	FinSi
	si nNum4%2 == 0
		nPares= nPares + 1
	FinSi
	Escribir "Los numeros pares son: ", nPares
	
	// Cual es mayor de todos
	Escribir "---Segunda respuesta---------------------"	    
	si nNum1>nNum2
		si nNum1>nNum3
			si nNum1>nNum4
				nMayor = nNum1
			SiNo
				nMayor = nNum4
			FinSi
		SiNo
			si nNum3>nNum4
				nMayor = nNum3
			SiNo
				nMayor = nNum4
			FinSi
		FinSi
	SiNo
		si nNum2>nNum3
			si nNum2>nNum4
				nMayor = nNum2
			SiNo
				nMayor = nNum4
			FinSi
		SiNo
			si nNum3>nNum4
				nMayor = nNum3
			SiNo
				nMayor = nNum4
			FinSi
		finsi
	FinSi
	Escribir "El numero mayor es: ", nMayor
	
	// Si el tercero es par, calcular el cuadrado del segundo.
	Escribir "---Tercera respuesta---------------------"	
	Si nNum3%2==0
		nCuadrado = nNum2 * nNum2
		Escribir "El cuadrado del segundo numero es: ", nCuadrado
	SiNo
		Escribir "El tercer numero no es par"
	FinSi
	
	// Si el primero es menor que el cuarto, calcular la media de los 4 números.
	Escribir "---Cuarta respuesta----------------------"	
	Si nNum1<nNum4
		nMedia = (nNum1 + nNum2 + nNum3 + nNum4)/4
		Escribir "La media de los cuatro numeros es: ", nMedia
	SiNo
		Escribir "El primer numero no es menor que el cuarto"
	FinSi
	
	// Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los
	// valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.
	Escribir "---Quinta respuesta----------------------"	
	si nNum2>nNum3
		si nNum3>=50 y nNum3<=700
			nSuma = nNum1 + nNum2 + nNum3 + nNum4
			Escribir "La suma de los cuatro numeros es: ", nSuma
		SiNo
			Escribir "No se cumple la condicion establecida"
		FinSi
	SiNo
		Escribir "No se cumple la condicion establecida"
	FinSi
	
FinProceso
