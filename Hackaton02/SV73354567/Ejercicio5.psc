Proceso Ejercicio5
	//Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una promocion de descuento para vender al mayor,
	//esta dependera del numero de zapatos que se compren. Si son mas de diez, se les dara un 10% de descuento sobre el total de la compra;
	//si el numero de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son mas treinta zapatos se otorgara un 40% de descuento. 
	//El precio de cada zapato es de $80.
	precio_por_zapato <- 80	
    Escribir "Ingrese la cantidad de zapatos a comprar:"
    Leer cantidad	
    total <- cantidad * precio_por_zapato	
    Si cantidad > 30 Entonces
        descuento <- 40
    Sino
        Si cantidad > 20 Entonces
            descuento <- 20
        Sino
            Si cantidad > 10 Entonces
                descuento <- 10
            Sino
                descuento <- 0
            Fin Si
        Fin Si
    Fin Si	
    total_con_descuento <- total - (total * descuento / 100)	
    Escribir "Total a pagar sin descuento:", total
    Escribir "Descuento aplicado:", descuento, "%"
    Escribir "Total a pagar con descuento:", total_con_descuento	
FinProceso
