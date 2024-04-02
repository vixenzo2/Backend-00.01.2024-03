Algoritmo Ejercicio15
	//Hacer un algoritmo en Pseint que convierta centímetros a pulgadas y libras a kilogramos.
    Definir cm, lb, pulgadas, kg Como Real;
    Escribir "Ingrese la cantidad de centímetros:";
    Leer cm;
    Escribir "Ingrese la cantidad de libras:";
    Leer lb;
    pulgadas <- cm / 2.54;
    kg <- lb * 0.453592;
    Escribir cm, " centímetros son ", pulgadas, " pulgadas.";
    Escribir lb, " libras son ", kg, " kilogramos.";
FinAlgoritmo
