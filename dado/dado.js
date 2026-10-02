const imagen = document.querySelector("img");
imagen.src = "images/dice6.gif";

function play() {
  let random = Math.floor(Math.random() * 6) + 1;
  imagen.src = "images/dice" + random + ".gif";
}
