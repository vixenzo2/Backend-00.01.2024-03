Proceso Prog_15
	
	//Hacer un algoritmo en Pseint que convierta centímetros 
	//a pulgadas y libras a kilogramos.
	
	Escribir "Ingrese el valor en cm"
	leer valor1
	Escribir "Ingrese el valor en Libras"
	leer valor2
	Cte_cm = 0.393701
	Cte_Lb = 0.453592
	Valor1_Inch=Cte_cm*valor1
	Valor2_Kg=Cte_Lb*valor2
	
	Escribir "********** 1ra Conversion ***************"
	Escribir valor1," cm equivale a ",Valor1_Inch," Inch"
	Escribir " "
	Escribir "********** 2da Conversion ***************"
	Escribir valor2," Libras equivale a ",Valor2_Kg," Kg"

FinProceso
