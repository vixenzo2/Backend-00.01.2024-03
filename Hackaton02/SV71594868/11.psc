Proceso ejercicio11
	Escribir "Ingresa el primer número";
    Leer a;//numero 1
    Escribir "Ingresa el segundo número:";
    Leer b;//numero 2
    Escribir  "Ingresa el tercer número:";
    Leer c;//numero 3
    Si a>b Entonces
        mayor <- a;
        menor <- b;
    SiNo
        mayor <- b;
        menor <- a;
    FinSi
    Si mayor<c Entonces
        mayor <- c;
    FinSi
    Si menor>c Entonces
        menor <- c;
    FinSi
    Escribir "Valor de mayor: ", mayor;
   
	
FinProceso
