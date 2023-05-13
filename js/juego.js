import {Baraja} from "./baraja.js";

class Juego{
    constructor(reglas){
        this.sistema = null;
        this.contador = 0;
        this.suma = [];
        this.baraja = new Baraja(reglas);
        reglas.valores.forEach(element => {
            this.baraja.baraja.forEach(carta =>{
                if(carta.numero == element.numero){
                    carta.valor = element.valor;
                }else{
                    if(carta.valor == null){
                        carta.valor = carta.numero;
                    }
                }
            });
        });
        this.reglas = reglas;
        //console.log(this.baraja.baraja);
    }
    sieteYmedio(carta){
        let resultado = 0; 
        this.suma.push(carta.valor);  
        this.suma.forEach(puntuacion =>{
            resultado += puntuacion;
        });    
        return resultado;
    }
    burro(){
        this.contador++;
        if(this.contador == 13){
            this.contador = 1;
        }
        this.reglas.descartes.forEach(element => {
            if(this.contador == element.numero){
                this.contador++;
            }
        })
        return this.contador;
    }
}

export {Juego}