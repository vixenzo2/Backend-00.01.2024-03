Proceso Prog_40
	
//Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es:
	//Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8*) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...
	// Pi=SUM{3+[(-1)^(i+1)]*4/[(2i)*(2i+1)*(2i+2)]}
	Escribir "Ingrese el numero de iteraciones"
	Leer n
	phi=0
	phi_Aux=0
	si n>=1 Entonces
		Para i=1 hasta n Hacer
			phi_Aux=phi_Aux+ ((-1)^(i+1))*(4/((2*i)*(2*i+1)*(2*i+2)))
		FinPara
		Phi=3+Phi_Aux
		Escribir "El valor de Pi es: ",phi
		Escribir "para ",n," iteraciones"
	SiNo
		Escribir "Ingrese un valor valido"
	FinSi
	
	
FinProceso
