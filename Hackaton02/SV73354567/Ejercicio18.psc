Proceso Ejercicio18
//Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribucion de CD virgenes. Los clientes pueden adquirir los articulos
//(supongamos un �nico producto de una �nica marca) por cantidad. Los precios son://				
//$10. Si se compran unidades separadas hasta 9.
//$8. Si se compran entre 10 unidades hasta 99.
//$7. Entre 100 y 499 unidades.
//$6. Para mas de 500 unidades.
//La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en Pseint que dado un numero de CDs a vender 
//calcule el precio total para el cliente y la ganancia para el vendedor.	
	Escribir "Ingrese la cantidad de CDs a vender:"
    Leer cantidad_cd	
    Si cantidad_cd >= 1 y cantidad_cd <= 9 Entonces
        precio_unitario <- 10
    Sino
        Si cantidad_cd >= 10 y cantidad_cd <= 99 Entonces
            precio_unitario <- 8
        Sino
            Si cantidad_cd >= 100 y cantidad_cd <= 499 Entonces
                precio_unitario <- 7
            Sino
                Si cantidad_cd >= 500 Entonces
                    precio_unitario <- 6
                Sino
                    Escribir "Cantidad no valida."
                    Fin Si
            Fin Si
        Fin Si
    Fin Si	
    precio_total_cliente <- cantidad_cd * precio_unitario
    ganancia_vendedor <- precio_total_cliente * 0.0825 // 8.25% de la venta	
    Escribir "Precio total para el cliente:", precio_total_cliente
    Escribir "Ganancia para el vendedor:", ganancia_vendedor		
FinProceso
