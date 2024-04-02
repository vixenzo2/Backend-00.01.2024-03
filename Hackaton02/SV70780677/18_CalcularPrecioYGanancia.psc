// Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribución de CD vírgenes. Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:
// $10. Si se compran unidades separadas hasta 9.
// $8. Si se compran entre 10 unidades hasta 99.
// $7. Entre 100 y 499 unidades.
// $6. Para mas de 500 unidades.
// La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en Pseint que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.


Proceso CalcularPrecioYGanancia
    Definir cantidad, precio_unitario, precio_total, ganancia_vendedor Como Real
    
    // Definir los precios por cantidad
    Definir precio_hasta_9, precio_10_a_99, precio_100_a_499, precio_mas_de_500 Como Real
    precio_hasta_9 <- 10
    precio_10_a_99 <- 8
    precio_100_a_499 <- 7
    precio_mas_de_500 <- 6
    
    // Leer la cantidad de CDs a vender
    Escribir "Ingrese la cantidad de CDs a vender:"
    Leer cantidad
    
    // Calcular el precio total para el cliente
    Si cantidad <= 9 Entonces
        precio_unitario <- precio_hasta_9
    Sino
        Si cantidad <= 99 Entonces
            precio_unitario <- precio_10_a_99
        Sino
            Si cantidad <= 499 Entonces
                precio_unitario <- precio_100_a_499
            Sino
                precio_unitario <- precio_mas_de_500
            FinSi
        FinSi
    FinSi
    
    precio_total <- cantidad * precio_unitario
    
    // Calcular la ganancia para el vendedor
    ganancia_vendedor <- precio_total * 0.0825
    
    // Mostrar el precio total para el cliente y la ganancia para el vendedor
    Escribir "El precio total para el cliente es:", precio_total
    Escribir "La ganancia para el vendedor es:", ganancia_vendedor
    
FinProceso
