// Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato esde $80.
Proceso DescuentoPorCantidad
    Definir cantidad, precio_unitario, total, descuento Como Entero
    Definir precio_total Como Real
    
    precio_unitario <- 80  // Precio de cada zapato
    total <- 0
    
    Escribir "Ingrese la cantidad de zapatos comprados:"
    Leer cantidad
    
    total <- cantidad * precio_unitario  // Calcular el total sin descuento
    
    // Calcular el descuento en función de la cantidad de zapatos comprados
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
            FinSi
        FinSi
    FinSi
    
    // Calcular el precio total con descuento
    precio_total <- total - (total * descuento / 100)
    
    // Mostrar el precio total con descuento
    Escribir "El precio total con descuento es:", precio_total, "soles."
    
FinProceso
