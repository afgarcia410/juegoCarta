import { Carta } from "./carta.js";

class Baraja {
  constructor(reglas) {
    let baraja = [];
    this.palo = ["Oros", "Copas", "Espadas", "Bastos"];

    this.palo.forEach((element) => {
      for (let i = 1; i <= 12; i++) {
        baraja.push(new Carta(i, element));
      }
    });

    let filtro = baraja.filter((carta) => {
      reglas.descartes.forEach((element) => {
        if (carta.numero == element.numero) {
          carta.correcta = false;
        }
      });
    });
    this.baraja = baraja.filter((carta) => carta.correcta == true);
    console.log(this.baraja);
  }
  reparteCarta() {
    for (let i = this.baraja.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.baraja[i], this.baraja[j]] = [this.baraja[j], this.baraja[i]];
    }
    return this.baraja.splice(0, 1)[0];
  }
}

export { Baraja };
