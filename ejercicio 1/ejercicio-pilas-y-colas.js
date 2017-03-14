
/*--------- PILAS EJERCICIO 1 MARZO 13 2017 -------------*/
var nombres = []; //arreglo que obtendrá la concatenación de nombre y apellido

function Stack() { // esta funcion es la que forma las pilas, es el molde
  var elementos = [];
  this.push = function(elemento){
  elementos.push(elemento);
  };

  this.pop = function() {
  return elementos.pop();
  };

  this.peek = function() {
  return elementos[elementos.length - 1];
  };

  this.print = function (){
  console.log(elementos.toString());
  };
}

var personaNombre = new Stack(); // este es un arreglo que se forma con las propiedades del molde
  for (var i = 0; i < 5; i++) {
    personaNombre.push(prompt("Escriba su nombre:"));
  }

var personaApellido = new Stack(); // este es un arreglo que se forma con las propiedades del molde
  for (var i = 0; i < 5; i++) {
    personaApellido.push(prompt("Escriba su apellido:"));
  }

var nombres = new Stack();
  for (var i = 0; i < 5; i++) {
    nombres.push(personaNombre.pop() + " " + personaApellido.pop());
  }

nombres.print();
/*---------  FIN PILAS EJERCICIO 1 ----- MARZO 13 2017 -------------*/

/*--------------EJERCICIO 2 QUEUE -----------------
var nombres = [];

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


var colaNombre = new Queue();
  for (var i = 0; i < 5; i++){
    colaNombre.enqueue(prompt("Nombre:"));
  }

var colaApellido = new Queue();
  for (var i = 0; i < 5; i++){
    colaApellido.enqueue(prompt("Apellido:"));
  }


var colaApellidoYNombre = new Queue();
  for (var i = 0; i < 5; i++) {
  nombres.push(colaNombre.dequeue() + " " + colaApellido.dequeue());
}

document.write(nombres);
/*-------------- FIN EJERCICIO 2 QUEUE -----------------*/

/* ---------------- EJERCICIO 3 -------------------

// cuantos usuarios se desea ingresar
var usuarios = parseInt(prompt("¿Cuántos pacientes desea ingresar?"));
var usuariosRegistrados = [];

// registrar nombres de usuarios en arreglo, molde de cola para usuarios
function Queue() {
  this.dataStore = Array.prototype.slice.call(usuariosRegistrados, 0);
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.print = print;

  function enqueue (element) {
    this.dataStore.push(element);
  }
  function dequeue(){
    return this.dataStore.shift();
  }
  function front() {
    return this.dataStore[0];
  }
  function back() {
    return this.dataStore[this.dataStore.length - 1];
  }
  function print(element){
    return console.log(this.dataStore);
  }

};
// formar la cola de usuarios con nombre y apellido, en un mismo arreglo
var colaUsuarios = new Queue();
  for (var i = 0; i < usuarios; i++){
    colaUsuarios.enqueue(prompt("Nombre y apellido:"));
  }
//generar un arreglo en el que se incluyan el usuario primero y último para mostrarlos
var mostrarUsuarioPrimeroYUltimo = new Queue();
  for (var i = 0; i < usuarios; i++); {
    usuariosRegistrados.enqueue("Primer usuario por atender : " + "\n" + colaUsuarios.front());
    usuariosRegistrados.enqueue("Último usuario por atender: " + "\n" + colaUsuarios.back());
  }

document.write(usuariosRegistrados);
