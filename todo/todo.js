const ulTodoList = document.getElementById("todo-list");
const newTaskInput = document.getElementById("new-task");

function buttonInserTask() {
    let newTask = newTaskInput.value.trim();

    if (!newTask) {
        alert("Escribe una tarea válida.");
        return;
    }

    if (!getlistTask().includes(newTask)) {
        insertTask(newTask);
        newTaskInput.value = "";
    } else {
        alert("La tarea ya existe en la lista.");
    }
}

function insertTask(newTask) {
    let li = document.createElement("li");
    li.textContent = newTask;
    li.ondblclick = () => deleteTask(li);
    li.onclick = () => li.classList.toggle("selected");
    ulTodoList.appendChild(li);
}

function deleteTask(task) {
    task.remove();
}

function getlistTask() {
    return [...ulTodoList.querySelectorAll("li")].map((li) => li.textContent);
}

function ordenar() {
    return;
}

function sortTask() {
    let lilistTask = [...ulTodoList.querySelectorAll("li")];

    lilistTask.sort((liA, liB) => liA.textContent.localeCompare(liB.textContent));

    // ulTodoList.innerHTML = ""
    lilistTask.forEach((li) => {
        ulTodoList.appendChild(li);
    });
}

//listTask().sort((a, b) => a.textContent.compareLocaleTo(b.textContent));
function selectall() {
    let all = document.querySelectorAll("li");

    all.forEach((li) => {
        if ("selected") {
            {
                li.classList.add("selected");
            }
        } else {
            li.classList.remove("selected");
        }
    });


}

function dselectall() {
    let all = document.querySelectorAll("li");

    all.forEach((li) => {
        li.classList.remove("selected");
    });
}

function DeleteSelected() {
    let all = document.querySelectorAll("li.selected");
    all.forEach(task => task.remove());
}