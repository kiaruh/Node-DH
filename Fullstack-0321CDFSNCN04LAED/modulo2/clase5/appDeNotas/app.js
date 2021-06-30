const misFunciones = require('./funcionesDeTareas');


let accion = process.argv[2]
    
    switch (accion) {
    case 'listar':
        console.log('---------------');
        console.log(misFunciones.listar());
        console.log('---------------');
        break;

    case undefined:
        console.log('---------------');
        console.log('Atención - Tienes que pasar una acción');
        console.log('---------------');
        break;
        
    default:
        console.log('---------------');
        console.log('No entiendo qué quieres hacer');
        console.log('---------------');
        break;
    }