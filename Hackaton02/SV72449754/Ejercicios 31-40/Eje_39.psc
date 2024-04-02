Proceso Prog_39
	
//Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:
	//Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...
	// Pi=SUM((-1)^(i+1))*4*(1/(2*i-1))
	
	Escribir "Ingrese el numero de iteraciones"
	Leer n
	phi=0
	si n>=1 Entonces
		Para i=1 hasta n Hacer
			phi=phi+ ((-1)^(i+1))*(4/(2*i-1))
		FinPara
		Escribir "El valor de Pi es: ",phi
		Escribir "para ",n," iteraciones"
	SiNo
		Escribir "Ingrese un valor valido"
	FinSi
	
FinProceso
