document.addEventListener("DOMContentLoaded", () => {
    botonesPersonas();
});

function limpiarPanel() {
    const campos = document.getElementById("personas")
    if (campos) {
        campos.innerHTML = ""
    }

}

function mostrarNombres(personas) {
    limpiarPanel()
    nombres1 = nombres(personas)
    const ul = document.createElement("ul")
    nombres1.forEach(nombreActual => {
        const li = document.createElement("li");
        li.textContent = nombreActual;
        ul.appendChild(li);
    });
    document.getElementById("personas").appendChild(ul);
}

function botonesPersonas() {
    const nav = document.querySelector("nav");
    if (!nav) return;

    PERSONAS.forEach(persona => {
        const boton = document.createElement("button");
        boton.textContent = persona.nombre;


        boton.onclick = function() {
            mostrarPersonaId(persona.id);
        };

        nav.appendChild(boton);
    });

}

function mostrarPersona(persona) {
    const clase = document.getElementById("personas")
    const divPersona = document.createElement("div")
    divPersona.className = "persona"

    const h2 = document.createElement("h2")
    h2.textContent = `${ persona.nombre }(${ persona.edad })`


    divPersona.appendChild(h2)

    const p = document.createElement("p")
    p.textContent = `${persona.estudios}`
    divPersona.appendChild(p)

    const ul = document.createElement("ul")
    persona.intereses.forEach(interes => {
        const li = document.createElement("li");
        li.textContent = interes;
        ul.appendChild(li);



    });
    const button = document.createElement("button")
    button.textContent = "eliminar"
    button.addEventListener('click', () => {
        eliminar(persona.id);
        mostrarListadoPersonas(PERSONAS)
    });
    divPersona.appendChild(button)
    divPersona.appendChild(ul)
    clase.appendChild(divPersona)
}

function mostrarPersonaId(id) {
    const persona = buscarPersonaPorId(PERSONAS, id)
    if (persona) {
        mostrarPersona(persona)
    }
}

function mostrarListadoPersonas(personas) {
    limpiarPanel()
    personas.forEach(persona => { mostrarPersona(persona); });
}

function crearPersona() {
    let nombreInp = document.querySelector('#formularioPersona input[name="nombre"]')
    let edadInp = document.querySelector('#formularioPersona input[name="edad"]')
    let estudiosInp = document.querySelector('#formularioPersona input[name="estudios"]')
    let interesesInp = document.querySelector('#formularioPersona input[name="intereses"]')
    if (!nombreInp || !edadInp || !estudiosInp || !interesesInp || edadInp.value <= 0) {
        alert("Porfavor,rellene todos los campos")
    } else {
        const id = Math.floor(Math.random() * 99999) + 1;
        const intereses = interesesInp.value.split(`,`).map(i => i.trim()).filter(i => i !== "")
        nombre = nombreInp.value
        edad = edadInp.value
        estudios = estudiosInp.value
        insertarPersona(PERSONAS, id, nombre, edad, estudios, intereses)
        persona = buscarPersonaPorId(PERSONAS, id)
            // PERSONAS.find(persona => persona.id === id)
    }
    nombreInp.value = ""
    edadInp.value = ""
    estudiosInp.value = ""
    interesesInp.value = ""
    limpiarPanel()
    mostrarPersona(persona)
}

function filtrarEdad() {
    limpiarPanel()
    const inputMinima = document.querySelector('input[name="minima"]');
    const inputMaxima = document.querySelector('input[name="maxima"]');
    if (!inputMinima || !inputMaxima) return;


    const min = parseInt(inputMinima.value);
    const max = parseInt(inputMaxima.value);


    if (isNaN(min) || !inputMinima.value || isNaN(max) || !inputMaxima.value) {
        alert("Introduce tanto la edad mínima como la máxima.");
        return;
    }


    const listaFiltrada = filtrarPersonasPorEdad(PERSONAS, min, max);


    mostrarListadoPersonas(listaFiltrada);
}

function eliminar(idElimianr) {
    const index = PERSONAS.findIndex(persona => persona.id === idElimianr);
    if (index !== -1) {
        PERSONAS.splice(index, 1);
    }

}