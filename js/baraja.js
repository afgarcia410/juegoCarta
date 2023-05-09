import { Carta } from "./carta.js";
class Baraja {
  constructor() {
    this.baraja = [];
    const palosBaraja = ["Bastos", "Copas", "Espadas", "Oros"];
    const numerosBaraja = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    
    const filtroNumero = numerosBaraja.filter((valor) =>{
      return valor !=8 && valor !=9;
    });
    palosBaraja.forEach((palos) => {
      filtroNumero.forEach((numeros) => {
        this.baraja.push(new Carta(palos, numeros));
      });
    });
  }
  
  tomarCarta() {
    for (let i = this.baraja.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.baraja[i], this.baraja[j]] = [this.baraja[j], this.baraja[i]];
    }

    // Extraer la primera carta del mazo
    return this.baraja.splice(0, 1)[0];
    //return this.baraja.splice( Math.floor(Math.random() * (this.baraja.length + 1)),1);
    //return this.baraja.shift();
  }
}
export { Baraja };
