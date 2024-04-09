const $btn = document.getElementById('btn-read-number')
const $number = document.getElementById('number')

const $btn2 = document.getElementById('btn-read-number-2')
const $numberEntero = document.getElementById('number-entero')

const $btn3 = document.getElementById('btn-read-number-3')
const $ultimoDigito = document.getElementById('ultimo-digito')

const numbers = document.getElementById("numbers");
const result = document.getElementById("result");

const result5 = document.getElementById("result5");
const cantidadZ = document.getElementById('cantidadZ')

const result6 = document.getElementById("result6");
const horaTrabajada = document.getElementById('horaTrabajada')

const result7 = document.getElementById("result7")

const notaObtenida = document.getElementById("notaObtenida")
const result8 = document.getElementById("result8")

const $btn35 = document.getElementById('btn-read-number-35')
const $textOpacity = document.getElementById('list-numbers-opacity');
const $opacity = document.getElementById('opacity-list')
const $maxNumber = document.getElementById('num-max')

const $btn16 = document.getElementById('btn-read-number-16')
const $nameDay = document.getElementById('name-day')
const $numbeNilakantha = document.getElementById('number-nilakantha')

const $btn40 = document.getElementById('btn-read-number-40')
const $textPi = document.getElementById('text-pi');

const $btn38 = document.getElementById('btn-read-number-38')
const $numberPerfect = document.getElementById('number-perfect')
const $textPerfect = document.getElementById('num-perfect')

const $btn21 = document.getElementById('btn-read-number-21')
const $numberFactorial = document.getElementById('number-factorial')
const $textFactorial = document.getElementById('text-factorial')

const $btn24 = document.getElementById('btn-read-number-24')
const $numberPar = document.getElementById('number-par')
const $textPar = document.getElementById('text-par')

//! Ejercicio 01
$btn.addEventListener('click', () => {

  if (!$number.value.length || $number.value.length == 0) {
    return alert('Ingrese numero a validar')
  }

  if ($number.value.length == 3) {
    alert('El numero ingresado tiene 3 cifras.')
  } else {
    alert('No tiene 3 cifras')
  }
})

//! Ejercicio 02 <!--De esta forma, voy directo a la funcion sin haber asignado valor a mis variables -->
$btn2.addEventListener('click', function () {
  if ($numberEntero.value % 2 == 0) {
    return alert('El numero ingresado debe ser entero')
  }
  if ($numberEntero.value >= 0) {
    alert('El numero ingresado NO es negativo')
  }
  else {
    alert('El numero ingresado SI es negativo')
  }
})

//! Ejercicio 03 <!--De esta forma, voy directo a la funcion sin haber asignado valor a mis variables -->
$btn3.addEventListener('click', function () {
  if ($ultimoDigito.value % 10 == 4) {
    alert('El numero ingresado termina en 4')
  } else {
    alert('El numero ingresado no termina en 4')
  }
})

//! Ejercicio 04 
//parseint - prompt son para asignar numeros enteros a la declaracion -->
//los prompt entregan cadenas de texto, pasrseInt convierte las cadenas de texto a numeros
//las funciones se dividen en 2: lo que va en parentesis es: parametros...
//Los argumentos de la función son los valores que recibe la función cuando se invoca (es decir todo el desarrollo donde se le asigna valor)
function Ordenado(num1, num2, num3) {

  var num1 = parseInt(prompt(`introduzca el primer número`))
  var num2 = parseInt(prompt(`intrioduzca el segundo número`))
  var num3 = parseInt(prompt(`introduzca el tercer número`))

  if (num1 >= num2 && num1 >= num3 && num2 >= num3) {
    result.textContent = `El orden de mayor a menor es: ${num1}, ${num2}, ${num3}`;
  } else if (num1 >= num2 && num1 >= num3 && num2 <= num3) {
    result.textContent = `El orden de mayor a menor es: ${num1}, ${num3}, ${num2}`;

  } else if (num2 >= num1 && num2 >= num3 && num1 >= num3) {
    result.textContent = `El orden de mayor a menor es: ${num2}, ${num1}, ${num3}`;
  } else if (num2 >= num1 && num2 >= num3 && num1 <= num3) {
    result.textContent = `El orden de mayor a menor es: ${num2}, ${num3}, ${num1}`;

  } else if (num3 >= num1 && num3 >= num2 && num1 >= num2) {
    result.textContent = `El orden de mayor a menor es: ${num3}, ${num1}, ${num2}`;
  } else if (num3 >= num1 && num3 >= num2 && num1 <= num2) {
    result.textContent = `El orden de mayor a menor es: ${num3}, ${num2}, ${num1}`;
  }
  numbers.textContent = `los números introducidos son ${num1}, ${num2}, ${num3}`;
}

//! Ejercicio 5 <-- if (cantidadZapato % 2 != 0) el modulo sirve para hallar numeros pares)

function ventaZapato(cantidadZapato, totalPago) {

  var cantidadZapato = parseInt(prompt(`introduzca la cantidad`));
  var totalPago;

  if (cantidadZapato == 0) {
    alert('El numero ingresado no es valido, ingrese un numero por favor')
  }
  if (cantidadZapato > 10) {
    totalPago = (80 * cantidadZapato) * 0.9
    result5.textContent = `El total a pagar es: ${totalPago}`
  } else if (cantidadZapato <= 10) {
    totalPago = cantidadZapato * 80
  }
  result5.textContent = `El total a pagar es: ${totalPago}`
  if (cantidadZapato > 20 && cantidadZapato < 30) {
    totalPago = (80 * cantidadZapato) * 0.8
    result5.textContent = `El total a pagar es: ${totalPago}`
  } else if (cantidadZapato > 30) {
    totalPago = (80 * cantidadZapato) * 0.6
    result5.textContent = `El total a pagar es: ${totalPago}`
  }
  cantidadZ.textContent = `La cantidad comprada es: ${cantidadZapato}`
}

