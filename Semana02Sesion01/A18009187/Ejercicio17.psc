Algoritmo Ejercicio17
	//Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.
    Definir hora, minuto, segundo Como Entero;
    Escribir "Ingrese la hora:";
    Leer hora;
    Escribir "Ingrese los minutos:";
    Leer minuto;
    Escribir "Ingrese los segundos:";
    Leer segundo;
    segundo <- segundo + 1;
    Si segundo == 60 Entonces
        segundo <- 0;
        minuto <- minuto + 1;
        Si minuto == 60 Entonces
            minuto <- 0;
            hora <- hora + 1;
            Si hora == 24 Entonces
                hora <- 0;
            FinSi
        FinSi
    FinSi
    Escribir "La hora un segundo después es: ", hora, ":", minuto, ":", segundo;
FinAlgoritmo
