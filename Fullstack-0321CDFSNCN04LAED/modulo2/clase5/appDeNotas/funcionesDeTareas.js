let fs = require('fs');

let misFunciones = {
    listar: function () {
        let tareas = fs.readFileSync('tareas.json', 'utf-8');

        tareas = JSON.parse(tareas);

        return tareas;
    },

    agregarTarea: function () {
        console.log('agregar tarea');
    },

    nuevaFuncion: function () {
        console.log('Una nueva funcion');
    }
}

module.exports = misFunciones;