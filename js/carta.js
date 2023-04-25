class Carta {
  constructor(palos, numeros) {
    this.palo = palos;
    this.numero = numeros;
    //this.valores = valor;
  }
  mostrarCarta(){
    return console.log(this.numero+" de "+this.palo);
  }
  getValorNumero(){
    if(this.numero === 10 && this.numero === 11 && this.numero === 12){
      return 0.5;
    } else{
      return this.numero;
    }
  }
}
export  {Carta}; 
