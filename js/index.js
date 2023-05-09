import { Baraja } from "./baraja.js";
import { Juego } from "./juego.js";

let game = new Juego();
let baraja = new Baraja();
let barajaJugador = [baraja.tomarCarta()];
let barajaJugador2 = [baraja.tomarCarta()];
let puntoJugador = game.calculaPuntuacionMano(barajaJugador);
let puntoJugador2 = game.calculaPuntuacionMano(barajaJugador);
let ganada= document.getElementById("pGanadas");
let totalGanada =0;
let perdida= document.getElementById("pPerdida");
let totalPerdida =0;
const pedirCarta = document.getElementById("pedir-cartas-btn");
const plantarse = document.getElementById("plantarse-btn");
const reset = document.getElementById("reset");
let manoJugador = document.getElementById("mano-jugador");
let mensaje = document.getElementById("mensaje");

pedirCarta.addEventListener("click", () => {
  barajaJugador.push(baraja.tomarCarta());
  game.mostrarCartas(barajaJugador,manoJugador);

  if (game.calculaPuntuacionMano(barajaJugador) > 7.5) {
    baraja.mostrarMensaje("Te pasaste de 7 y medio. ¡Perdiste!");
    baraja.mostrarPuntos(barajaJugador2);
    totalPerdida++;
    console.log(totalPerdida)
    perdida.innerHTML = totalPerdida;
  }else{
    
  }
});

pedirCarta.addEventListener("click", () => {
  barajaJugador.push(game.baraja.tomarCarta());
  this.mostrarJuego();

  if (this.calculaPuntuacionMano(this.barajaJugador) > 7.5) {
    this.mostrarMensaje("Te pasaste de 7 y medio. ¡Perdiste!");
    this.mostrarPuntos(this.barajaJugador2);
    mensaje.innerHTML= "Te pasaste de 7 y medio. ¡Perdiste!";
  } 
});

plantarse.addEventListener("click", () => {
while (game.calculaPuntuacionMano(barajaJugador2) < 5.5) {
  barajaJugador2.push(game.baraja.tomarCarta());
}
});

reset.addEventListener("click", () => {
  game = new Juego();
});
game.mostrarJuego();
