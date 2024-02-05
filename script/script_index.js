let contador = 0;
let contador2 = 0;
let identificador_retraso;
let identificador_retraso2;
let respuesta = 0;
let juego_estatus = 0;

function plegar_menu(params) {
  var menu = document.getElementById("menu_desplegable");
  menu.classList.toggle("plegable");
}

function seleccion_menu(params) {
  var menu = document.getElementsByClassName("");
  menu.classList.toggle("plegable");
}

function iniciar_juego() {
  var boton_ini = document.getElementById("boton_jugar");
  boton_ini.classList.toggle("no_visible");

  var opcion1 = document.getElementById("opcion1");
  var opcion2 = document.getElementById("opcion2");
  var opcion3 = document.getElementById("opcion3");

  juego_estatus = 1;

  identificador_retraso2 = setTimeout(iniciando, 3000);
  identificador_retraso = setInterval(barajar, 200);
}

function barajar() {
  var opcion1 = document.getElementById("opcion1");
  var opcion2 = document.getElementById("opcion2");
  var opcion3 = document.getElementById("opcion3");
  opcion1.src = "../imagenes/gorro2.png";
  opcion2.src = "../imagenes/gorro2.png";
  opcion3.src = "../imagenes/gorro2.png";

  if (contador > 2) {
    contador = 0;
  }

  switch (contador) {
    case 0:
      opcion1.src = "../imagenes/oro1.jfif";
      opcion2.src = "../imagenes/gorro2.png";
      opcion3.src = "../imagenes/gorro2.png";
      break;
    case 1:
      opcion1.src = "../imagenes/gorro2.png";
      opcion2.src = "../imagenes/oro1.jfif";
      opcion3.src = "../imagenes/gorro2.png";
      break;
    case 2:
      opcion1.src = "../imagenes/gorro2.png";
      opcion2.src = "../imagenes/gorro2.png";
      opcion3.src = "../imagenes/oro1.jfif";
      break;
  }

  contador++;
}

function iniciando() {
  var opcion1 = document.getElementById("opcion1");
  var opcion2 = document.getElementById("opcion2");
  var opcion3 = document.getElementById("opcion3");
  var mensaje = document.getElementById("mensaje_adivina");
  mensaje.classList.toggle("no_visible");
  opcion1.src = "../imagenes/gorro2.png";
  opcion2.src = "../imagenes/gorro2.png";
  opcion3.src = "../imagenes/gorro2.png";

  respuesta = Math.floor(Math.random() * 3);

  clearTimeout(identificador_retraso2);
  clearInterval(identificador_retraso);
}

function validar_respuesta(respuesta_enviada) {
  var mensaje = document.getElementById("mensaje_adivina");
  var opcion1 = document.getElementById("opcion1");
  var opcion2 = document.getElementById("opcion2");
  var opcion3 = document.getElementById("opcion3");

  if (juego_estatus == 1) {
    if (respuesta_enviada == respuesta) {
      mensaje.innerHTML = "<p> EN HORA BUENA HAS ADIVINADO </p>";
      switch (respuesta_enviada) {
        case 0:
          opcion1.classList.toggle("respuesta_correcta");
          break;
        case 1:
          opcion2.classList.toggle("respuesta_correcta");
          break;
        case 2:
          opcion3.classList.toggle("respuesta_correcta");
          break;
      }
    } else {
      mensaje.innerHTML = "<p> QUE MAL RESPUESTA ERRONEA </p>";
      switch (respuesta_enviada) {
        case 0:
          opcion1.classList.toggle("respuesta_incorrecta");
          break;
        case 1:
          opcion2.classList.toggle("respuesta_incorrecta");
          break;
        case 2:
          opcion3.classList.toggle("respuesta_incorrecta");
          break;
      }
    }
  }
}
