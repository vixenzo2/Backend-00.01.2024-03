function ejecutar(nEjercicio) {
    switch (nEjercicio) {
      case 1:
        ejercicio1();
        break;
      case 2:
        ejercicio2();
        break;
      case 3:
        ejercicio3();
        break;
      case 4:
        ejercicio4();
        break;
      case 5:
        ejercicio5();
        break;
      case 6:
        ejercicio6();
        break;
      case 7:
        ejercicio7();
        break;
      case 8:
        ejercicio8();
        break;
      case 9:
        ejercicio9();
        break;
      case 10:
        ejercicio10();
        break;
  
      case 11:
        ejercicio11();
        break;
      case 12:
        ejercicio12();
        break;
      case 13:
        ejercicio13();
        break;
      case 14:
        ejercicio14();
        break;
      case 15:
        ejercicio15();
        break;
      case 16:
        ejercicio16();
        break;
      case 17:
        ejercicio17();
        break;
      case 18:
        ejercicio18();
        break;
      case 19:
        ejercicio19();
        break;
      case 20:
        ejercicio20();
        break;
  
      case 21:
        ejercicio21();
        break;
      case 22:
        ejercicio22();
        break;
      case 23:
        ejercicio23();
        break;
      case 24:
        ejercicio24();
        break;
      case 25:
        ejercicio25();
        break;
      case 26:
        ejercicio26();
        break;
      case 27:
        ejercicio27();
        break;
      case 28:
        ejercicio28();
        break;
      case 29:
        ejercicio29();
        break;
      case 30:
        ejercicio30();
        break;
  
      case 31:
        ejercicio31();
        break;
      case 32:
        ejercicio32();
        break;
      case 33:
        ejercicio33();
        break;
      case 34:
        ejercicio34();
        break;
      case 35:
        ejercicio35();
        break;
      case 36:
        ejercicio36();
        break;
      case 37:
        ejercicio37();
        break;
      case 38:
        ejercicio38();
        break;
      case 39:
        ejercicio39();
        break;
      case 40:
        ejercicio40();
        break;
  
      default:
    break;
    }
  }





  /* 1.	Hacer un algoritmo que lea un numero por el teclado y determinar si tiene tres digitos. */
  function ejercicio1() {
    let numero = Number.parseInt(prompt("Escribe tu numero"));
    console.log(numero)
    if (!isNaN(numero)) {
        if (numero > 99 && numero < 1000) {
            alert("tiene 3 digitos");
        }
        else {
            alert("No tiene 3 digitos");
        }
    }
    else {
        alert("Lo que ingreso no son numeros");
    }
    console.log("Ejercicio 1")
}




/*2.	Hacer un algoritmo que lea un numero entero por el teclado y determinar si es negativo.  */
function ejercicio2() {
    let numero = Number.parseInt(prompt("Por favor, ingresa un número entero:"));
    if (!isNaN(numero)) {
        if (numero < 0) {
            alert("El número ingresado es negativo.");
        }
        else if (numero === 0) {
            alert("El número ingresado es cero, no es positivo ni negativo.");
        }
        else {
            alert("El número ingresado es positivo.");
        }
    }
    else {
        alert("Lo que ingreso no son numeros");
    }
    console.log("Ejercicio 2")
}






/*3.	Hacer un algoritmo que lea un numero y determinar si termina en 4.    */
function ejercicio3(){
  let Num =Number.parseInt(prompt("Por favor, ingresa un número Valido:"));
  if (((Num+6) % 10) ==0) {
    alert("El numero acaba en 4")
  }
  else {
    alert("El numero no acaba en 4")
  }

}




/*4.	Hacer un algoritmo que lea tres numeros enteros y los muestre de menor a mayor.   */
function ejercicio4(){
  let Num1 =Number.parseInt(prompt("Por favor, ingrese el 1er número Valido:"));
  let Num2 =Number.parseInt(prompt("Por favor, ingrese el 2do número Valido:"));
  let Num3 =Number.parseInt(prompt("Por favor, ingrese el 3er número Valido:"));
  let mayor=0, medio=0,menor=0

  if (Num1>=Num2) {
      if (Num2>=Num3){
        mayor=Num1
        medio=Num2
        menor=Num3
      }
      else {
            if (Num1>=Num3){
              mayor=Num1
              medio=Num3
              menor=Num2
            }
            else {
              mayor=Num3
              medio=Num1
              menor=Num2
            }
          }
 }

  else {

      if (Num1>=Num3){
          mayor=Num2
          medio=Num1
          menor=Num3
      }
      else {
          if (Num2>=Num3){
            mayor=Num2
            medio=Num3
            menor=Num1
          }
          else
            mayor=Num3
            medio=Num2
            menor=Num1
          }
        }
    alert ("El numero mayor es: " + mayor + "\nEl numero medio es: "+ medio + "\nEl numero menor es: "+ menor)
}






