
//Ejercicio 1
const ejercicio1 = document.querySelector(".eje1");
ejercicio1.addEventListener('click', ()=>{
    let numero = prompt("Ingrese un número:");
if (numero.length === 3) {
  alert("El número tiene tres dígitos.");
} else {
  alert("El número no tiene tres dígitos.");
}
});
//Ejercicio 2
const ejercicio2 = document.querySelector(".eje2");
ejercicio2.addEventListener('click', ()=>{
    let numero = parseInt(prompt("Ingrese un número entero:"));
    if (numero < 0) {
      alert("El número es negativo.");
    } else {
      alert("El número no es negativo.");
    } 
});
//Ejercicio 3
const ejercicio3 = document.querySelector(".eje3");
ejercicio3.addEventListener('click', ()=>{
    let numero = prompt("Ingrese un número:");
    if (numero.endsWith('4')) {
      alert("El número termina en 4.");
    } else {
      alert("El número no termina en 4.");
    }
});
//Ejercicio 4 ayudaaaa
const ejercicio4 = document.querySelector(".eje4");
ejercicio4.addEventListener('click', ()=>{
    let numeros = [parseInt(prompt("Ingrese el primer número:")), parseInt(prompt("Ingrese el segundo número:")), parseInt(prompt("Ingrese el tercer número:"))];
    numeros.sort((a, b) => a - b);
    alert(`Números de menor a mayor: ${numeros.join(", ")}`); 
});
//Ejercicio 5
const ejercicio5 = document.querySelector(".eje5");
ejercicio5.addEventListener('click', ()=>{
    let cantidadZapatos = parseInt(prompt("Ingrese la cantidad de zapatos:"));
    let precioZapato = 80;
    let totalCompra = cantidadZapatos * precioZapato;
    let descuento = 0;
    
    if (cantidadZapatos > 10 && cantidadZapatos <= 20) {
      descuento = totalCompra * 0.1;
    } else if (cantidadZapatos > 20 && cantidadZapatos <= 30) {
      descuento = totalCompra * 0.2;
    } else if (cantidadZapatos > 30) {
      descuento = totalCompra * 0.4;
    }
    
    alert("El total a pagar con descuento es: $" + (totalCompra - descuento));   
});
//Ejercicio 6
const ejercicio6 = document.querySelector(".eje6");
ejercicio6.addEventListener('click', ()=>{
    let horasTrabajadas = parseInt(prompt("Ingrese las horas trabajadas:"));
    let sueldo = 0;
    
    if (horasTrabajadas <= 40) {
      sueldo = horasTrabajadas * 20;
    } else {
      sueldo = (40 * 20) + ((horasTrabajadas - 40) * 25);
    }
    
    alert("El sueldo semanal es: $" + sueldo);  
});
//Ejercicio 7
const ejercicio7 = document.querySelector(".eje7");
ejercicio7.addEventListener('click', ()=>{
    let tipoMembresia = prompt("Ingrese el tipo de membresía (A, B, C):").toUpperCase();
    let precioCompra = parseFloat(prompt("Ingrese el precio de la compra:"));
    let descuento;
    
    switch (tipoMembresia) {
      case 'A':
        descuento = precioCompra * 0.1;
        break;
      case 'B':
        descuento = precioCompra * 0.15;
        break;
      case 'C':
        descuento = precioCompra * 0.2;
        break;
      default:
        alert("Tipo de membresía inválido.");
        descuento = 0;
    }
    alert("El total a pagar con descuento es: $" + (precioCompra - descuento));
});
//Ejercicio 8
const ejercicio8 = document.querySelector(".eje8");
ejercicio8.addEventListener('click', ()=>{
    let notas = [parseFloat(prompt("Ingrese la primera nota:")), parseFloat(prompt("Ingrese la segunda nota:")), parseFloat(prompt("Ingrese la tercera nota:"))];
    let promedio = notas.reduce((a, b) => a + b, 0) / notas.length;
    
    if (promedio >= 11) {
      alert("El estudiante aprobó.");
    } else {
      alert("El estudiante no aprobó.");
    }   
});
//Ejercicio 9
const ejercicio9 = document.querySelector(".eje9");
ejercicio9.addEventListener('click', ()=>{
    let sueldoActual = parseFloat(prompt("Ingrese el sueldo actual del trabajador:"));
    let aumento = sueldoActual > 2000 ? sueldoActual * 0.05 : sueldoActual * 0.1;
    alert("El nuevo sueldo del trabajador es: $" + (sueldoActual + aumento));  
});
//Ejercicio 10
const ejercicio10 = document.querySelector(".eje10");
ejercicio10.addEventListener('click', ()=>{
    let numero = parseInt(prompt("Ingrese un número:"));
    if (numero % 2 === 0) {
      alert("El número es par.");
    } else {
      alert("El número es impar.");
    }
  
});
//Ejercicio 11
const ejercicio11 = document.querySelector(".eje11");
ejercicio11.addEventListener('click', ()=>{
    let numeros = [parseInt(prompt("Ingrese el primer número:")), parseInt(prompt("Ingrese el segundo número:")), parseInt(prompt("Ingrese el tercer número:"))];
    let mayor = Math.max(...numeros);
    alert(`El número mayor es: ${mayor}`); 
});
//Ejercicio 12
const ejercicio12 = document.querySelector(".eje12");
ejercicio12.addEventListener('click', ()=>{
    let numero1 = parseInt(prompt("Ingrese el primer número:"));
    let numero2 = parseInt(prompt("Ingrese el segundo número:"));
    let mayor = Math.max(numero1, numero2);
    alert(`El número mayor es: ${mayor}`);
});
//Ejercicio 13
const ejercicio13 = document.querySelector(".eje13");
ejercicio13.addEventListener('click', ()=>{
    let letra = prompt("Ingrese una letra:").toLowerCase();
    if (['a', 'e', 'i', 'o', 'u'].includes(letra)) {
      alert("La letra es una vocal.");
    } else {
      alert("La letra no es una vocal.");
    }
});
//Ejercicio 14
const ejercicio14 = document.querySelector(".eje14");
ejercicio14.addEventListener('click', ()=>{
    let numero = parseInt(prompt("Ingrese un número entre 1 y 10:"));
    let numerosPrimos = [2, 3, 5, 7];
    let esPrimo = numerosPrimos.includes(numero);
    
    if (numero < 1 || numero > 10) {
      alert("Número fuera del rango.");
    } else {
      alert(esPrimo ? "El número es primo." : "El número no es primo.");
    }
});
//Ejercicio 15
const ejercicio15 = document.querySelector(".eje15");
ejercicio15.addEventListener('click', ()=>{
    let centimetros = parseFloat(prompt("Ingrese los centímetros:"));
    let pulgadas = centimetros / 2.54;
    alert(`${centimetros} cm son ${pulgadas} pulgadas.`);
    
    let libras = parseFloat(prompt("Ingrese las libras:"));
    let kilogramos = libras * 0.453592;
    alert(`${libras} libras son ${kilogramos} kilogramos`);    
});
//Ejercicio 16
const ejercicio16 = document.querySelector(".eje16");
ejercicio16.addEventListener('click', ()=>{
    let numero = parseInt(prompt("Ingrese un número del 1 al 7:"));
    let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado","Domingo"];
    alert(`El día correspondiente es: ${dias[numero - 1]}`);
     
});
//Ejercicio 17
const ejercicio17 = document.querySelector(".eje17");
ejercicio17.addEventListener('click', ()=>{
    let hora = parseInt(prompt("Ingrese la hora:"));
    let minuto = parseInt(prompt("Ingrese los minutos:"));
    let segundo = parseInt(prompt("Ingrese los segundos:")) + 1;
    
    if (segundo === 60) {
      segundo = 0;
      minuto += 1;
      if (minuto === 60) {
        minuto = 0;
        hora += 1;
        if (hora === 24) {
          hora = 0;
        }
      }
    }
    
    alert(`La hora en un segundo será: ${hora}:${minuto}:${segundo}`); 
});
//Ejercicio 18
const ejercicio18 = document.querySelector(".eje18");
ejercicio18.addEventListener('click', ()=>{
    let cds = parseInt(prompt("Ingrese el número de CDs a vender:"));
    let precioUnitario = cds >= 500 ? 6 : cds >= 100 ? 7 : cds >= 10 ? 8 : 10;
    let precioTotal = cds * precioUnitario;
    let gananciaVendedor = precioTotal * 0.0825;
    
    alert(`El precio total para el cliente es: $${precioTotal} y la ganancia para el vendedor es:${gananciaVendedor}`);
    
});
//Ejercicio 19
const ejercicio19 = document.querySelector(".eje19");
ejercicio19.addEventListener('click', ()=>{
    let idEmpleado = parseInt(prompt("Ingrese el número identificador del empleado:"));
    let diasTrabajados = parseInt(prompt("Ingrese la cantidad de días trabajados:"));
    let salarios = {
      56: 56,
      64: 64,
      80: 80,
      48: 48
    };
    let salarioTotal = salarios[idEmpleado] * diasTrabajados;
    alert(`El salario total a pagar es: ${salarioTotal}`);
    
});

