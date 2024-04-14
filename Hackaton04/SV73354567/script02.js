function mostrarReto2() {
    // Ocultar el contenido del reto anterior si existe
    document.getElementById("contenidoReto").innerHTML = "";

    // Ocultar Contendido Anterior"
    document.getElementById("btnReto1").style.display = "none";
    document.getElementById("btnReto2").style.display = "none";
    document.getElementById("titulo").style.display = "none";

    // Mostrar solo el texto de bienvenida como título después del botón de "Reto 1"
    var tituloBienvenida = document.createElement("h1");
    tituloBienvenida.textContent = "¡Bienvenido al Reto 2 - Desarrollo BackEnd!";
    tituloBienvenida.classList.add("TituloR2");
    document.getElementById("contenidoReto").appendChild(tituloBienvenida);

    // Agregar contenido personalizado por Html
    var contenidoPersonalizado = document.createElement("div");
    contenidoPersonalizado.innerHTML = `
    
        <div class="grid-container1"> 
            <div class="column">
            <div class="question-container1">
                <h2>Ejercicio 1</h2>
                <p>Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y edad y los retorne en un string concatenado.</p> 
                <p>“Hola mi nombre es Kevin Tenazoa Cuba y mi edad es 27</p>
                <button onclick="problema(1)">Respuesta</button>
            </div>

            <div class="question-container1">
                <h2>Ejercicio 2</h2>
                <p>Crea una función que tome números y devuelva la suma de sus cubos.</p> 
                <p>sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855</p>
                <button onclick="problema(2)">Respuesta</button>
            </div>

            <div class="question-container1">
                <h2>Ejercicio 3</h2>
                <p>Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js.</p> 
                <button onclick="problema(3)">Respuesta</button>
            </div>

            <div class="question-container1">
                <h2>Ejercicio 4</h2>
                <p>Crear una función que reciba n cantidad de argumentos y los sume (utilizar parametros rest.)</p>
                <button onclick="problema(4)">Respuesta</button>
            </div>

            <div class="question-container1">
                <h2>Ejercicio 5</h2>
                <p>Crear una función que reciba un array de valores y filtre los valores que no son string.</p> 
                <button onclick="problema5(5)">Respuesta</button>
            </div>

            <div class="question-container1">
                <h2>Ejercicio 6</h2>
                <p>Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.</p> 
                <p>minMax([1, 2, 3, 4, 5]) ➞ [1, 5]</p>                
                <button onclick="problema(6)">Respuesta</button>
            </div>

            <div class="question-container1">
                <h2>Ejercicio 7</h2>
                <p>Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.</p> 
                <p>formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"</p> 
                <button onclick="problema(7)">Respuesta</button>
            </div>

            <div class="question-container1">
                <h2>Ejercicio 8</h2>
                <p>Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.</p> 
                <p>findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]</p>                
                <button onclick="problema(8)">Respuesta</button>
            </div>

            <div class="question-container1">
                <h2>Ejercicio 9</h2>
                <p>Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.</p> 
                charIndex("hello", "l") ➞ [2, 3]</p> 
                <p>// The first "l" has index 2, the last "l" has index 3.</p>
                <button onclick="problema(9)">Respuesta</button>
            </div>

            <div class="question-container1">
                <h2>Ejercicio 10</h2>
                <p>Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.</p> 
                <p>toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]</p>                 
                <button onclick="problema(10)">Respuesta</button>
            </div>

            <div class="question-container1">
                <h2>Ejercicio 11</h2>
                <p>Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.</p>
                <p>getBudgets([</p>
                <p>{name: "John", age: 21, budget: 23000 },</p>
                <p>{name: "Steve",  age: 32, budget: 40000 },</p>
                <p>{name: "Martin",  age: 16, budget: 2700 }</p>
                <p>]) ➞ 65700</p>                   
                <button onclick="problema(11)">Respuesta</button>
            </div>

            
            </div>
            <div class="column">
            <div class="question-container1">
            <h2>Ejercicio 12</h2>
            <p>Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.</p> 
            <button onclick="problema(12)">Respuesta</button>
            </div>

            <div class="question-container1">
                <h2>Ejercicio 13</h2>
                <p>Escriba una función que convierta un objeto en una matriz de claves y valores.</p> 
                <button onclick="problema(13)">Respuesta</button>
            </div>

            <div class="question-container1">
                <h2>Ejercicio 14</h2>
                <p>Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.</p> 
                <button onclick="problema(14)">Respuesta</button>
            </div>

            <div class="question-container1">
                <h2>Ejercicio 15</h2>
                <p>Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada.</p> 
                <button onclick="problema(14)">Respuesta</button>
            </div>

            <div class="question-container1">
                <h2>Ejercicio 16</h2>
                <p>Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.</p> 
                <button onclick="problema(16)">Respuesta</button>
            </div>

            <div class="question-container1">
                <h2>Ejercicio 17</h2>
                <p>Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.</p> 
                <button onclick="problema(17)">Respuesta</button>
            </div>

            <div class="question-container1">
                <h2>Ejercicio 18</h2>
                <p>Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.</p> 
                <button onclick="problema(18)">Respuesta</button>
            </div>

            <div class="question-container1">
                <h2>Ejercicio 19</h2>
                <p>Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento) es el elemento que necesita repetirse, mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. Devuelve el resultado en una matriz.</p> 
                <button onclick="problema(19)">Respuesta</button>
            </div>

            <div class="question-container1">
            <h2>Ejercicio 20</h2>
            <p>Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las vocales en una cadena con una vocal especificada.</p> 
            <button onclick="problema(20)">Respuesta</button>
        </div>

        <div class="question-container1">
        <h2>Ejercicio 21</h2>
        <p>Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta: "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!"</p> 
        <button onclick="problema(21)">Respuesta</button>
    </div>

        <div class="question-container1">
        <h2>Ejercicio 22</h2>
        <p>Cree una función que capitalice la última letra de cada palabra.</p> 
        <button onclick="problema(22)">Respuesta</button>
        </div>

        <div>
        <div class="thanks-text">
        <a href="index.html"><p>Regresar a la página principal</p></a> 
        </div>          
        </div>      
        </div>            
    `;
    document.getElementById("contenidoReto").appendChild(contenidoPersonalizado);

    // Agregar clase al contenedor del contenido del reto 2 para aplicar estilos específicos
    document.getElementById("contenidoReto").classList.add("reto1-content");
}
// Función para ejecutar las soluciónes de los ejercicios
function problema(nroProblema) {
    switch (nroProblema) {
        case 1:
            problema1();
            break;
        case 2:
            problema2();
            break;
        case 3:
            problema3();
            break;
        case 4:
            problema4();
            break;
        case 5:
            problema5();
            break;
        case 6:
            problema6();
            break;
        case 7:
            problema7();
            break;
        case 8:
            problema8();
            break;
        case 9:
            problema9();
            break;
        case 10:
            problema10();
            break;
        case 11:
            problema11();
            break;
        case 12:
            problema12();
            break;
        case 13:
            problema13();
            break;
        case 14:
            problema14();
            break;
        case 15:
            problema15();
            break;
        case 16:
            problema16();
            break;
        case 17:
            problema17();
            break;
        case 18:
            problema18();
            break;
        case 19:
            problema19();
            break;
        case 20:
            problema20();
            break;
        case 21:
            problema21();
            break;
        case 22:
            problema22();
            break;
        default:
            break;
    }
}

