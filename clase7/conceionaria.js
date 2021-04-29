const autos = require('./autos')
let concesionaria = {
   autos: autos,
 
    buscarAuto: function(patente){
   let  aux = [];
   aux = autos.find(x=>x.patente === patente)
   if(aux == undefined){
      return null;
   }else{
      return aux;
   }},

   venderAuto: function(patente){
     let aux =  this.buscarAuto(patente);
     aux.vendido = true;

   },

   autosParaLaVenta:function(){
      let aux = this.autos.filter(x =>x.vendido == false)
   return aux;
   },
   
   autosNuevos: function (){
   let  aux = this.autosParaLaVenta();
   return aux.filter(x=> x.km <= 100);
   },

   listaDeVentas: function(){
      let aux2 = []
      let aux = this.autos.filter(x =>x.vendido              ==true );
      aux.filter(x=>aux2.push((x.precio)));
      return aux2
  
   },

   totalDeVentas: function(){
      let list = this.listaDeVentas();
      let total = list.reduce((a,b)=>a+b,0)
      return total;
   },
   
   puedeComprar: function(auto,persona){
      if(auto.precio <= persona.capacidadDePagoTotal && auto.precio/auto.cuotas <= persona.capacidadDePagoEnCuotas){
         return true;
      }else{
         return false
      }
      
   },

   autosQuePuedeComprar: function(persona){
      let aux = [];
      let autosVenta = this.autosParaLaVenta();
      autosVenta.map((x) => concesionaria.puedeComprar(x,persona)?aux.push(x):' ')
      return aux;
   }
   
}

 