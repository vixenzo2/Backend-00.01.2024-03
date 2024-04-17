// function sumar(primerNumero, segundoNumero){
//     return primerNumero + segundoNumero;
// }


// let resultado = sumar(33,44);
// console.log(resultado);
// console.log(sumar(22,99));

// function hanoi(numero_discos, inicio, fin){

//     if(numero_discos>0)
//     {
//        hanoi(numero_discos-1, inicio, 6-inicio-fin); //del actual a la auxiliar
//        console.log("Mueve el disco "+ numero_discos + " de la torre " + inicio + " a la torre "+ fin);
//        hanoi(numero_discos-1, 6-inicio-fin, fin); //de la auxiliar a la final
//     }


//   }
// hanoi(numero_discos=4,inicio=1,fin=3);

// let ejemplo = function (saludo){
//     console.log(saludo)
// }

// ejemplo("Hola");


// // Función tradicional
// function sumar100 (a){
//     return a + 100;
// }

//   // Desglose de la función flecha

//   // 1. Elimina la palabra "function" y coloca la flecha entre el argumento y el corchete de apertura.
//   (a) => {
//     return a + 100;
//   }

//   // 2. Quita los corchetes del cuerpo y la palabra "return" — el return está implícito.
//   (a) => a + 100;

//   // 3. Suprime los paréntesis de los argumentos
//   a => a + 100;

//   document.getElementById("miBoton").addEventListener("click",e =>{
//     e.preventDefault();
//     console.log("El cliente hizo click")
//   })

//   let button = document.getElementById("miBoton1");
//   button.addEventListener("click",  ClickMe)
//   function ClickMe(e){
//     e.preventDefault();
//     console.log("El cliente hizo click")
//   }


// let objCarro={
//     marca : "BMW",
//     color: "Rojo",
//     acelerar(){
//         return "El carro esta acelerando"
//     }
// }

// console.log(objCarro.marca);
// console.log(objCarro.color);
// console.log(objCarro.acelerar())


let arrClientes = [];
let arrDespachos = [];
let arrCaja = [];
let $table = $('#table');
let $tableDespachos = $('#tableDespachos');
let $tableCaja = $('#tableCaja');
const Heladeria = function () //a
{
    let Nombre;
    let Direccion;
    function configurar() {
        document.getElementById("nombre").innerText = Nombre;
        document.getElementById("direccion").innerText = Direccion;
    }
    function eventos() {

        $table.bootstrapTable({ data: arrClientes })
        $tableDespachos.bootstrapTable({ data: arrDespachos })
        $tableCaja.bootstrapTable({ data: arrCaja })


        let btnCrearCliente = document.getElementById("crearCliente");
        btnCrearCliente.addEventListener("click", crearCliente)

        document.getElementById("cerrarVentana").addEventListener("click", (e) => {
            e.preventDefault();
            document.getElementById("infoCliente").style.display = "none";
        })
        document.getElementById("verOrdenes").addEventListener("click", (e) => {
            e.preventDefault();
            $table.bootstrapTable('load', arrClientes)
            $tableDespachos.bootstrapTable('load', arrDespachos)
            //$table.bootstrapTable({data: arrClientes})
            document.getElementById("tblOrdenes").style.display = "block";
        })
        document.getElementById("verDespachos").addEventListener("click", (e) => {
            e.preventDefault();
            $tableDespachos.bootstrapTable('load', arrDespachos)
            $table.bootstrapTable('load', arrClientes)
            //$table.bootstrapTable({data: arrClientes})
            document.getElementById("tblDespachos").style.display = "block";
        })
        document.getElementById("verCaja").addEventListener("click", (e) => {
            e.preventDefault();
            $tableCaja.bootstrapTable('load', arrCaja)
            document.getElementById("tblCaja").style.display = "block";
        })




    }

    function crearCliente() {
        let nombre = prompt("Escribe tu Nombre");
        let documento = prompt("Escribe tu documento");
        let telefono = prompt("Escribe tu telefono");

        let objCliente = {
            nombre,
            documento,
            telefono,
            helado: {},
            estado: true,
            precio: 0,
            cobrado : false,
            comprarHelado() {
                let sabor = prompt("Escoje tu sabor")
                let tamano = prompt("Escoje tu tamaño")
                let toppis = prompt("Escoje tus toppins")
                this.helado.sabor = sabor;
                this.helado.tamano = tamano;
                this.helado.toppis = toppis;

            }
        };
        objCliente.comprarHelado();

        cargarInfoCliente(objCliente);
        document.getElementById("infoCliente").style.display = "block";
        arrClientes.push(objCliente);

        console.log(arrClientes)
    }
    function cargarInfoCliente(obj) {
        document.getElementById("nombreCliente").value = obj.nombre;
        document.getElementById("telefonoCliente").value = obj.telefono;
        document.getElementById("saborHelado").value = obj.helado.sabor;
        document.getElementById("tamanoHelado").value = obj.helado.tamano;
        document.getElementById("toppisHelado").value = obj.helado.toppis;

    }


    return {
        init: function (parametros) {
            console.log(parametros)
            Nombre = parametros.nombre;
            Direccion = parametros.direccion;
            configurar();
            eventos();
        },
    };
}();