// Funciones para resolver los ejercicios

function problema1() {
    const Saludo = (nombre, apellido, edad) => {
        return `Hola mi nombre es ${nombre} ${apellido} y mi edad es ${edad}`;
    };
    const resultado = Saludo("Kevin", "Tenazoa Cuba", 27);
    alert(resultado);
    console.log("Problema1")
}


function problema2() {
    function sumcub(n1, n2, n3) {
        let resultado;
        resultado = Math.pow(n1, 3) + Math.pow(n2, 3) + Math.pow(n3, 3);
        return resultado;
    }
    alert("Se esta realizando la Suma de cubos de 1, 5, 9, el cual el Resultado es: " + sumcub(1, 5, 9));
    console.log("Problema2")
}


function problema3() {
    function obtenerTipo(valor) {
        return typeof valor;
    }

    const valor1 = 10;
    const valor2 = "Hackaton04";
    const valor3 = false;
    const valor4 = [];

    alert("Solucion se mostrara en consola");
    alert("Datos a mostrar: Number, String, Boolean, Objeto");
    console.log(`El tipo de dato de ${valor1} es ${obtenerTipo(valor1)}`);
    console.log(`El tipo de dato de ${valor2} es ${obtenerTipo(valor2)}`);
    console.log(`El tipo de dato de ${valor3} es ${obtenerTipo(valor3)}`);
    console.log(`El tipo de dato de ${valor4} es ${obtenerTipo(valor4)}`);
    console.log("Problema3")
}


function problema4() {
    function sumar(...numeros) {
        return numeros.reduce((suma, num) => suma + num, 0);
    }
           
    alert("La suma de n numeros (150,6,9,50,10) es: "+sumar(150,6,9,50,10));    
    console.log("Problema4") 
}


