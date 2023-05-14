import { Baraja } from "./baraja.js";
import { Juego } from "./juego.js";
let normas = {
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
  ],
  descartes: [
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
let juego = new Juego(normas);
let juego2 = new Juego(normas);
const botonCarta = document.getElementById("pedir-cartas-btn");
const plantarse = document.getElementById("plantarse-btn");
const botonReset = document.getElementById("botonReset");

const boton7ymedio = document.getElementById("boton7ymedio");
const botonBurro = document.getElementById("botonBurro");

let titulo1 = document.getElementById("titulo1");
let titulo2 = document.getElementById("titulo2");
let titulo3 = document.getElementById("titulo3");
let titulo4 = document.getElementById("titulo4");
let titulo5 = document.getElementById("titulo5");
let titulo6 = document.getElementById("titulo6");
let titulo7 = document.getElementById("titulo7");

botonCarta.style.display = "none";
plantarse.style.display = "none";
botonReset.style.display = "none";
titulo1.style.display = "none";
titulo2.style.display = "none";
titulo3.style.display = "none";
titulo4.style.display = "none";
titulo5.style.display = "none";
titulo6.style.display = "none";
titulo7.style.display = "none";
// juego.sistema = 2; //problema de que no obtiene un valor de sistema
boton7ymedio.onclick = function () {
  juego.sistema = 1; //Para diferenciar el tipo de juego los divido en 1 para 7ymedio y 2 para el burro
  botonCarta.style.display = "block";
  plantarse.style.display = "block";
  botonReset.style.display = "block";
  boton7ymedio.style.display = "none";
  botonBurro.style.display = "none";
  titulo1.style.display = "inline-block";
  titulo2.style.display = "inline-block";
  titulo3.style.display = "inline-block";
  titulo4.style.display = "inline-block";
  titulo6.style.display = "inline-block";
  titulo7.style.display = "inline-block";
};
botonBurro.onclick = function () {
  juego.sistema = 2;
  botonCarta.style.display = "block";
  plantarse.style.display = "none";
  botonReset.style.display = "block";
  boton7ymedio.style.display = "none";
  botonBurro.style.display = "none";
  titulo1.style.display = "inline-block";
  titulo5.style.display = "inline-block";
  titulo3.style.display = "inline-block";
  titulo4.style.display = "inline-block";
};

let carta = document.getElementById("carta");
let puntuacionCartas = document.getElementById("puntuacionCartas");
let carta2 = document.getElementById("carta2");
let puntuacionCartas2 = document.getElementById("puntuacionCartas2");
let contadorCartas = document.getElementById("contadorCartas");
let mensajeEstado = document.getElementById("mensajeEstado");
let ganadas = document.getElementById("ganadas");
let perdidas = document.getElementById("perdidas");
let totalPerdidas = 0;
let totalGanadas = 0;
let cartaJugador;
let cartaCasa;
let valorC;
let valorCasa = 1;
botonCarta.onclick = function () {
  if (juego.sistema == 1) {
    cartaJugador = juego.baraja.reparteCarta();
    console.log(cartaJugador);
    carta.innerHTML += cartaJugador.numero + " de " + cartaJugador.palo;
    valorC = juego.sieteYmedio(cartaJugador);
    console.log(valorC);
    if (valorC > 7.5) {
      puntuacionCartas.innerHTML = valorC;
      mensajeEstado.innerHTML = "Has perdido";
      botonCarta.disabled = true;
      totalPerdidas++;
      perdidas.innerHTML = totalPerdidas;
    } else if (valorC == 7.5) {
      puntuacionCartas.innerHTML = valorC;
      mensajeEstado.innerHTML = "Has ganado";
      botonCarta.disabled = true;
      totalGanadas++;
      ganadas.innerHTML = totalGanadas;
    } else {
      puntuacionCartas.innerHTML = valorC;
    }
  } else {
    let cartaJugador;
    cartaJugador = juego.baraja.reparteCarta();
    carta.innerHTML += cartaJugador.numero + " " + cartaJugador.palo + " ";
    let cartaContador = juego.burro();
    if (cartaJugador.numero == cartaContador) {
      contadorCartas.innerHTML = cartaContador;
      mensajeEstado.innerHTML = "Has perdido";
      botonCarta.disabled = true;
      totalPerdidas++;
      perdidas.innerHTML = totalPerdidas;
    } else {
      contadorCartas.innerHTML = cartaContador;
    }
  }
};
plantarse.addEventListener("click", () => {
  botonCarta.disabled = true;
  cartaCasa = juego2.baraja.reparteCarta();
  valorCasa = juego2.sieteYmedio(cartaCasa);
  carta2.innerHTML += cartaCasa.numero + " de " + cartaCasa.palo;
  console.log(cartaCasa);
  console.log(valorCasa);
  if (valorC < valorCasa) {
    puntuacionCartas.innerHTML = valorC;
    puntuacionCartas2.innerHTML = valorCasa;
    mensajeEstado.innerHTML = "Has perdido";
    botonCarta.disabled = true;
    plantarse.disabled = true;
    totalPerdidas++;
    perdidas.innerHTML = totalPerdidas;
  } else if (valorC > valorCasa) {
    puntuacionCartas.innerHTML = valorC;
    mensajeEstado.innerHTML = "Has ganado";
    botonCarta.disabled = true;
    plantarse.disabled = true;
    totalGanadas++;
    ganadas.innerHTML = totalGanadas;
  } else {
    puntuacionCartas.innerHTML = valorC;
    mensajeEstado.innerHTML = "Has empatado";
    botonCarta.disabled = true;
  }
});
botonReset.addEventListener("click", () => {
  if (juego.sistema == 1) {
    juego = new Juego(normas);
    juego.sistema = 1;
  } else {
    juego = new Juego(normas);
    juego.sistema = 2;
  }
  botonCarta.disabled = false;
  plantarse.disabled = false;
  mensajeEstado.innerHTML = " ";
  puntuacionCartas.innerHTML = " ";
  contadorCartas.innerHTML = " ";
  carta.innerHTML = " ";
});
