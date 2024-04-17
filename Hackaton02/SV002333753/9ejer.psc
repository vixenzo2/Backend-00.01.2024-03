// Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.


Algoritmo CalcularAumentoSueldo
    
    Definir sueldoActual Como Real;
    Definir aumento, nuevoSueldo Como Real;
    
    
    Escribir "Ingrese el sueldo actual del trabajador:";
    Leer sueldoActual;
    
    
    Si sueldoActual > 2000 Entonces
        aumento <- sueldoActual * 0.05;  
        aumento <- sueldoActual * 0.10;  
    FinSi
   
    nuevoSueldo <- sueldoActual + aumento;
    
    Escribir "El nuevo sueldo con el aumento es: $", nuevoSueldo;
FinAlgoritmo
