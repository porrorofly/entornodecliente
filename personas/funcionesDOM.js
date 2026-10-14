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
    }
    nombreInp.value = ""
    edadInp.value = ""
    estudiosInp.value = ""
    interesesInp.value = ""
}