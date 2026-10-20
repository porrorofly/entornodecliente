const divContainer = document.getElementById("container");
const inputBlockNumber = document.getElementById("block-number");
const color = ["blue", "red"];

function createBlocks() {
    let numBlocks = inputBlockNumber.value;
    for (let i = 0; i < numBlocks; i++) {
        //    const block = document.createElement('div')

        createRandomBlock();
    }
}

function createRandomBlock() {
    let random = Math.floor(Math.random() * color.length);
    createBlock(color[random]);
}

function createBlock(color) {
    const block = document.createElement("div");
    block.classList.add("block", color);
    block.onclick = () => {
        let cellList = [block];
        let next = block;
        let previous = block;
        while ((next = next.nextElementSibling) && next.classList.contains(color)) {
            cellList.push(next);
        }
        while (
            (previous = previous.previousElementSibling) &&
            previous.classList.contains(color)
        ) {
            cellList.push(previous);
        }

        if (cellList.length > 2) {
            cellList.forEach((cell) => cell.remove());
            if (divContainer.querySelectorAll(".block").length == 0) {
                alert("Has Ganado");
            }
        }
    };
    if (divContainer.querySelectorAll(".block").length > 100) {
        alert("Has perdido");
    }

    divContainer.appendChild(block);
}
createBlocks(20);
setInterval(createRandomBlock, 100);