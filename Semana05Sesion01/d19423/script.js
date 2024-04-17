/*
TV
Marca: LG
Modelo: XXX3
TipoPantalla: LED
Resolucion: 4K
TamanoPantalla: 47''
Audio:  Dolby
Entradas: [hdmi x 3, AV, Cable, Antena ]
Conectividad: [wifi, red, bluethooth]
Voltaje: 220V
SO: webos
Precio: 900

verStreaming()
navegarInternet()
reproducirAudio()
verFotos()

prender()
apagar()
cambiarOrigen()
ajustarVolumen()




AUTOS
Marca: BMW
Modelo: 318i Turbo
Precio: 45000
Color: Blanco
Equipamiento: Full
TipoCombustible: Gasolina
Rendimiento: Medio
prender()
apagar()
acelerar()
frenar()
girar()

estacionar()
conduccionAutomatizada()


*/

class Autos{
    constructor(marca, modelo, precio, color,equipamiento, tipoCombustible, rendimiento){
        this.marca = marca;
        this.modelo= modelo;
        this.precio = precio;
        this.color = color;
        this.equipamiento = equipamiento;
        this.tipoCombustible = tipoCombustible;
        this.rendimiento = rendimiento;
    }
    prender() {
        console.log(`El auto ${this.marca} se esta encendiendo`)
    }
    apagar() {
        console.log(`El auto ${this.marca} se esta apagando`)
    }
}

let miAuto = new Autos("bmw","318i Turbo",45000, "Blanco", "Full", "Gasolina", "Alto");


console.log(miAuto.marca);
miAuto.prender();
let miAuto2 = new Autos("mercedes","AS450",50000, "Blanco", "Full", "Gasolina", "Alto");
miAuto2.prender();


