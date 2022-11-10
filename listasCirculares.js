class Base{
    constructor(nombre, minutos){
      this.nombre=nombre;
      this.minutos=minutos;
      this.sig=null;
      this.ant=null;
    }
    info(){
        return "La ruta esta en la base " + this.nombre;
    }
  }
  class Ruta{
  	constructor(){
      this.primero=null;
    }
    agregar(nuevo){
    	if (this.primero==null){
        this.primero=nuevo;
        nuevo.sig=nuevo;
        nuevo.ant=nuevo;
      }else{
        nuevo.sig = this.primero;
        nuevo.ant = this.primero.ant;
        this.primero.ant.sig=nuevo;
        this.primero.ant=nuevo;
      }
    }
    actual(){
      return this.primero;
    }
    pasaAlSiguiente(){
      this.primero=this.primero.sig;
    }
    extraerActual(){
      let aux=this.primero;
      if (this.primero==null)
        return null;
      if (this.primero.sig==this.primero){
        this.primero=null;
      } else {
  	    this.primero.sig.ant=this.primero.ant;
    	  this.primero.ant.sig=this.primero.sig;
      	this.primero=this.primero.sig;
      }
      return aux;
    }
    buscar(nombre){
        let aux = this.primero;
        let long = 0;
        let temp = this.primero;
        while (temp.next!=null){
            long++;
            temp=temp.next;
        }
        let i;
        while (i <= long){
            if (nombre = aux.nombre){
                return aux;
            } else {
                aux = aux.sig;
            }
            i++;
        }
    }
    eliminar(nombre){
        let aux = this.primero;
        let long = 0;
        let temp = this.primero;
        while (temp.next!=null){
            long++;
            temp=temp.next;
        }
        if (nombre = aux){
            aux = null;
            this.aux.sig.ant=this.aux.ant;
    	    this.aux.ant.sig=this.aux.sig;
      	    this.aux=this.aux.sig;
        } else {
            aux = aux.sig;
        }
    }
    imprimir(){
        let aux = this.primero;
        let datos = "";
        let long = 0;
        let temp = this.primero;
        while (temp.sig!=null){
            long++;
            temp=temp.sig;
        }
        for (let i = 0; i <= long; i++){
            datos = datos + " " + aux.nombre;
            aux = aux.sig;
        }
        return datos;
    } 
    
  }

let ruta = new Ruta();
let base1 = new Base("Medellin", 20);
let base2 = new Base("Ceballos", 25);
let base3 = new Base("Hidago", 10);
let base4 = new Base("CDMX", 15);
ruta.agregar(base1);
ruta.agregar(base2);
ruta.agregar(base3);
ruta.agregar(base4);

function recorrido(baseInicio, horaInicio, minutoInicio, horaFin, minutoFin){
    inicio = ruta.buscar(baseInicio);
    let exactoInicio = minutoInicio;
    let exactoFin = ((horaFin - horaInicio) / 60) + minutoFin;
    let totalRecorrido = exactoFin - exactoInicio;
    for (let i = 0; i <= totalRecorrido; i++){
        if (ruta.actual.minutos != 0){
            ruta.actual.info();
            ruta.actual.minutos--;
        } else {
            ruta.pasaAlSiguiente;
        }
    }
}
//console.log(base1.minutos);
console.log(ruta.imprimir());
console.log(recorrido(base1, 9, 10, 21, 30));