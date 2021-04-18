const dividir = require('./dividir');
const multiplicar = require('./multiplicar');
const restar = require('./restar');
const sumar = require('./sumar');
let calculadora = (a,b,operacion)=> operacion(a,b);

// console.log(sumar(1,2));
// console.log(restar(1,2));
// console.log(multiplicar(1,2));
// console.log(dividir(1,2));
// console.log('---------');
// console.log(sumar(2,2));
// console.log(restar(2,2));
// console.log(multiplicar(0,2));
// console.log(dividir(1,0));

console.log(calculadora(2,3,dividir));
console.log(calculadora(2,3,sumar));