let listOfNumbers = [0,1,2,3,4,5,6,7,8,9];


let display = document.querySelector("#display");
let buttons = document.querySelectorAll(".clear, .plus-minus, .percent, .seven, .eight, .nine, .four, .five, .six, .one, .two, .three, .zero, .period, .equals");
let operationButtons = document.querySelectorAll(".multiplication, .division, .subtraction, .addition");


buttons.addEventListener("click", function(event) {
    let target = event.target;
    console.log(target);
    if (listOfNumbers.includes(+target.textContent)) {
        display.textContent += target.textContent;
    }
});