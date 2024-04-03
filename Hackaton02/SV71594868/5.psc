Proceso ejercicio5
	Escribir "Ingresa el valor de numero de zapatos:";
	//x sera el numero de zapatos
    Leer x;
    subtotal <- x*80;
    descuento <- 0;
    Si x>10 Y x<=20 Entonces
        descuento <- subtotal*0.1;
    FinSi
    Si x>20 Y x<=30 Entonces
        descuento <- subtotal*0.2;
    FinSi
    Si x>30 Entonces
        descuento <- subtotal*0.4;
    FinSi
    total <- subtotal-descuento;
    Escribir "Valor de descuento: ", descuento;
    Escribir "Valor de subtotal: ", subtotal;
    Escribir "Valor de total: ", total;
FinProceso