//Ejercicio 21
const ejercicio21 = document.querySelector(".eje21");
ejercicio21.addEventListener('click', ()=>{
    function factorial(numero) {
        if (numero === 0 || numero === 1) {
          return 1;
        } else {
          return numero * factorial(numero - 1);
        }
      }
      let numero = parseInt(prompt("Ingrese un número para calcular su factorial:"));
      alert("El factorial de " + numero + " es " + factorial(numero));
       
});
//Ejercicio 22
const ejercicio22 = document.querySelector(".eje22");
ejercicio22.addEventListener('click', ()=>{
    let n = parseInt(prompt("Ingrese n para calcular la suma de los primeros n números:"));
    let suma = (n * (n + 1)) / 2;
    alert(`La suma de los primeros ${n} números es:  ${suma}`);
    
});
//Ejercicio 23
const ejercicio23 = document.querySelector(".eje23");
ejercicio23.addEventListener('click', ()=>{
    let n = parseInt(prompt("Ingrese n para calcular la suma de los números impares menores o iguales a n:"));
    let suma = 0;
    for (let i = 1; i <= n; i += 2) {
      suma += i;
    }
    alert(`La suma de los números impares menores o iguales a  ${n}  es:  ${suma}`);
    
});
//Ejercicio 24
const ejercicio24 = document.querySelector(".eje24");
ejercicio24.addEventListener('click', ()=>{
    let suma = 0;
    for (let i = 0; i <= 1000; i += 2) {
      suma += i;
    }
    alert(`La suma de todos los números pares hasta el 1000 es: ${suma}`);
    
});