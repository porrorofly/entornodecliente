let respuesta = document.createElement("h2");
const imagen = document.querySelector("img");
let dadoAnterior = 1;
imagen.src = `images/dice${dadoAnterior}.gif`;
function play() {
    const apuestaInput = document.getElementById("apuesta");
    const apuesta = parseInt(apuestaInput.value);
    const dineroDisponibleElement = document.getElementById("dinero-disponible");
    
    
    let dineroDisponible = parseInt(dineroDisponibleElement.textContent);

    if (apuesta > dineroDisponible || isNaN(apuesta) || apuesta <= 0) {
        respuesta.textContent = "No tienes suficiente dinero para apostar esa cantidad o lo que introduces no es válido para una apuesta.";
        document.getElementById("resultado-texto").textContent = respuesta.textContent;
        return;
    }

    const resultado = Math.floor(Math.random() * 6) + 1;
    imagen.src = `images/dice${resultado}.gif`;

    if (resultado > dadoAnterior) {
        dineroDisponible += apuesta;
        respuesta.textContent = `¡Felicidades! Has ganado ${apuesta} monedas.`;
    } else {
        dineroDisponible -= apuesta;
        respuesta.textContent = `Lo siento, has perdido ${apuesta} monedas.`;
    }

    dineroDisponibleElement.textContent = dineroDisponible;
    document.getElementById("resultado-texto").textContent = respuesta.textContent;
    if (dineroDisponible===0){
        respuesta.textContent=`Game over! Te has quedado sin monedas.Se reinicia el juego`;
        document.getElementById("resultado-texto").textContent = respuesta.textContent;
        location.reload(true);

    }
}

function playMenor(){
      const apuestaInput = document.getElementById("apuesta");
    const apuesta = parseInt(apuestaInput.value);
    const dineroDisponibleElement = document.getElementById("dinero-disponible");
    
    
    let dineroDisponible = parseInt(dineroDisponibleElement.textContent);

    if (apuesta > dineroDisponible || isNaN(apuesta) || apuesta <= 0) {
        respuesta.textContent = "No tienes suficiente dinero para apostar esa cantidad o lo que introduces no es válido para una apuesta.";
        document.getElementById("resultado-texto").textContent = respuesta.textContent;
        return;
    }

    const resultado = Math.floor(Math.random() * 6) + 1;
    imagen.src = `images/dice${resultado}.gif`;

    if (resultado < dadoAnterior) {
        dineroDisponible += apuesta;
        respuesta.textContent = `¡Felicidades! Has ganado ${apuesta} monedas.`;
    } else {
        dineroDisponible -= apuesta;
        respuesta.textContent = `Lo siento, has perdido ${apuesta} monedas.`;
    }

    dineroDisponibleElement.textContent = dineroDisponible;
    document.getElementById("resultado-texto").textContent = respuesta.textContent;
    if (dineroDisponible===0){
        alert(`Game over! Te has quedado sin monedas.Se reinicia el juego`);
        location.reload();
    }
}

function playIgual(){
      const apuestaInput = document.getElementById("apuesta");
    const apuesta = parseInt(apuestaInput.value);
    const dineroDisponibleElement = document.getElementById("dinero-disponible");
    
    
    let dineroDisponible = parseInt(dineroDisponibleElement.textContent);

    if (apuesta > dineroDisponible || isNaN(apuesta) || apuesta <= 0) {
        respuesta.textContent = "No tienes suficiente dinero para apostar esa cantidad o lo que introduces no es válido para una apuesta.";
        document.getElementById("resultado-texto").textContent = respuesta.textContent;
        return;
    }

    const resultado = Math.floor(Math.random() * 6) + 1;
    imagen.src = `images/dice${resultado}.gif`;

    if (resultado == dadoAnterior) {
        dineroDisponible += apuesta;
        respuesta.textContent = `¡Felicidades! Has ganado ${apuesta} monedas.`;
    } else {
        dineroDisponible -= apuesta;
        respuesta.textContent = `Lo siento, has perdido ${apuesta} monedas.`;
    }

    dineroDisponibleElement.textContent = dineroDisponible;
    document.getElementById("resultado-texto").textContent = respuesta.textContent;
    if (dineroDisponible===0){
        
        alert(`Game over! Te has quedado sin monedas.Se reinicia el juego`);
        location.reload();
    }
    
}