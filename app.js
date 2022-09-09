const gridDimension = 50;

function createGrid(dim) {
    const container = document.getElementById("grid-container");
    for (let row = 0; row < dim; row++) {
        for (let col = 0; col < dim; col++) {
            let squareDiv = document.createElement("div");
            squareDiv.className = "square-div";
            addEventListenersToGrid(squareDiv);
            container.appendChild(squareDiv);
        }
    }
}

function destroyGrid() {
    const squareDivs = document.getElementsByClassName("square-div");
    let squareDivsArray = Array.from(squareDivs);
    squareDivsArray.forEach(squareDiv => removeEventListenersFromGrid);
}

function gridHoverEvent(e) {
    e.target.style.backgroundColor = "black";
}

function addEventListenersToGrid(squareDiv) {
    squareDiv.addEventListener("mousedown", gridHoverEvent);
    squareDiv.addEventListener("mouseover", e => {
        if (e.buttons == 1) {
            gridHoverEvent(e);
        }
    });
}
function removeEventListenersFromGrid() {
    squareDiv.removeEventListener("mousedown", gridHoverEvent);
    squareDiv.removeEventListener("mouseover", gridHoverEvent);
}

createGrid(gridDimension);
