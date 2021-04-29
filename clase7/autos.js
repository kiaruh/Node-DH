

// En base a las definiciones técnicas tomadas con el equipo deberás declarar la variable autos. Esta debe contener los siguientes vehículos:
// El primer auto es un Ford Fiesta Azul, del 2019, con 200 kilómetros, cuyo precio es 150000, disponible en 12 cuotas, con la patente APL123 que no está vendido.
// El segundo auto es un Toyota Corolla Blanco, del 2019, 0 kilómetros, cuyo precio es 100000, disponible en 14 cuotas, con la patente JJK116 que no está vendido.
// Cada auto debe tener los siguientes atributos: marca, modelo, precio, km, color, cuotas, anio, patente, vendido.


function Auto(marca,modelo,color,anio,km,precio,cuotas,patente,vendido){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.km = km;
    this.precio = precio;
    this.cuotas = cuotas;
    this.patente = patente;
    this.vendido = vendido;
}

let auto1 = new Auto('Ford', 'Fiesta', 'Azul', 2019, 200, 150000, 12, 'APL123', false);
let auto2 = new Auto('Toyota', 'Corolla', 'Blanco', 2019, 0, 100000, 14, 'JJK116',false);
let autos = [auto1,auto2];

module.exports = autos;

// let autoA = {
//     marca: 'Ford',
//     modelo: 'Fiesta',
//     color: 'Azul',
//     anio: 2019,
//     km: 200,
//     precio: 150000,
//     cuotas: 12,
//     patente: 'APL123',
//     vendido: false
// }
// let autoB = {
//     marca: 'Toyota',
//     modelo: 'Corolla',
//     color: 'Blanco',
//     anio: 2019,
//     km: 0,
//     precio: 100000,
//     cuotas: 14,
//     patente: 'JJK116',
//     vendido: false
// }


// let autos = [autoA,autoB]

module.exports = autos;