let fs = require('fs');
let tareas = fs.readFileSync('tareas.json','utf-8');
tareas = JSON.parse(tareas)

let funcionesDeTareas = {
    listar: function(){
        //console.log(tareas);
        tareas.forEach(element => { console.log('Tarea: '+ element.tarea + ' '+'Estado: ' +element.estado );            
        });
        
    },
    undef: function(){
        console.log('No se ha indtroducido ningun dato');
    },
    incorrecto: function(){
        console.log('Dato incorrecto');
    },
    createJson: function(n){
        
    },
    createSave: function(n){

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
        // case "CJ":
        //     this.createJson();
        // break;
        // case "CS":
        //     this.createSave();
        // break;
        default:
            this.incorrecto();
      } 
    }
}

module.exports = funcionesDeTareas;
