Proceso Salir_del_Programa
	
	Escribir "***********************************"
	Escribir "*    Continuar con el programa    *"  
	Escribir "***********************************"
	
	nCont = 0
	Repetir
		nCont = nCont + 1 
		Escribir "Proceso: ",nCont
		
		Escribir "Continuar con el programa Si[S] o Mo[N]"
		Leer cOpc
	Hasta Que cOpc=="N" o cOpc="n"
	
	Escribir "Salio del programa !"	
	
FinProceso
