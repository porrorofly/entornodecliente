const ulListOrigin = document.getElementById('listOrigin')
const ulListDestiny = document.getElementById('listDestiny')


function changeElement(origin, destiny) {
    //seleccionart los seleccionados
    let selectedLis = [...origin.querySelectorAll('.selected')];
    selectedLis.forEach(li => {
        destiny.appendChild(li);
        li.classList.remove('selected')
    });
}

// function changeElementLeft() {
//     //seleccionart los seleccionados
//     let selectedLis = [...ulListDestiny.querySelectorAll('.selected')];
//     selectedLis.forEach(li => {
//         ulListOrigin.appendChild(li);
//         li.classList.remove('selected')
//     });
// }
function changeElementLeft() {
    changeElement(ulListOrigin, ulListDestiny)
}

function changeElementRight() {
    changeElement(ulListDestiny, ulListOrigin)
}

function addSelectableElements() {
    let listLiOrigin = [...ulListOrigin.querySelectorAll('li')];
    listLiOrigin.forEach(li => li.onclick = () => li.classList.toggle('selected'))

}

function init() {
    addSelectableElements();
}
init()