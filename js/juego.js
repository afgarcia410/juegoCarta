/*
import { Baraja } from "./baraja.js";
import { Carta } from "./carta";
*/
class Juego {
  game() {
    for (let index = 0; index < 5; index++) {
      var resultado = azar() + azar();
      var prueba = document.getElementById("prueba");
      var win = document.getElementById("ganada");
      var winn = rondaG();
      var perd = document.getElementById("perdido");
      var perdd = rondaP();
      if (resultado >= 8) {
        console.log(resultado + ". Has perdido");
        prueba.innerHTML += resultado + ". Has perdido<br>";
      } else if (resultado == 7.5) {
        console.log(resultado + ".Has llegado a 7 y medio");
        prueba.innerHTML += resultado + "<br>";
      } else {
        console.log(resultado);
        prueba.innerHTML += resultado + "<br>";
        win.innerHTML += winn;
        perd.innerHTML += perdd;
      }
    }
  }
}
function reloadPage(){
  window.location.reload();
}
var boton = document.getElementById("button").onclick = function() {reloadPage()};

let configuracion = {
  juego: "Juego de las siete y media",
  valores: [
    {
      numero: 10,
      palo: "todos",
      valor: 0.5,
    },
    {
      numero: 11,
      palo: "todos",
      valor: 0.5,
    },
    {
      numero: 12,
      palo: "todos",
      valor: 0.5,
    },
    {
      numero: 1,
      palo: "todos",
      valor: 1,
    },
    {
      numero: 2,
      palo: "todos",
      valor: 2,
    },
    {
      numero: 3,
      palo: "todos",
      valor: 3,
    },
    {
      numero: 4,
      palo: "todos",
      valor: 4,
    },
    {
      numero: 5,
      palo: "todos",
      valor: 5,
    },
    {
      numero: 6,
      palo: "todos",
      valor: 6,
    },
    {
      numero: 7,
      palo: "todos",
      valor: 7,
    },
  ],
  excluidas: [
    {
      numero: 8,
      palo: "todos",
    },
    {
      numero: 9,
      palo: "todos",
    },
  ],
};
/*
function numerosDisponibles(number){
  if(number.valores == 1){
    return true;
  }
  return false;
}
*/
const filterJSON = configuracion.valores.filter(function(e){
  return e.numero;
});
console.log(filterJSON);



