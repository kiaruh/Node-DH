const operaciones = {
    suma: (a, b) => a + b,
    resta: (a, b) => a - b,
    multiplicacion: (a, b) => a * b,
}

let calculadora1 = (num1, num2, operacion) => {
    return operaciones[operacion](num1, num2);
}

console.log('usando objeto: ' + calculadora1(2, 3, 'suma'));
console.log('usando objeto: ' + calculadora1(2, 3, 'resta'));


function calculadora2 (num1, num2, operacion) {
    switch (operacion) {
        case 'suma': return operaciones.suma(num1, num2);
            
        case 'resta': return operaciones.resta(num1, num2);
           
        case 'multiplicacion':return operaciones.multiplicacion(num1, num2);
            
        default: return 'operacion no valida';
    }
}

console.log('usando switch: ' + calculadora2(4, 4, 'resta'));
console.log('usando switch: ' + calculadora2(5, 3, 'asd'));