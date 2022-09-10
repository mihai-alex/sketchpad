let mouseTrailType = normalButtonEventFunc;  // variable that contains trail style func

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
    e.target.style.cssText += mouseTrailType();
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

function resetButtonSelected() {
    document.getElementById("random").style.color = "black";
    const buttons = Array.from(document.getElementsByClassName("btn"));
    buttons.forEach(button => {
        button.style.cssText = "background-color: whitesmoke;";
    });
}

function getRandomRgb() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
}

function getRandomRgbBackgroundColor() {
    let randomRgb = getRandomRgb();
    return `background-color: ${randomRgb};`;
}

function normalButtonEventFunc() {
    resetButtonSelected();
    document.getElementById("normal").style.cssText = "background-color: lightgrey;";
    mouseTrailType = () => "background-color: black;";
}

function randomButtonEventFunc() {
    resetButtonSelected();
    document.getElementById("random").style.cssText = "background-color: lightgrey;";
    let randomRgb = getRandomRgb();
    let randomRgbBackgroundColor = `background-color: ${randomRgb};`;
    mouseTrailType = () => randomRgbBackgroundColor;
    document.getElementById("random").style.color = randomRgb;
}

function rainbowButtonEventFunc() {
    resetButtonSelected();
    document.getElementById("rainbow").style.cssText = "background-color: lightgrey;";
    mouseTrailType = getRandomRgbBackgroundColor;
}

function shadeButtonEventFunc(event) {
    resetButtonSelected();
    document.getElementById("shade").style.cssText = "background-color: lightgrey;";
    mouseTrailType = () => "background-color: black;";
}

function eraserButtonEventFunc() {
    resetButtonSelected();
    document.getElementById("eraser").style.cssText = "background-color: lightgrey;";
    mouseTrailType = () => "background-color: white;";
}

function resetButtonEventFunc() {
    const squareDivs = Array.from(document.getElementsByClassName("square-div"));
    squareDivs.forEach(div => {
        div.style.backgroundColor = "white";
    });
}

function addButtonEventListeners() {
    const normal = document.getElementById("normal");
    const random = document.getElementById("random");
    const rainbow = document.getElementById("rainbow");
    const shade = document.getElementById("shade");
    const eraser = document.getElementById("eraser");
    const reset = document.getElementById("reset");
    normal.addEventListener("click", normalButtonEventFunc);
    random.addEventListener("click", randomButtonEventFunc);
    rainbow.addEventListener("click", rainbowButtonEventFunc);
    shade.addEventListener("click", shadeButtonEventFunc);
    eraser.addEventListener("click", eraserButtonEventFunc);
    reset.addEventListener("click", resetButtonEventFunc);
}

function removeButtonEventListeners() {
    const normal = document.getElementById("normal");
    const random = document.getElementById("random");
    const rainbow = document.getElementById("rainbow");
    const shade = document.getElementById("shade");
    const eraser = document.getElementById("eraser");
    normal.removeEventListener("click", normalButtonEventFunc);
    random.removeEventListener("click", rainbowButtonEventFunc);
    rainbow.removeEventListener("click", randomButtonEventFunc);
    shade.removeEventListener("click", shadeButtonEventFunc);
    eraser.removeEventListener("click", eraserButtonEventFunc);
    reset.removeEventListener("click", resetButtonEventFunc);
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
    addButtonEventListeners();
    document.getElementById("normal").style.cssText = "background-color: lightgrey;";
    createGrid(defaultGridSize);
    sizeSliderOnChange();
}

app();
