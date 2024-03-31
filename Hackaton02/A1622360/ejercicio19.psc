Proceso ejercicio19
	Definir T Como Entero
	Definir D,S Como Real
	escribir "Dias trabajados"
	leer D
	escribir "Numero identificador"
	leer T
	segun T Hacer
		caso 1 : T=01
			S<-D*56;
		caso 2 : T=11
			S<-D*64;
		caso 3 : T=21
			S<-D*80;
		caso 4 : T=31
			S<-D*48;
		De Otro Modo:
			Escribir "numero indentificador de empleado invalido"
	FinSegun
	Escribir "Salario total del trabajdor es " ,S
	
	
FinProceso
