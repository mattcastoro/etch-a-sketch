function returnNumber() {
    let input = document.getElementById("userInput").value;
    if (input > 100) {
        alert("Please select a number less than or equal to 100")
    } else if (input < 1) {
        alert("Please select a number greater than 0")
    } else {
        createGrid(input);
    }
}

function createGrid(num) {

    const container = document.querySelector(".container");
    container.replaceChildren();
    
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

// createGrid(10);

