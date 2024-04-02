Proceso ejercicio40
	
	escribir "¿cuantas veces quieres que se repita?";
	leer num;
		
		pipi = 0;
		i = 2;
		j = 3;
		k = 4;
		m = 5;
		n = 6;
		
	para p = 1 hasta num con paso 1 Hacer
			pipi = pipi + (4/(i * j * k)) - (4/(k * m * n));
			i = i + 4;
			j = j + 4;
			k = k + 4;
			m = m + 4;
			n = n + 4;
	FinPara
	escribir "el numero pi es: ",(pipi + 3);
		
FinProceso
