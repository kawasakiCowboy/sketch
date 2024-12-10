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

function pixelCreate(n) {
    for (let j = 1; j <= n; j++ ) {
    let pixelRow = document.createElement("div");
    pixelRow.classList.add("row");
    for (let i = 1; i <= n; i++ ) {
        let pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.addEventListener("mouseover", () => {
            console.log("hover")
            pixel.classList.add("pixel-active");
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
