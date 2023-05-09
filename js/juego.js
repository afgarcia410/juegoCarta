import { Baraja } from "./baraja.js";

class Juego {
  constructor() {
    this.baraja = new Baraja();
    this.barajaJugador = [this.baraja.tomarCarta()]; 
    this.barajaJugador2 = [this.baraja.tomarCarta()]; 
    
    this.mostrarJuego();
    //Para pedir carta
    document.getElementById("pedir-cartas-btn").addEventListener("click", () => {
        this.barajaJugador.push(this.baraja.tomarCarta());
        this.mostrarJuego();

        if (this.calculaPuntuacionMano(this.barajaJugador) > 7.5) {
          this.mostrarMensaje("Te pasaste de 7 y medio. ¡Perdiste!");
          this.mostrarPuntos(this.barajaJugador2);
        }
      });

    document.getElementById("plantarse-btn").addEventListener("click", () => {
      while (this.calculaPuntuacionMano(this.barajaJugador2) < 5.5) {
        this.barajaJugador2.push(this.baraja.tomarCarta());
      }
      this.mostrarJuego();
      this.juegoTerminado();
      document.getElementById("reset").addEventListener("click", () => {
        new Juego();
        document.getElementById("pedir-cartas-btn").disabled = false;
        document.getElementById("mensaje").innerHTML="";
      });
    });
  }

  sieteYMedio(carta){

    let resultado = 0; 
    for(let cartas of carta){
      this.barajaJugador.push(carta.valor);  
      this.barajaJugador.forEach(puntuacion =>{
          resultado += puntuacion;
      });    
    }
        return resultado;
  }
  juego2(){
    
  }


  //Fallo
  calculaPuntuacionMano(mano) {
    let puntos = 0;
    for (let carta of mano) {
      puntos += carta.getValor();
      //puntos += valor;
    }
    return puntos;
  }

  mostrarCartas(mano, elemento) {
    elemento.innerHTML = "";
    for (let carta of mano) {
      let cartaElemento = document.createElement("div");
      cartaElemento.classList.add("carta");
      cartaElemento.classList.add(carta.palo);
      cartaElemento.innerText = carta.numero+ " de "+carta.palo;
      
      elemento.appendChild(cartaElemento);
    }
  }

  mostrarJuego() {
    this.mostrarCartas(
      this.barajaJugador,
      document.getElementById("mano-jugador")
    );
    this.mostrarCartas(
      this.barajaJugador2,
      document.getElementById("mano-casa")
    );
    this.mostrarPuntos(this.barajaJugador);
  }

  mostrarPuntos(mano) {
    let puntos = this.calculaPuntuacionMano(mano);
    document.getElementById("puntos-jugador").innerText = "Tu puntacion: "+puntos;
  }

  mostrarMensaje(mensaje) {
    document.getElementById("mensaje").innerText = mensaje;
  }

  juegoTerminado() {
    let puntosJugador = this.calculaPuntuacionMano(this.barajaJugador);
    let puntoJugador2 = this.calculaPuntuacionMano(this.barajaJugador2);
    let totalGanada =0;
    let totalPerdida =0;
    if (puntosJugador > 7.5) {
      this.mostrarMensaje("Te pasaste de 7 y medio. ¡Perdiste!");
      document.getElementById("pedir-cartas-btn").disabled = true;
      totalPerdida++;
      document.getElementById("pPerdidas").innerHTML = totalPerdida;
    } else if (puntoJugador2 > 7.5) {
      this.mostrarMensaje("La casa se pasó de 7 y medio. ¡Ganaste!");
      document.getElementById("pedir-cartas-btn").disabled = true;
      totalGanada++;
      document.getElementById("pGanadas").innerHTML = totalGanada;
    } else if (puntosJugador > puntoJugador2) {
      this.mostrarMensaje("¡Ganaste!");
      document.getElementById("pedir-cartas-btn").disabled = true;
      totalGanada++;
      document.getElementById("pGanadas").innerHTML = totalGanada;
    } else if (puntoJugador2 > puntosJugador) {
      this.mostrarMensaje("Perdiste.");
      document.getElementById("pedir-cartas-btn").disabled = true;
      totalPerdida++;
      document.getElementById("pPerdidas").innerHTML = totalPerdida;
    } else {
      this.mostrarMensaje("¡Empate!");
      document.getElementById("pedir-cartas-btn").disabled = true;
    }

    this.mostrarPuntos(this.barajaJugador2);
  }
  
}

document.addEventListener("DOMContentLoaded", () => {
  new Juego();
});
export { Juego };