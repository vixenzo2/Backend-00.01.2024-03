Algoritmo Ejercicio6
	//Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.
    Definir horasTrabajadas Como Entero;
    Definir pagoHora, pagoExtra, sueldo Como Real;
    pagoHora <- 20;
    pagoExtra <- 25;
    Escribir "Ingrese las horas trabajadas:";
    Leer horasTrabajadas;
    Si horasTrabajadas <= 40 Entonces
        sueldo <- horasTrabajadas * pagoHora;
    Sino
        sueldo <- (40 * pagoHora) + ((horasTrabajadas - 40) * pagoExtra);
    FinSi
    Escribir "El sueldo semanal es: $", sueldo;
FinAlgoritmo
