import { Carta } from "./carta.js";
class Baraja {
  constructor() {
    this.baraja = [];
    const palosBaraja = ["Bastos", "Copas", "Espadas", "Oros"];
    const numerosBaraja = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
     /*
    for (let i = 0; i < palosBaraja.length; i++) {
      for (let j = 0; j < numerosBaraja.length; j++) {
        this.baraja.push(new Carta(i, j));
      }
    }*/
    const filtroNumero = numerosBaraja.filter((valor) =>{
      return valor !=8 && valor !=9;
    });
    palosBaraja.forEach((palos) => {
      filtroNumero.forEach((numeros) => {
        this.baraja.push(new Carta(palos, numeros));
      });
    });
    
  }
}
let barajas = new Baraja();
console.log(barajas);
export { Baraja };
