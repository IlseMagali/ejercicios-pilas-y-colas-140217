/*--------- PILAS EJERCICIO 1 MARZO 13 2017 -------------*/
var nombres = [];

function Stack() {
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

var personaNombre = new Stack();
  for (var i = 0; i < 5; i++) {
    personaNombre.push(prompt("Escriba su nombre:"));
  }

var personaApellido = new Stack();
  for (var i = 0; i < 5; i++) {
    personaApellido.push(prompt("Escriba su apellido:"));
  }

var nombres = new Stack();
  for (var i = 0; i < 5; i++) {
    nombres.push(personaNombre.pop() + " " + personaApellido.pop());
  }

nombres.print();

/*--------------EJERCICIO 2 QUEUE -----------------*/
var nombres = [];
