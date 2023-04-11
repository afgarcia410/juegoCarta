class juego{
    game(){
        for (let index = 0; index < 5; index++) {
        var resultado = azar() + azar();
        var prueba = document.getElementById("prueba");
        var win = document.getElementById("ganada");
        var winn = rondaG();
        var perd = document.getElementById("perdido");
        var perdd = rondaP();
        var boton = (document.getElementById("button").onclick = function () {
          reloadPage();
        });
        if (resultado >= 8) {
          console.log(resultado + ". Has perdido");
          prueba.innerHTML += resultado + ". Has perdido<br>";
        } else if (resultado == 7.5) {
          console.log(resultado + ".Has llegado a 7 y medio");
          prueba.innerHTML += resultado + "<br>";
        } else {
          console.log(resultado);
          prueba.innerHTML += resultado + "<br>";
          win.innerHTML += winn;
          perd.innerHTML += perdd;
        }
      }
    }
}