Proceso problema6
	Definir x,z Como Entero //x horas trabajadas y z como horas extras
	Definir salario Como Real
	escribir sin saltar "Ingrese número de horas trabajadas";
	leer x
	si x<=40 Entonces
		salario = x*20
	SiNo
		z = x-40 //calculo de las horas extras
		salario =20*40 +25*z
	FinSi
	Escribir "El salario semanal del obrero es :$", salario
	
FinProceso
