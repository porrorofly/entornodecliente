// Mike
document.addEventListener("DOMContentLoaded", () => {
    const vehiculo=document.getElementById("vehiculo")
        VEHICULOS.forEach(prod => {
        const opcion = document.createElement("option");
        opcion.value = prod.id;
        opcion.textContent = prod.nombre + '(Máx ' + prod.capacidad + ' kg)';
        vehiculo.append(opcion);
    });
})