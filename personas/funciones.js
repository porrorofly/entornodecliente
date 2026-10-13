function buscarPersonaPorId(personas, id) {
    return personas.find(persona => persona.id === id)
}

function filtrarPersonasPorEstudios(personas, estudios) {
    return personas.filter(persona => persona.estudios === estudios)
}

function filtrarPersonasPorEdad(personas, minEdad, maxEdad) {
    return personas.filter(persona => minEdad <= persona.edad && persona.edad <= maxEdad)
}

function filtrarPersonaPorInteres(personas, interes) {
    return personas.filter(persona => persona.intereses.includes(interes))
}

function nombres(personas) {
    return personas.map(persona => persona.nombre)
}

function mediaEdad(personas) {
    edades = [...personas.map(persona => persona.edad)]
    contador = 0
    media = 0
    for (i = 0; i < edades.length; i++) {
        media = media + edades[i]
        contador = contador + 1
    }
    return (media / contador)

}

function intereses(personas) {
    interes = [...personas.map(persona => persona.intereses)]
    array = []
    for (i = 0; i < interes.length; i++) {
        for (e = 0; e < interes[i].length; e++) {
            if (!array.includes(interes[i][e])) {
                array.push(interes[i][e])
            }
        }
    }
    return array
}
/* 
function intereses(personas) {
    const todosLosIntereses = personas.flatMap(persona => persona.intereses);
    return [...new Set(todosLosIntereses)];
} */
function insertarPersona(personas, id, nombre, edad, estudios, intereses) {
    personas.push({
        id,
        nombre,
        edad,
        estudios,
        intereses
    })
}

function eliminarPersona(personas, id) {
    eliminando = buscarPersonaPorId(personas, id)
    if (eliminando) {
        let indice = personas.indexOf(eliminando)
        personas.splice(indice, 1)
    }
}