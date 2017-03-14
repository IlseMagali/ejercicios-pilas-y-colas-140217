/*--------------EJERCICIO 2 QUEUE -----------------*/
var nombres = [];
// molde para queues
function Queue() {
  this.dataStore = Array.prototype.slice.call(nombres, 0);
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.print = print;

  function enqueue (element) {
    this.dataStore.push(element);
  }
  function dequeue(){
    return this.dataStore.shift();
  }
  function print(element){
    return console.log(this.dataStore);
  }
}

// arreglo para nombres
var colaNombre = new Queue();
  for (var i = 0; i < 5; i++){
    colaNombre.enqueue(prompt("Nombre:"));
  }
// arreglo para apellidos
var colaApellido = new Queue();
  for (var i = 0; i < 5; i++){
    colaApellido.enqueue(prompt("Apellido:"));
  }

// arreglo concatenado de nombre y apellido
var colaApellidoYNombre = new Queue();
  for (var i = 0; i < 5; i++) {
  nombres.push(colaNombre.dequeue() + " " + colaApellido.dequeue());
}

document.write(nombres);
/*-------------- FIN EJERCICIO 2 QUEUE -----------------*/
