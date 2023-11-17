const listOfNumbers = [0,1,2,3,4,5,6,7,8,9];

const display = document.querySelector("#display");
const buttons = document.querySelector("#buttons");

let usedDecimal = false;
let removeZeroBool = true;
let expression = {
    firstNumber: "none",
    secondNumber: "none",
    operation: "+"
};

buttons.addEventListener("click",function(event) {
    let target = event.target;
    

    if (target.textContent === "." && usedDecimal === false) {
        removeZero();
        addDecimal();
    }
    else if (listOfNumbers.includes(+target.textContent)) {
        removeZero();
        display.textContent += target.textContent;
    }
    switch (target.classList[0]) {
        case "clear":
            clearEverything();
            break;

        case "plus-minus":
            removeOrAddMinus();
            break;

        case "percent":
            break;

        case "division":
            setExpression("/");
            break;

        case "multiplication":
            setExpression("*");
            break;

        case "subtraction":
            setExpression("-");
            break;

        case "addition":
            setExpression("+");
            break;

        case "equals":
            //calculate();
    }
    
});


function clearEverything() {
    display.textContent = 0;
    expression = {
        firstNumber: "none",
        secondNumber: "none",
        operation: "+"
    };
    usedDecimal = false;
    removeZeroBool = true;
}

function clear() {
    display.textContent = 0;
    usedDecimal = false;
    removeZeroBool = true;
}

function removeZero() {
    if (removeZeroBool) {
        display.textContent = "";
        removeZeroBool = false;
    }
}

function addDecimal() {
    if (display.textContent === ""){
        display.textContent = "0.";
    }
    else {
        display.textContent += ".";
    }
    usedDecimal = true;
}


function removeOrAddMinus() {
    if (removeZeroBool === true){
        return;
    }
    else if (display.textContent === "0.") {
        clear();
    }
    else if (display.textContent.includes("-")) {
        display.textContent = display.textContent.substring(1);
    }
    else {
        display.textContent = "-"+display.textContent;
    }
}

function setExpression(operation) {
    
    
}

function calculate() {
    
}