
import { Baraja } from "./baraja.js";

class Juego {
  constructor(){
    this.baraja =new Baraja();
    this.baraja.barajar();
    this.barajaJugador = [];
    this.barajaJugador2 = [];
    this.puntuacionJug1=0;
    this.puntuacionJug2=0;
  }
  
}
let juego1=new Juego();
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



