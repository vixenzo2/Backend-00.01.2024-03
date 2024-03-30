Algoritmo Ejercicio18
	//Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribución de CD vírgenes. Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:
    Definir cantidad, precioUnitario, totalVenta, ganancia Como Real;
    Escribir "Ingrese la cantidad de CDs a vender:";
    Leer cantidad;
	
    Si cantidad >= 1 Y cantidad < 10 Entonces
        precioUnitario <- 10;
    FinSi
    Si cantidad >= 10 Y cantidad < 100 Entonces
        precioUnitario <- 8;
    FinSi
    Si cantidad >= 100 Y cantidad <= 499 Entonces
        precioUnitario <- 7;
    FinSi
    Si cantidad >= 500 Entonces
        precioUnitario <- 6;
    FinSi
	
    totalVenta <- cantidad * precioUnitario;
    ganancia <- totalVenta * 0.0825;
	
    Escribir "El precio total para el cliente es: $", totalVenta;
    Escribir "La ganancia para el vendedor es: $", ganancia;
FinAlgoritmo

