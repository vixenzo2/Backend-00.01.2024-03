// Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
//Tipo A 10% de descuento Tipo B 15% de descuento Tipo C 20% de descuento

Proceso DescuentoPorMembresia
    Definir tipo_membresia Como Caracter
    Definir precio_total, descuento, precio_con_descuento Como Real
    
    Escribir "Ingrese el tipo de membresía del cliente (A, B o C):"
    Leer tipo_membresia
    
    Escribir "Ingrese el precio total de la compra:"
    Leer precio_total
    
    // Calcular el descuento según el tipo de membresía
    Segun tipo_membresia
        "A":
            descuento <- 0.10
        "B":
            descuento <- 0.15
        "C":
            descuento <- 0.20
        Otro:
            Escribir "Tipo de membresía no válido."
		
    FinSegun
    
    // Calcular el precio total con descuento
    precio_con_descuento <- precio_total - (precio_total * descuento)
    
    // Mostrar el precio total con descuento
    Escribir "El precio total con descuento es:", precio_con_descuento
    
FinProceso
