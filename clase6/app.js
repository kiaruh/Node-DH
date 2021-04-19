// let notas = [10,4,5,6,8,7,9,2];

// let notasPor100 = notas.map(function(n){
//     return n*100;
// });

// console.log(notasPor100);

// let notasAprobadas = notas.filter(n=>n>=7);

// console.log(notasAprobadas);

// let sumasNotas = notas.reduce((a,b)=>a+b);

// console.log(sumasNotas);

// notas.forEach((valor,indice) => console.log(('valor: '+valor+' indice: '+indice)));

// //---------------------------------------------------------
// let estudiantes = [
//     {nombre: 'John', promedio: 8.5, aprobado: true},
//     {nombre: 'Jane', promedio: 7, aprobado: true},
//     {nombre: 'June', promedio: 3, aprobado: false},
// ]

// let aprobados = estudiantes.filter(function(estudiantes){
//     if (estudiantes.aprobado == true){
//         return estudiantes.nombre;
//     }
// })
// let desaprobados =  estudiantes.filter(function(estudiantes){
//     if(estudiantes.aprobado ==false){
//         return estudiantes.nombre;
//     }
// })

// console.log(desaprobados);
// console.log(aprobados);

// //---------------------------------------------------------


// let destinosDelMundo = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia']

// let [ ,bariloche, ,china] = destinosDelMundo;

// console.log(bariloche);
// console.log(china);

// let auto  = {marca: 'Ferrari', kilometros: 31, color: "Rojo"};
// let { marca, color } = auto;


// console.log(marca);
// console.log(color);


// //---------------------------------------------------------

// let a = [ 'a','b','c','d','e'];
// let b = ['f','g','h','i'];
// let c = ['hola',...a,'chau'];
// let ab = [...a,...b];

// console.log(c);
// console.log(ab);

// let car = { marca:'aaa', anio:'111',modelo:'eee'};
// let a1 = {persona: 'pepe', edad:'30',...car};
// let a2 = {persona: 'lala', edad:'31',...car};

// console.log(a1);
// console.log(a2);

// function miFuncion(a,b,...c){
//     return c
// }
// console.log(miFuncion('a','b','c','d','e'));

// function sumar(...a){
//     return a.reduce((acum,num)=>acum+num);
// }


// console.log(sumar(10,20,30,40,50,60));
// console.log(sumar(2,3));

// //---------------------------------------------------------


// let fecha = new Date();
// console.log(fecha.getDate());
// console.log(fecha.getDay());
// console.log(fecha.getFullYear());
// console.log(fecha.getMonth());
// console.log(fecha.getTime());



