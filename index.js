// Pulls user's input, prompts user if they are out of input bounds, and calls createGrid()
// function to build the grid //
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

// Clears existing grid and then creates new grid based on user's input //
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
    // Gets elements by class name, iterates through the list, and applies hover effect for the mouseover event //
    let hovCell = document.getElementsByClassName("cell");
    for (let i = 0; i < hovCell.length; i++) {
        hovCell[i].addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "black";
        });
    }
}