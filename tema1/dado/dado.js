const imagen = document.querySelector("img");
imagen.src = "images/dice6.gif";

let respuesta = document.createElement("h2");

function play() {
    const apuestaInput = document.getElementById("apuesta");
    const apuesta = parseInt(apuestaInput.value);
    const dineroDisponibleElement = document.getElementById("dinero-disponible");
    let dineroDisponible = parseInt(dineroDisponibleElement.textContent);

    if (apuesta > dineroDisponible) {
        respuesta.textContent = "No tienes suficiente dinero para apostar esa cantidad.";
        return;
    }

    const resultado = Math.floor(Math.random() * 6) + 1;
    imagen.src = `images/dice${resultado}.gif`;

    if (resultado === 6) {
        dineroDisponible += apuesta;
        respuesta.textContent = `¡Felicidades! Has ganado ${apuesta} monedas.`;
    } else {
        dineroDisponible -= apuesta;
        respuesta.textContent = `Lo siento, has perdido ${apuesta} monedas.`;
    }

    dineroDisponibleElement.textContent = dineroDisponible;
    document.getElementById("resultado-texto").textContent = respuesta.textContent;
}