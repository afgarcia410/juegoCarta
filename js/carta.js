class Carta {
  constructor(palo, numero) {
    this.palo = palo;
    this.numero = numero;
  }
  mostrarCarta(){
    return console.log(this.numero+" de "+this.palo);
  }
  getValor(){
    if(this.numero == 10 && this.numero == 11 && this.numero == 12){
      return 0.5;
    } else{
      return this.numero;
    }
  }
}
export  {Carta}; 
