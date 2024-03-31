Proceso sin_titulo
	Definir numeroIngresado, iteracion, divisionResiduoCero Como Entero;
	
    Escribir "Determinar si un número ingresado, es un número primo.";
    Escribir "Teclea un número entero: ";
    Leer numeroIngresado;
	
    iteracion = 1;
	
    divisionResiduoCero = 0;
	
    Mientras iteracion <= numeroIngresado Hacer
		
        Si(numeroIngresado % iteracion == 0) Entonces
            divisionResiduoCero = divisionResiduoCero + 1;
        FinSi
		
        iteracion = iteracion + 1;
		
    FinMientras
	
    Si(divisionResiduoCero == 2) Entonces
        Escribir "El número que ingresaste es un número primo.";
    SiNo
        Escribir "El número que ingresaste NO es un número primo.";
    FinSi
FinProceso