/*5.	Hacer un algoritmo para una tienda de zapatos que tiene una promocion de descuento para vender al mayor,
      esta dependera del numero de zapatos que se compren.
      * Si son mas de diez, se les dara un 10% de descuento sobre el total de la compra;
      * si el numero de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento;
      * si son mas treinta zapatos se otorgara un 40% de descuento.
      El precio de cada zapato es de $80.*/

      function ejercicio5(){
        let Num =Number.parseInt(prompt("Por favor, ingresa un número Valido:"));
        let importe=0,Desc=0,precio=0,Taza=0,Total=0
        
        if (((Num+6) % 10) ==0) {
          alert("El numero acaba en 4")
        }
        else {
          alert("El numero no acaba en 4")
        }
      
      }








/*6.	Hacer un algoritmo para ayudar a un trabajador a saber cual sera su sueldo semanal,se sabe que
  		si trabaja 40 horas o menos, se le debe pagar $20 por hora, pero
  		si trabaja mas de 40 horas entonces las horas extras se le pagaron a $25 por hora.*/



/*7.	Hacer un algoritmo para una tienda de helado que da un descuento por compra a sus
  		clientes con membresia dependiendo de su tipo,
 	    solo existen tres tipos de membresia, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
 	    Tipo A 10% de descuento Tipo B 15% de descuento Tipo C 20% de descuento */



//8.	Hacer un algoritmo para calcular el promedio de tres notas y determinar si el estudiante aprob� o no.

/*9.	Hacer un algoritmo para determinar el aumento de un trabajador,
   		se debe tomar en cuenta que
  		si ganaba mas de $2000 tendra un aumento del 5%,
  		si generaba menos de $2000 su aumento sera de un 10%. */


/*10.	Hacer un algoritmo que diga si un numero es par o impar.  */


/*11.	Hacer un algoritmo que lea tres numeros y diga cual es el mayor.  */

//12.	Hacer un algoritmo que lea dos numeros y diga cual es el mayor.

//13.	Hacer un algoritmo que lea una letra y diga si es una vocal

//14.	Hacer un algoritmo que lea un entero positivo del 1 al diez y al 9 y determine si es un n�mero primo.

//15.	Hacer un algoritmo que convierta centimetros a pulgadas y libras a kilogramos.

//16.	Hacer un algoritmo que lea un numero y segun ese numero, indique el dia que corresponde.

//17.	Hacer un algoritmo donde se ingrese una hora y nos calcule la hora dentro de un segundo.

/*18.	Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribucion de CD virgenes.
      Los clientes pueden adquirir los articulos (supongamos un unico producto de una unica marca) por cantidad. Los precios son:
  	  $10. Si se compran unidades separadas hasta 9.
 	    $8. Si se compran entre 10 unidades hasta 99.
  	  $7. Entre 100 y 499 unidades.
  	  $6. Para mas de 500 unidades.
      La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en Pseint que dado un n�mero
      de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.  */


/*19. Hacer un algoritmo para una helader�a se tienen 4 tipos de empleados ordenados de la siguiente forma con su n�mero
  		identificador y salario diario correspondiente:
  		Cajero (56$/d�a).
  		Servidor (64$/d�a).
  		Preparador de mezclas (80$/d�a).
  		Mantenimiento (48$/d�a).
  		El due�o de la tienda desea tener un programa donde s�lo ingrese dos n�meros enteros que representen al n�mero
  		identificador del empleado y la cantidad de d�as que trabaj� en la semana (6 d�as m�ximos). Y el programa le mostrar�
    	por pantalla la cantidad de dinero que el due�o le debe pagar al empleado que ingres� */



/*20. Hacer un algoritmo que que lea 4 n�meros enteros positivos y verifique y realice las siguientes operaciones:
  		�Cu�ntos n�meros son Pares?
  		�Cu�l es el mayor de todos?
  		Si el tercero es par, calcular el cuadrado del segundo.
  		Si el primero es menor que el cuarto, calcular la media de los 4 n�meros.
  	 	Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los
  		valores 50 y 700. Si cumple se cumple la segunda condici�n, calcular la suma de los 4 n�meros. */


/*21. Hacer un algoritmo que permita calcular el factorial de un n�mero. */

/*23.	Hacer un algoritmo en Pseint para calcular la suma de los n�meros
      impares menores o iguales a n  */


//24.	Hacer un algoritmo para realizar la suma de todos los números pares hasta el 1000.

//25.	Hacer un algoritmo para calcular el factorial de un n�mero de una forma distinta.


//26.	Hacer un algoritmo para calcular el resto y cociente por medio de restas sucesivas.

/*27. Hacer un algoritmo para determinar la media de una lista indefinida de numeros positivos,
      se debe acabar el programa al ingresar un numero negativo.  */


/*28.	Hacer un algoritmo para calcular la suma de los primeros cien numeros con un ciclo repetir.  */

/*29.	Hacer un algoritmo para calcular la suma de los primeros cien numeros con un ciclo mientras.  */


/*30.	Hacer un algoritmo para calcular la suma de los primeros cien números con un ciclo para.   */

/*31.	Hacer un algoritmo parar calcular la media de los n�meros pares e impares, solo se ingresara diez numeros.   */


/*32. Se quiere saber cual es la ciudad con la poblacion de mas personas,
      son tres provincias y once ciudades, hacer un algoritmo en Pseint
      que nos permita saber eso. (NO HAY DATOS SUFICIENTES)    */


