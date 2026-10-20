// Nivel 1: Selección de Elementos
// El objetivo de este nivel es familiarizarse con querySelector y querySelectorAll y ver los resultados en la consola.

// Seleccionar por ID:
const mainTitle = document.getElementById("main-title");
// Selecciona el <h1> con el id main-title y muéstralo en la consola.
const mainTitleby = document.querySelector("#main-title");

// Selecciona el aside con el id sidebar y muéstralo en la consola.
console.log(document.querySelector("#sidebar"));
const con = document.querySelector("#sidebar");
console.log(con);
// Seleccionar por Clase:
// Selecciona todos los elementos con la clase nav-link y muestra la colección (NodeList) en la consola.
const navl = document.querySelectorAll(".nav-link");
console.log(navl);
// Selecciona la primera tarjeta (.card) que encuentres en la sección de mamíferos y muéstrala en la consola.
const ej5 = document.querySelectorAll("#mammals .card ");
console.log(ej5);
// Seleccionar por Etiqueta:
// Selecciona todos los elementos <p> de la página y muéstralos en la consola.
const ej6 = document.querySelectorAll("p");
console.log(ej6);
// Seleccionar con Selectores Complejos:
// Selecciona todos los <li> que están dentro de la tarjeta del león.
const ej7 = document.querySelectorAll(".card[data-animal-type='land'] li");
console.log(ej7);
// Selecciona el elemento con la clase important que está dentro de la tarjeta del delfín.
const ej8 = document.querySelectorAll(
    ".card[data-animal-type='sea'] .important",
);
console.log(ej8);
// Selecciona todas las tarjetas (.card) que estén dentro de la sección con id mammals.
const ej9 = document.querySelectorAll("#mammals .card ");
console.log(ej9);
// Seleccionar por Atributo:
// Selecciona todas las tarjetas que tengan el atributo data-animal-type="sea".
const ej10 = document.querySelectorAll(".card[data-animal-type='sea']");
console.log(ej10);
// Nivel 2: Modificación de Contenido y Clases/
// Ahora se manipulan los elementos seleccionados.

// Cambiar Contenido:
// Cambia el texto del título principal (#main-title) por "La Gran Aventura Animal".

mainTitle.textContent = "La Gran Aventura Animal ";

// Cambia el texto del enlace "Saber más..." (#more-info-link) por "Obtener más información".
const ej12 = document.getElementById("more-info-link");
ej12.textContent = "Obtener más información";
// Modifica el contenido del footer para que incluya tu nombre.
const ej13 = document.querySelector("footer p");
ej13.textContent = " | Mike";
// Manipular Clases:

// Añade la clase highlight a la sección de aves (#birds).
const ej14 = document.querySelector("section#birds");
ej14.setAttribute = "highlight";
//ej14.className="hightlight"
//ej14.classList.add("Highlight")
// Quita la clase important del <li> "Vista aguda" del águila.
const ej15 = document.querySelector("#birds li.important");
ej15.classList.remove("important");
// Usando toggle, haz que al hacer clic en cualquier tarjeta (.card), se le añada o quite la clase highlight.
// (Pista: necesitarás un bucle para añadir el evento a todas las tarjetas).
//const ej16 = document.querySelectorAll(".card");
//for (let i = 0; i < ej16.length; i++) {
//ej16[i].setAttribute("onClick", "toogleHighlight(' + i + ')");
// ej16[i].setAttribute("onClick", `toogleHighlight ${i}`);
//}

function toogleHighlight(i) {
    /   ej16[i].classList.toogle("highlight"); /;
    console.log(this);
}

// Nivel 3: Creación y Eliminación de Elementos
// En este nivel se añaden y se quitan elementos del DOM.

// Crear y Añadir Elementos:

// Crea un nuevo <h2> con el texto "Reptiles".
const newH2 = document.createElement("h2");
newH2.textContent = "Reptiles";

// Crea una nueva sección con id="reptiles" y la clase category.
const newSection = document.createElement("section");
newSection.id = "reptiles";
newSection.className = "category";
// Añade el <h2> que has creado dentro de la nueva sección.
const newH21 = document.createElement("h2");
newH21.textContent = "Reptiles";
newSection.appendChild(newH21);
// Finalmente, añade esta nueva sección de reptiles al main de la página, justo después de la sección de aves.
const main = document.querySelector("main");
const birdsSection = document.querySelector("#birds");
main.insertBefore(newSection, birdsSection.nextSibling);
// Crear y Añadir una Nueva Tarjeta:
// Dentro de la nueva sección de reptiles, crea un article con la clase card.
newArticle = document.createElement("article");
newArticle.className = "card";
newSection.appendChild(newArticle);
// Dentro de la tarjeta, añade un <h3> con el texto "Serpiente".

// Añade también un párrafo <p> que diga "Reptil sin patas conocido por su sigilo.".

new1 = document.createElement("div");
new1.innerHTML = `<article class="card" data-animal-type="land">
            <h3>Serpiente</h3>
            <p>Reptil sin patas conocido por su sigilo.</p>
            <ul class="features">
              <li class="feature-item important">No tiene patas</li>
              <li class="feature-item">Vista limitada</li>
              <li class="feature-item">Movimiento serpentino</li>
            </ul>
          </article>`;
newArticle.appendChild(new1);

// Eliminar Elementos:
// Selecciona y elimina el aside (#sidebar).
const aside = document.querySelector("aside");
aside.remove();
// Elimina la característica "Gran melena" de la lista de características del león.
//const lionFeature = document.querySelector(".card[data-animal-type='land'] li");

//lionFeature.remove();


const encabezados3 = document.querySelectorAll("article h3");
const leonH3 = [...encabezados3].find((h3) => h3.textContent === "León");
const leonCard = leonH3.parentElement;

const leonFeatures = leonCard.querySelectorAll("ul.features li");
leonFeatures[0].remove(); // Elimina el primer elemento de la lista (Gran melena)

// Nivel 4: Mover Elementos y Eventos
// Se combinan conceptos para reorganizar la página dinámicamente.

// Mover Elementos:
// Mueve la tarjeta del delfín para que aparezca antes que la del león dentro de la sección de mamíferos.
// (Pista: usa insertBefore).
const dolphinCard = leonCard.nextElementSibling;
const cardContainer = leonCard.parentElement;
cardContainer.insertBefore(dolphinCard, leonCard);
//const lionCard = document.querySelector(".card[data-animal-type='land']");
//const mammalsSection = document.querySelector("#mammals");
//mammalsSection.insertBefore(dolphinCard, lionCard);
// Ejercicio Combinado (Bonus):
// Crea un botón button con el texto "Invertir Orden".
function reverse() {
    const sections = [...document.querySelectorAll("section")];
    console.log(sections);
    sections.reverse();
    sections.forEach((section) => {
        main.appendChild(section);
    }, );
}
// Añade este botón justo después del <h1> principal.

// Haz que, al hacer clic en el botón, el orden de las secciones (#mammals y #birds) se invierta.
// Es decir, si Aves está después de Mamíferos, al hacer clic, Aves debería aparecer primero.
// Si se vuelve a hacer clic, deberían volver a su orden original.