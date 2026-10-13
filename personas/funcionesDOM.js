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

}