/*33.	Hacer un algoritmo que permita al usuario continuar con el programa.   */


/*34.	Hacer un algoritmo que imprima la tabla de multiplicar de los numeros del uno nueve   */

/*35.	Hacer un algoritmo que nos permita saber cu�l es el numero mayor y menor,
      se debe ingresar solo veinte numeros. /*


/*36.	Hacer un algoritmo para calcular la serie de Fibonacc.     */
function ejercicio36(){
  let Num =Number.parseInt(prompt("Por favor, ingresa el numero de Terminos de la serie de Fonobacci:"));
  let Arreglo=[]

  if (Num>=1){
  
    if (Num>=1){
      Arreglo[0]=0
    }

    if (Num>=2){
      Arreglo[1]=1
    }

    if (Num>=3) {
      for (let i=2;i<Num;i++){
        Arreglo[i]=Arreglo[i-1]+Arreglo[i-2];   
      }
    }

    alert ("Los " + Num + " Terminos de la serie de Finobacci son:"+ "\n "+Arreglo);
  }

  else{
    alert("Ingrese un valor valido");
  }
}





/*37.	Hacer un algoritmo para conseguir el M.C.D de un numero por medio del algoritmo de Euclides.  */
  function ejercicio37(){
    let Num1 =Number.parseInt(prompt("Por favor, ingresa el 1er Numero:"));
    let Num2 =Number.parseInt(prompt("Por favor, ingresa el 2do Numero:"));
    let Diff1=0 ,Diff2=1,Q=0,MCD=0

   if(Num1!=Num2 && Num1!=0 && Num2!=0){
      if (Num1>Num2) {
        Diff1=Num1-Num2;
        Q=Num2;
        while (Diff2!=0) {
          Diff2=Q%Diff1
          if (Diff2==0){
            MCD=diff1
            alert("El MCD  de los numeros ingresados es: " + MCD)
          }

          Q=Diff1;
          Diff2=Diff1;
        }
      }

      else{
        Diff1=Num2-Num1;
        Q=Num1;
        while (Diff2!=0) {
          Diff2=Q%Diff1
          if (Diff2==0){
            MCD=diff1
            alert("El MCD  de los numeros ingresados es: " + MCD)
          }
          Q=Diff1;
          Diff2=Diff1;
        }
      }

      
   }
   
   else if (Num1==Num2 && Num1!=0 && Num2!=0) {
       MCD=Num1
       alert("El MCD  de los numeros ingresados es: " + MCD)
   }
   else{
      alert("Ingrese Numeros validos");
   }
}
  




/*38.	Hacer un algoritmo que nos permita saber si un numero es un numero perfecto.    */
        function ejercicio38(){
          let Num =Number.parseInt(prompt("Por favor, ingresa el numero de iteraciones:"));
          let Div=[],sum=0,cont=0
        
          //Busqueda de Divisores del NUmero ingresado
          if (Num>=0) {
            for (let i=2;i<=Num;i++){
                if ((Num % i)==0){
                  Div[cont]=Num/i; 
                  cont++;
                }       
            }

            //Calculo de la suma de divisores
            for (let j=0;j<cont;j++){
              sum=sum+Div[j];     
            }

            //Evaluacion siel numero es perfecto
            if((Num==sum)){
              alert (Div+"\nEl numero es Perfecto");
            }
            else{
              alert (Div+"\nEl numero no es Perfecto");
            }
          }

          else{
            alert("Ingrese un valor valido");
          }
        }




/*39. Hacer un algoritmo en Pseint que cumpla con la aproximacion del numero pi con la serie de Gregory-Leibniz.
      La formula que se debe aplicar es:
      Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ... */

      function ejercicio39(){
        let Num =Number.parseInt(prompt("Por favor, ingresa el numero de iteraciones:"));
        let Phi=0

        if (Num>=1) {
          for (let i=1;i<=Num;i++){
            Phi=Phi + ((-1)**(i+1))*(4/(2*i-1));       
          }

          alert ("El valor de PI es: " + Phi + "\nPara "+ Num + " Iteraciones");
        }

        else{
          alert("Ingrese un valor valido");
        }
      }




/*40.	Hacer un algoritmo que cumpla con la aproximacion del numero pi con la serie de Nilakantha.
	    La formula que se debe aplicar es:
	    Pi = = 3 + 4/(234) - 4/(456) + 4/(678) - 4/(8910) + 4/(101112) - 4/(121314) ...*/

      function ejercicio40(){
        let Num =Number.parseInt(prompt("Por favor, ingresa el numero de iteraciones:"));
        let Phi=0,Phi_Aux=0

        if (Num>=1) {
          for (let i=1;i<=Num;i++){
            Phi_Aux=Phi_Aux + ((-1)**(i+1))*(4/((2*i)*(2*i+1)*(2*i+2)));       
          }

          Phi=3+Phi_Aux;
          alert ("El valor de PI es: " + Phi + "\nPara "+ Num + " Iteraciones");

        }
        else{
          alert("Ingrese un valor valido");
        }
       
      
      }



