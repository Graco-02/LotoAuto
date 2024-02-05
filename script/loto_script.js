let identificador_timeup;
let identificador_interval;
let bolos = [];

function iniciar_juego() {
  identificador_timeup = setTimeout(mostrar_resultado, 1000);
  identificador_interval = setInterval(set_barajar_numeros, 15);
}

function set_barajar_numeros(params) {
  let bolo1 = document.getElementById("num1");
  let bolo2 = document.getElementById("num2");
  let bolo3 = document.getElementById("num3");
  let bolo4 = document.getElementById("num4");
  let bolo5 = document.getElementById("num5");
  let bolo6 = document.getElementById("num6");

  bolos = [];

  bolo1.innerHTML = get_randon_value();
  bolos.push(bolo1.innerHTML);

  bolo2.innerHTML = get_randon_value();
  bolos.push(bolo2.innerHTML);

  bolo3.innerHTML = get_randon_value();
  bolos.push(bolo3.innerHTML);

  bolo4.innerHTML = get_randon_value();
  bolos.push(bolo4.innerHTML);

  bolo5.innerHTML = get_randon_value();
  bolos.push(bolo5.innerHTML);

  bolo6.innerHTML = get_randon_value();
  bolos.push(bolo6.innerHTML);
  bolos.sort(function (a, b) {
    return a - b;
  });
  bolo1.innerHTML = bolos[0];
  bolo2.innerHTML = bolos[1];
  bolo3.innerHTML = bolos[2];
  bolo4.innerHTML = bolos[3];
  bolo5.innerHTML = bolos[4];
  bolo6.innerHTML = bolos[5];
}

function get_randon_value() {
  var valor = Math.floor(Math.random() * 39);
  while (valor <= 0 || bolos.includes(valor)) {
    valor = Math.floor(Math.random() * 39);
  }

  return valor;
}

function mostrar_resultado(params) {
  /* bolo1.innerHTML = bolos[1];
  bolo2.innerHTML = bolos[2];
  bolo3.innerHTML = bolos[3];
  bolo4.innerHTML = bolos[4];
  bolo5.innerHTML = bolos[5];
  bolo6.innerHTML = bolos[6];*/

  clearTimeout(identificador_timeup);
  clearInterval(identificador_interval);
}
