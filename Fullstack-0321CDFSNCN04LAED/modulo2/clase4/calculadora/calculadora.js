function sumar(num1, num2) {
    return num1 + num2
}

function restar(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1,num2) {
    if(num1 == 0 || num2 == 0){
        return 0;
    }else{
        return num1 * num2;
    }
}

function dividir(num1,num2) {
    if (num2 == 0) {
        return 'No podes dividir por cero';
    } else {
        return num1 / num2
    }
}


module.exports = { sumar, restar, multiplicar, dividir };