class Carta {
  constructor(palos, numeros) {
    this.palo = palos;
    this.numero = numeros;
    //this.valores = valor;
  }
  mostrarCarta(){
    return console.log(this.numero+" de "+this.palo);
  }
}
export  {Carta}; 
