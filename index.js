const container = document.querySelector("div");

function createGrid(num) {
    for (let i = 0; i < num; i++) {
        const div = document.createElement("div");
        container.appendChild(div);
    }
}

createGrid(16);
