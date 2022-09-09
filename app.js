function createGrid(dim) {
    const container = document.getElementById("grid-container");
    const squareDivWidth = `${container.clientWidth / dim - 1}px`;
    const squareDivHeight = `${container.clientHeight / dim - 1}px`;
    for (let row = 0; row < dim; row++) {
        for (let col = 0; col < dim; col++) {
            let squareDiv = document.createElement("div");
            squareDiv.className = "square-div";
            squareDiv.style.width = squareDivWidth;
            squareDiv.style.height = squareDivHeight;
            addEventListenersToGrid(squareDiv);
            container.appendChild(squareDiv);
        }
    }
}

function destroyGrid() {
    const squareDivs = document.getElementsByClassName("square-div");
    let squareDivsArray = Array.from(squareDivs);
    squareDivsArray.forEach(squareDiv => {
        removeEventListenersFromGrid(squareDiv);
        squareDiv.parentElement.removeChild(squareDiv);
    });
}

function gridHoverEvent(e) {
    e.target.style.backgroundColor = "black";
}

function mouseOverEventFunction(e) {
    if (e.buttons == 1) {
        gridHoverEvent(e);
    }
}

function addEventListenersToGrid(squareDiv) {
    squareDiv.addEventListener("mousedown", gridHoverEvent);
    squareDiv.addEventListener("mouseover", mouseOverEventFunction);
}

function removeEventListenersFromGrid(squareDiv) {
    squareDiv.removeEventListener("mousedown", gridHoverEvent);
    squareDiv.removeEventListener("mouseover", mouseOverEventFunction);
}

function sizeSliderOnChange() {
    const slider = document.getElementById("size-slider");
    const oldSliderValue = slider.value;
    slider.onchange = () => {
        destroyGrid();
        createGrid(slider.value);
    };
    slider.oninput = () => {
        const sizePara = document.getElementById("current-size");
        sizePara.textContent = "current size: " + slider.value + 'x' + slider.value;
    }
}

function app() {
    const defaultGridSize = document.getElementById("size-slider").value;
    const sizePara = document.getElementById("current-size");
    sizePara.textContent = "current size: " + defaultGridSize + 'x' + defaultGridSize;
    createGrid(defaultGridSize);
    sizeSliderOnChange();
}

app();