//! Ejercicio 06
function sueldoTrabajador(horas, pagoSueldo) {

  var horas = prompt('Ingresar la cantidad de horas trabajadas')
  var pagoSueldo;

  if (horas <= 40) {
    pagoSueldo = (horas * 20)
    result6.textContent = `El total del sueldo a pagar es: $ ${pagoSueldo}`
  } else if (horas > 40) {
    pagoSueldo = 800 + ((horas - 40) * 25)
    result6.textContent = `El total del sueldo a pagar es: $ ${pagoSueldo}`
  }
  horaTrabajada.textContent = `El total de horas trabajada es:  ${horas}`
}

//! Ejercicio 07
function descuentoHelado(membresia, descHelado) {
  var membresia = prompt('ingrese tipo de membresia: "A" "B" "C" ')
  var descHelado;

  if (membresia == "A") {
    descHelado = "10%"
    result7.textContent = `Usted tiene un descuento de ${descHelado} por tener membresia tipo ${membresia}`
  } if (membresia == "B") {
    descHelado = "15%"
    result7.textContent = `Usted tiene un descuento de ${descHelado} por tener membresia tipo ${membresia}`
  } else if (membresia == "C") {
    descHelado = "20%"
    result7.textContent = `Usted tiene un descuento de ${descHelado} por tener membresia tipo ${membresia}`
  }

}

//! Ejercicio 08
function promedioAlumno(nota1, nota2, nota3, promedioAlumn) {

  var nota1 = parseInt(prompt('Ingrese la primera nota'))
  var nota2 = parseInt(prompt('Ingrese la segunnda nota'))
  var nota3 = parseInt(prompt('Ingrese la tercera nota'))
var promedioAlumn = (nota1+nota2+nota3)/3

if (promedioAlumn > 10){
    result8.textContent = `Usted tiene nota aprobatoria`
} else if (promedioAlumn<10){
  result8.textContent = `Usted No tiene nota aprobatoria`
  }
  notaObtenida.textContent = `Usted tiene como promedio la nota de: ${promedioAlumn}`
}


  //! Ejercicio 16

  window.addEventListener("load", () => handlerDay());
  $btn16.addEventListener('click', () => handlerDay())

  function handlerDay() {
    const numberDay = Math.floor(Math.random() * 7) + 1
    switch (numberDay) {
      case 1:
        $nameDay.innerHTML = `El numero ${numberDay} corresponde a Lunes`
        // console.log("lunes")
        break;
      case 2:
        $nameDay.innerHTML = `El numero ${numberDay} corresponde a martes`
        break;
      case 3:
        $nameDay.innerHTML = `El numero ${numberDay} corresponde a miercoles`
        break;
      case 4:
        $nameDay.innerHTML = `El numero ${numberDay} corresponde a jueves`
        break;
      case 5:
        $nameDay.innerHTML = `El numero ${numberDay} corresponde a viernes`
        break;
      case 6:
        $nameDay.innerHTML = `El numero ${numberDay} corresponde a sabado`
        break;
      case 7:
        $nameDay.innerHTML = `El numero ${numberDay} corresponde a domingo`
        break;
      default:
        $nameDay.innerHTML = `Error`
        console.log("dia invalido")
    }
  }

  //! Ejercicio 35
  $btn35.addEventListener('click', () => {
    const listNumer = []
    for (let i = 0; i < 20; i++) {
      const numeroSelected = Math.floor(Math.random() * (1000 - 100))
      listNumer.push(numeroSelected)
    }
    const numMax = Math.max(...listNumer)
    $maxNumber.innerHTML = numMax.toString()
    const text = listNumer.join('-').toString()
    $textOpacity.innerHTML = text
    $opacity.style.opacity = 1;
  })

  //! Ejercicio 40
  $btn40.addEventListener('click', () => {
    if ($numbeNilakantha.value.length == 0) {
      return alert('Ingrese numero a validar')
    }

    let pi = 3;
    let signo = 1;

    for (let i = 2; i <= 2 * $numbeNilakantha.value; i += 2) {
      pi += 4 / (i * (i + 1) * (i + 2)) * signo;

      signo += -1
    }
    $textPi.innerHTML = pi.toString()
  })


  //! Ejercicio 38
  $btn38.addEventListener('click', () => {

    const number = parseInt($numberPerfect.value);

    if ($numberPerfect.value.length == 0) {
      return alert('Ingrese numero a validar')
    }

    let sumaDivisores = 0;
    for (let i = 1; i <= number / 2; i++) {
      if (number % i === 0) {
        sumaDivisores += i;
      }
    }

    if (sumaDivisores === number) {
      $textPerfect.innerHTML = `El ${number} es un numero perfectp`
    } else {
      $textPerfect.innerHTML = `El ${number} no es perfecto`
    }
  })


  //! Ejercicio 21
  $btn21.addEventListener('click', () => {
    const number = parseInt($numberFactorial.value);
    let result = 1;
    if ($numberFactorial.value.length == 0) {
      return alert('Ingrese numero a validar')
    }

    for (let i = 1; i <= number; i++) {
      result = result * i
    }

    $textFactorial.innerHTML = `El factorial de ${number}! es ${result}`
  })


  //! Ejercicio 24
  $btn24.addEventListener('click', () => {
    const number = parseInt($numberPar.value);
    let result = 0;

    if ($numberPar.value.length == 0) {
      return alert('Ingrese numero a validar')
    }

    for (let i = 1; i <= number; i++) {
      if (i % 2 === 0) {
        result += i
      }
    }

    $textPar.innerHTML = `El suma de pares es de: ${result}`
  })