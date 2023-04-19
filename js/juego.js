import { Baraja } from "./baraja.js";

class Juego {
  constructor() {
    this.baraja = new Baraja();
    //this.baraja.barajar();
    this.barajaJugador = [this.baraja.tomarCarta()];
    this.barajaJugador2 = [this.baraja.tomarCarta()];
    // this.puntuacionJug1 = 0;
    // this.puntuacionJug2 = 0;
    this.calcularPuntuacion();
    this.mostrarMano();
  }
  calcularPuntuacion() {
    this.puntuacionJug1 =this.calculaPuntuacionMano(this.barajaJugador);
    this.puntuacionJug2 =this.calculaPuntuacionMano(this.barajaJugador2);
  }
  calculaPuntuacionMano(mano){
    //Calcula la puntuacion de la mano(conjunto de cartas de una baraja) que tiene cada jugador
    let puntuacion = 0;
    for( const manos of mano){
      const valorCarta = manos.getValorNumero();
    }
    while (puntuacion>7.5) {
      
    }
    return puntuacion;
  }
  mostrarMano(){
    console.log("Las cartas del jugador 1 son: ");
    for(const carta of this.barajaJugador){
      console.log(carta.mostrarCarta());
    }
    console.log("Las cartas del jugador 2 son: ");
    for(const carta of this.barajaJugador2){
      console.log(carta.mostrarCarta());
    }
  }
  pedirCarta(){
    //Añadir otra carta a la baraja del jugador
    this.barajaJugador.push(this.baraja.tomarCarta()); //Al pedir carta, la siguiente desaparce del array baraja
    //Para mas adelante
    if(this.puntuacionJug1 >= 7.5){
      console.log("Has perdido");
    }
  }
  plantarse(){
    while(this.puntuacionJug2 <7.5){
      this.barajaJugador2.push(this.baraja.tomarCarta());
      this.calcularPuntuacion();
    }
    //Hacer metodo juegoTerminado();
    this.juegoTerminado();
  }
  juegoTerminado(){
    console.log("Las cartas del jugador 1 son: ");
    for(const carta of this.barajaJugador){
      console.log(carta.mostrarCarta());
    }
    console.log("Puntuación del jugador 1: "+this.puntuacionJug1);
    console.log("Las cartas del jugador 2 son: ");
    for(const carta of this.barajaJugador2){
      console.log(carta.mostrarCarta());
    }
    console.log("Puntuación del jugador 2: "+this.puntuacionJug2);
    if(this.puntuacionJug2>7.5){
      console.log("Enhorabuena,has ganado!!.");
    } else if (this.puntuacionJug1>7.5){
      console.log("Has perdido.")
    } else if(this.puntuacionJug1>this.puntuacionJug2){
      console.log("Enhorabuena,has ganado!!.");
    }else if(this.puntuacionJug2>this.puntuacionJug1){
      console.log("Has perdido.");
    } else{
      console.log("Habeis empatado a puntos.");
    }
  }
  
}

let juego1 = new Juego();

console.log(juego1.baraja);
console.log(juego1.pedirCarta());
console.log(juego1.mostrarMano());
console.log(juego1.baraja);
var darBtn = document.getElementById("dar").addEventListener("click",juego1.pedirCarta());

function reloadPage() {
  window.location.reload();
}
var boton = (document.getElementById("button").onclick = function () {
  reloadPage();
});