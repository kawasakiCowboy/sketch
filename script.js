// function that appends one div
// function that appends n divs
// function that appends n divs in one div 
// function that appends to a certain node n number of divs each having n number of divs inside
//
//
//

let container = document.querySelector(".container");
let userInput = document.querySelector("#user-input");
let userButton = document.querySelector("#user-button");
let isClicked = false

function pixelCreate(n) {
    for (let j = 1; j <= n; j++ ) {
    let pixelRow = document.createElement("div");
    pixelRow.classList.add("row");
    pixelRow.setAttribute('draggable','false');
    for (let i = 1; i <= n; i++ ) {
        let pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.setAttribute('draggable','false');
        pixel.addEventListener("mousedown", () => {
            isClicked = true;
            event.preventDefault();
        } )
        pixel.addEventListener("mouseup", () => {
            isClicked = false;
            event.preventDefault();
        } )
        pixel.addEventListener("mouseover", () => {
            if (isClicked == true) {
            pixel.classList.add("pixel-active");}
            event.preventDefault();
        } )
        pixelRow.appendChild(pixel);
    }
    container.appendChild(pixelRow);
    }
} 

userButton.addEventListener("click",() => {
    let allPixels = document.querySelectorAll(".pixel");
    let allRows = document.querySelectorAll(".row");
    allPixels.forEach((item) => {
        item.remove();
    })
    allRows.forEach((item) => {
        item.remove();
    })
    pixelCreate(userInput.value);
    userInput.value = "";
    userInput.focus();
    
    
})