function ordenesFormatter(value, row, index) {
    if (row.estado) {
        return [
            '<a class="like" href="javascript:void(0)" id="btnDespachar" title="Like">',
            '<i class="fa fa-heart">Despachar</i>',
            '</a>  '
        ].join('')
    }
}
function despachoFormatter(value, row, index) {
    if (row.estado) {
        return [
            '<a class="like" href="javascript:void(0)" id="btnDespachar" title="Like">',
            '<i class="fa fa-heart">Entregar</i>',
            '</a>  '
        ].join('')
    }
}
function cajaFormatter(value, row, index) {
    if (row.estado) {
        return [
            '<a class="like" href="javascript:void(0)" id="btnDespachar" title="Like">',
            '<i class="fa fa-heart">Cobrar</i>',
            '</a>  '
        ].join('')
    }
}

function cobradoFormatter(value, row, index) {
    if (row.cobrado) {
        return [
            '<a class="like" href="javascript:void(0)" id="btnDespachar" title="Like">',
            '<i class="fa-regular fa-sack-dollar">Cobrado</i>',
            '</a>  '
        ].join('')
    }else{
        return [
            '<a class="like" href="javascript:void(0)" id="btnDespachar" title="Like">',
            '<i class="fa-solid fa-circle-dollar-to-slot">Por Cobrar</i>',
            '</a>  '
        ].join('')
    }
}

window.ordenesEvents = {
    'click .like': function (e, value, row, index) {
        despacharHelado(row)
        //alert('You click like action, row: ' + JSON.stringify(row))
    },
    'click .remove': function (e, value, row, index) {
        $table.bootstrapTable('remove', {
            field: 'id',
            values: [row.id]
        })
    }
}
window.despachoEvents = {
    'click .like': function (e, value, row, index) {
        entregarHelado(row)
        //alert('You click like action, row: ' + JSON.stringify(row))
    },
    'click .remove': function (e, value, row, index) {
        $table.bootstrapTable('remove', {
            field: 'id',
            values: [row.id]
        })
    }
}
window.cajaEvents = {
    'click .like': function (e, value, row, index) {
        cobrarHelado(row)
        //alert('You click like action, row: ' + JSON.stringify(row))
    },
    'click .remove': function (e, value, row, index) {
        $table.bootstrapTable('remove', {
            field: 'id',
            values: [row.id]
        })
    }
}

function despacharHelado(obj) {
    console.log(arrClientes);
    arrDespachos.push(obj);
    const index = arrClientes.indexOf(obj);
    console.log(index);
    if (index > -1) { // only splice array when item is found
        arrClientes.splice(index, 1); // 2nd parameter means remove one item only
    }
    console.log(arrClientes);
    $table.bootstrapTable('load', arrClientes);
    console.log(obj);
}

function entregarHelado(obj) {
    console.log(arrCaja);
    arrCaja.push(obj);
    const index = arrDespachos.indexOf(obj);
    console.log(index);
    if (index > -1) { // only splice array when item is found
        arrDespachos.splice(index, 1); // 2nd parameter means remove one item only
    }
    console.log(arrDespachos);
    $tableDespachos.bootstrapTable('load', arrDespachos);
    console.log(obj);
}

function cobrarHelado(obj) {
    console.log(arrCaja);
    const index = arrCaja.indexOf(obj);
    let precio = prompt("Pon el precio cobrado")
    console.log(index);
    if (index > -1) { // only splice array when item is found
        arrCaja[index].cobrado = true; 
        arrCaja[index].precio = precio; 
    }
    console.log(arrCaja);
    $tableCaja.bootstrapTable('load', arrCaja);
    console.log(obj);
}

function idFormatter() {
    return 'Total'
  }

  function nameFormatter(data) {
    return data.length
  }

  function priceFormatter(data) {
    var field = this.field
    return '$' + data.map(function (row) {
      return +row[field]
    }).reduce(function (sum, i) {
      return sum + i
    }, 0)
  }
/**
 * Vender Helados
 * Comprar Insumos
 * 
 * Clientes
 * -> Comprar Helados
 * Vendedores
 * -> Vendemos Helados
 * -> Compran Insumos
 * Proveedores
 * -> vendemos Insumos
 * Heladero
 * -> Prepara Helados
 * -> Insumos
 * -> Helados
 */