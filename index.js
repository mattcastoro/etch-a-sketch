const container = document.querySelector(".container");

function createGrid(num) {
    for (let i = 0; i < num; i++) {
        const div = document.createElement("div");
        div.classList.add("column");
        container.appendChild(div);
        for (let j = 0; j < num; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            div.appendChild(cell);
        }
    }
}

createGrid(60);
