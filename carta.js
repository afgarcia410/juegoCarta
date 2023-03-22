class carta {
  constructor(elemt) {
    let baraja = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];
    this.mesa = [];
    for (let index = 0; index < baraja.length; index++) {
      let valorNum = 0;
      if (
        baraja[index] == 10 ||
        baraja[index] == 11 ||
        baraja[index] == 12
      ) {
        valorNum = 0.5;
      } else {
        valorNum = baraja[index + 1];
      }
      let mostarCarta = {
        valor: baraja[index + 1],
        valorNumero: valorNum,
      };
      this.mesa.push(mostarCarta);
    }
  }
}
//AQUI FUNCIONA
function azar() {
  let baraja = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];
  random = Math.floor(Math.random() * baraja.length);
  if (baraja[random] == 10 || baraja[random] == 11 || baraja[random] == 12) {
    return (baraja[random] = 0.5);
  } else {
    return baraja[random];
  }
}
function reloadPage(){
    window.location.reload();
}
function rondaG(){
    var resultado = azar() + azar();
    var contG= 0;
    if(resultado<=7.5){
       return contG++;
    }
}
function rondaP(){
    var resultado = azar() + azar();
    var contP= 0;
    if(resultado>=8){
        contP++;
    }
}
for (let index = 0; index < 20; index++) {
  var resultado = azar() + azar();
  var prueba = document.getElementById("prueba");
  var win = document.getElementById("ganada");
  var winn= rondaG();
  var boton = document.getElementById("button").onclick = function() {reloadPage()};
  if (resultado >= 8) {
    console.log(resultado + ". Has perdido");
    prueba.innerHTML +=resultado+'. Has perdido<br>';
  } else if (resultado == 7.5) {
    console.log(resultado + ".Has llegado a 7 y medio");
    prueba.innerHTML +=resultado+'<br>';
  } else {
    console.log(resultado);
    prueba.innerHTML +=resultado+'<br>';
    win.innerHTML +=winn;
  }
  
}