function problema5() {
    function filtrarStrings(arr) {
        return arr.filter(valor => typeof valor === "string");
      }
      const valores = [270, "Hackaton", false, "BackEnd", 4, "Kevin"];    
      const stringsFiltrados = filtrarStrings(valores);
      alert("Los valores ingresados son: 270, Hackaton, false, BackEnd, 4, Kevin");
      alert("Los Strings son: "+stringsFiltrados);
      console.log("Problema5")

}
function problema7() {
    function sumcub(n1, n2, n3) {
        let resultado;
        resultado = Math.pow(n1, 3) + Math.pow(n2, 3) + Math.pow(n3, 3);
        return resultado;
    }
    alert("Se esta realizando la Suma de cubos de 3, 2, 10, el cual el Resultado es:" + sumcub(3, 2, 10));
    console.log("Ejercicio3")

}
function problema8() {
    function sumcub(n1, n2, n3) {
        let resultado;
        resultado = Math.pow(n1, 3) + Math.pow(n2, 3) + Math.pow(n3, 3);
        return resultado;
    }
    alert("Se esta realizando la Suma de cubos de 3, 2, 10, el cual el Resultado es:" + sumcub(3, 2, 10));
    console.log("Ejercicio3")

}
function problema9() {
    function sumcub(n1, n2, n3) {
        let resultado;
        resultado = Math.pow(n1, 3) + Math.pow(n2, 3) + Math.pow(n3, 3);
        return resultado;
    }
    alert("Se esta realizando la Suma de cubos de 3, 2, 10, el cual el Resultado es:" + sumcub(3, 2, 10));
    console.log("Ejercicio3")

}
function problema10() {
    function sumcub(n1, n2, n3) {
        let resultado;
        resultado = Math.pow(n1, 3) + Math.pow(n2, 3) + Math.pow(n3, 3);
        return resultado;
    }
    alert("Se esta realizando la Suma de cubos de 3, 2, 10, el cual el Resultado es:" + sumcub(3, 2, 10));
    console.log("Ejercicio3")

}
function problema11() {
    function sumcub(n1, n2, n3) {
        let resultado;
        resultado = Math.pow(n1, 3) + Math.pow(n2, 3) + Math.pow(n3, 3);
        return resultado;
    }
    alert("Se esta realizando la Suma de cubos de 3, 2, 10, el cual el Resultado es:" + sumcub(3, 2, 10));
    console.log("Ejercicio3")

}
function problema12() {
    function sumcub(n1, n2, n3) {
        let resultado;
        resultado = Math.pow(n1, 3) + Math.pow(n2, 3) + Math.pow(n3, 3);
        return resultado;
    }
    alert("Se esta realizando la Suma de cubos de 3, 2, 10, el cual el Resultado es:" + sumcub(3, 2, 10));
    console.log("Ejercicio3")

}
function problema13() {
    function sumcub(n1, n2, n3) {
        let resultado;
        resultado = Math.pow(n1, 3) + Math.pow(n2, 3) + Math.pow(n3, 3);
        return resultado;
    }
    alert("Se esta realizando la Suma de cubos de 3, 2, 10, el cual el Resultado es:" + sumcub(3, 2, 10));
    console.log("Ejercicio3")

}
function problema14() {
    function sumcub(n1, n2, n3) {
        let resultado;
        resultado = Math.pow(n1, 3) + Math.pow(n2, 3) + Math.pow(n3, 3);
        return resultado;
    }
    alert("Se esta realizando la Suma de cubos de 3, 2, 10, el cual el Resultado es:" + sumcub(3, 2, 10));
    console.log("Ejercicio3")

}
function problema15() {
    function sumcub(n1, n2, n3) {
        let resultado;
        resultado = Math.pow(n1, 3) + Math.pow(n2, 3) + Math.pow(n3, 3);
        return resultado;
    }
    alert("Se esta realizando la Suma de cubos de 3, 2, 10, el cual el Resultado es:" + sumcub(3, 2, 10));
    console.log("Ejercicio3")

}
function problema16() {
    function sumcub(n1, n2, n3) {
        let resultado;
        resultado = Math.pow(n1, 3) + Math.pow(n2, 3) + Math.pow(n3, 3);
        return resultado;
    }
    alert("Se esta realizando la Suma de cubos de 3, 2, 10, el cual el Resultado es:" + sumcub(3, 2, 10));
    console.log("Ejercicio3")

}
function problema17() {
    function sumcub(n1, n2, n3) {
        let resultado;
        resultado = Math.pow(n1, 3) + Math.pow(n2, 3) + Math.pow(n3, 3);
        return resultado;
    }
    alert("Se esta realizando la Suma de cubos de 3, 2, 10, el cual el Resultado es:" + sumcub(3, 2, 10));
    console.log("Ejercicio3")

}

function problema19() {
    alert("hola")
}


