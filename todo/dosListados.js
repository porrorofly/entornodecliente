function pasarlo() {
    let li = document.createElement("li");
    li.textContent = newTask;
    li.ondblclick = () => deleteTask(li);
    li.onclick = () => li.classList.toggle("selected");
    let li = document.createElement("li");
    li.textContent = newTask;
    li.ondblclick = () => deleteTask(li);
    li.onclick = () => li.classList.toggle("selected");
}