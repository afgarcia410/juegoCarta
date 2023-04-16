import { Carta } from "./carta.js";
class Baraja {
  constructor() {
    this.baraja = [];
    let palosBaraja = ["Bastos", "Copas", "Espadas", "Oros"];
    let numerosBaraja = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

     /*
    for (let i = 0; i < palosBaraja.length; i++) {
      for (let j = 0; j < numerosBaraja.length; j++) {
        this.baraja.push(new Carta(i, j));
      }
    }*/
    palosBaraja.forEach((palos) => {
      numerosBaraja.forEach((numeros) => {
        this.baraja.push(new Carta(palos, numeros));
      });
    });
  }
  
}
let barajass = new Baraja();
console.log(barajass);
export { Baraja };
