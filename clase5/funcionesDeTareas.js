let fs = require('fs');
let tareas = fs.readFileSync('tareas.json','utf-8');
tareas = JSON.parse(tareas)

let funcionesDeTareas = {
    listar: function(){
        console.log(tareas);
    },
    undef: function(){
        console.log('No se ha indtroducido ningun dato');
    },
    incorrecto: function(){
        console.log('Dato incorrecto');
    },
    consultar:function(n)
    {
    switch(n) {
        case "listar":
            this.listar()
            break;
        case undefined:
          this.undef();
          break;
        default:
            this.incorrecto();
      } 
    }
}

module.exports = funcionesDeTareas;
