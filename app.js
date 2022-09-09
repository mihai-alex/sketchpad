const gridDimension = 16;

function createGrid(dim) {
    const container = document.getElementById("grid-container");
    for (let row = 0; row < dim; row++) {
        for (let col = 0; col < dim; col++) {
            let squareDiv = document.createElement("div");
            squareDiv.className = "square-div";
            container.appendChild(squareDiv);
        }
    }
}

createGrid(gridDimension);
