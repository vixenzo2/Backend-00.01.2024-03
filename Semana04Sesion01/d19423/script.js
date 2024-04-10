function sumar(primerNumero, segundoNumero){
    return primerNumero + segundoNumero;
}


let resultado = sumar(33,44);
console.log(resultado);
console.log(sumar(22,99));

function hanoi(numero_discos, inicio, fin){
    
    if(numero_discos>0)
    {
       hanoi(numero_discos-1, inicio, 6-inicio-fin); //del actual a la auxiliar
       console.log("Mueve el disco "+ numero_discos + " de la torre " + inicio + " a la torre "+ fin);
       hanoi(numero_discos-1, 6-inicio-fin, fin); //de la auxiliar a la final
    }
  
  
  }
hanoi(numero_discos=4,inicio=1,fin=3);

let ejemplo = function (saludo){
    console.log(saludo)
}

ejemplo("Hola");


// Función tradicional
function sumar100 (a){
    return a + 100;
}
  
  // Desglose de la función flecha
  
  // 1. Elimina la palabra "function" y coloca la flecha entre el argumento y el corchete de apertura.
  (a) => {
    return a + 100;
  }
  
  // 2. Quita los corchetes del cuerpo y la palabra "return" — el return está implícito.
  (a) => a + 100;
  
  // 3. Suprime los paréntesis de los argumentos
  a => a + 100;

  document.getElementById("miBoton").addEventListener("click",e =>{
    e.preventDefault();
    console.log("El cliente hizo click")
  })

  let button = document.getElementById("miBoton1");
  button.addEventListener("click",  ClickMe)
  function ClickMe(e){
    e.preventDefault();
    console.log("El cliente hizo click")
  }


let objCarro={
    marca : "BMW",
    color: "Rojo",
    acelerar(){
        return "El carro esta acelerando"
    }
}

console.log(objCarro.marca);
console.log(objCarro.color);
console.log(objCarro.acelerar())

const Heladeria = function () //a
{
    let Nombre;
    let Direccion;
    function configurar(){
        document.getElementById("nombre").innerText = Nombre;

        document.getElementById("direccion").innerText = Direccion;
    }
    function eventos(){

    }
    return {
        init: function (parametros) {
            console.log(parametros)
            Nombre = parametros.nombre;
            Direccion=parametros.direccion;
            configurar();
            eventos();
        },
    };
}();

