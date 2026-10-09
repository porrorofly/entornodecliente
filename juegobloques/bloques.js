const divContainer = document.getElementById('container')
const inputBlockNumber = document.getElementById('block-number')

function createBlocks() {
    let numBlocks = inputBlockNumber.value;
    for (let i = 0; i < numBlocks; i++) {
        //    const block = document.createElement('div')
        createBlock()
    }
}

function createBlock(color) {
    const block = document.createElement('div')
    block.classList.add('block', color)
    divContainer.appendChild(block)
}