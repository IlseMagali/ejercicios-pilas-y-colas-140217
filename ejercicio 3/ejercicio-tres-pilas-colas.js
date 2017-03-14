/* ---------------- EJERCICIO 3 ------------------- */

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
