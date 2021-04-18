let notas = [10,4,5,6,8,7,9,2];

let notasPor100 = notas.map(function(n){
    return n*100;
});

console.log(notasPor100);

let notasAprobadas = notas.filter(n=>n>=7);

console.log(notasAprobadas);

let sumasNotas = notas.reduce((a,b)=>a+b);

console.log(sumasNotas);

notas.forEach((valor,indice) => console.log(('valor: '+valor+' indice: '+indice)));




