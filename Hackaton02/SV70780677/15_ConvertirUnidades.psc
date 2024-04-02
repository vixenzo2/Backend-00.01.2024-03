// Hacer un algoritmo en Pseint que convierta centímetros a pulgadas y libras a kilogramos.


Proceso ConvertirUnidades
    Definir cm Como Real
    Definir lb Como Real
    Definir in Como Real
    Definir kg Como Real
    
    Escribir "Ingrese un valor en centímetros:"
    Leer cm
    
    Escribir "Ingrese un valor en libras:"
    Leer lb
    
    // Convertir centímetros a pulgadas (1 pulgada = 2.54 cm)
    in <- cm / 2.54
    
    // Convertir libras a kilogramos (1 lb = 0.453592 kg)
    kg <- lb * 0.453592
    
    Escribir "El valor en pulgadas es:", in
    Escribir "El valor en kilogramos es:", kg
    
FinProceso