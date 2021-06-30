
// Funcion saludar toma un nombre, si no viene un nombre el valor por defecto es 'quien seas'
function saludar(nombre = 'quien seas'){
    console.log('Bienvenido ' + nombre);
}

function saludar2(nombre) {
    console.log('Bienvenido '+ nombre);
    return 'Bienvenido '+ nombre;
    console.log('Esto no se ejecuta porque hay un return antes');
}

// saludar('Agustin')
// saludar('Barbara')
// saludar()
// saludar('Barbara')


// console.log(saludar2('Viviana'))


function esPar(unNumero){
    if (unNumero == undefined) {
        return 'Por favor ingrese un numero para utilizar la función';
    }else if (unNumero % 2  == 0) {
        return 'El número ' + unNumero + ' es par';
    } else {
        return 'El número ' + unNumero + ' es impar';
    } 
}

// console.log(esPar(7))
// console.log(esPar())


function anterior(unNumero) {
    return unNumero - 1;
}

function triple(unNumero) {
    return unNumero * 3;
}

function anteriorDelTriple(unNumero) {
   let resultado =  triple(unNumero);
    resultado =  anterior(resultado);
    return resultado;
}

// console.log('El anterior del numero 4 es '+ anterior(4));
// console.log('El triple de 3 es '+ triple(3));
// console.log('El anterior del triple 5 es ' + anteriorDelTriple(5));



let estudiantes = [
  {
    nombre: 'Alvaro',
    promedio : 9,
    curso : 'Android',
  },
  {
    nombre: 'Daniel',
    promedio : 6,
    curso : 'Full Stack',
  },
  {
    nombre: 'Alexis',
    promedio : 3,
    curso : 'iOS',
  }
]

let agregueEstudiante = estudiantes.unshift({
  nombre: "Mariana",

promedio: 9,

curso: "Full Stack"
})

console.log(estudiantes);
console.log(agregueEstudiante);