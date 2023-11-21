let listOfNumbers = [0,1,2,3,4,5,6,7,8,9];


let display = document.querySelector("#display");
let nonOppButtons = document.querySelector("#non-operation-buttons");


let removedZero = false;
let reset = false;

nonOppButtons.addEventListener("click", function(event) {
    let target = event.target;
    if (equalSignPressed === true) {
        clear();
        equalSignPressed = false;
    }
    if (reset) {
        display.textContent = "0";
        removedZero = false;
        highlightSeclected("none");
        reset = false;
    }
    if (target.textContent === "0" && display.textContent === "0") {
        typed = true;
        return;
    }

    else if (listOfNumbers.includes(+target.textContent)) {
        typed = true;
        removeZero();
        display.textContent += target.textContent;
    }


    else {
        switch (target.classList[0]) {
            case "clear":
                clear();
                break;

            case "plus-minus":
                plus_minus();
                break;
                                
            case "percent":
                percent();
                break;
                                
            case "period":
                decimal();
                break;
        }
    }
});
function removeZero() {
    if (!removedZero) {
        display.textContent = "";
        removedZero = true;
    }
}


function clear() {
    removedZero = false;
    display.textContent = "0";
    expression = {
        firstNumber: "none",
        secondNumber: "none",
        operation: "+"
    };
    
    
    highlightSeclected("none");
}

function plus_minus() {
    if (display.textContent === "0." || +display.textContent === 0) {
        display.textContent = "0";
        removedZero = false;
    }
    else if (display.textContent.charAt(0) === "-") {
        display.textContent = display.textContent.substring(1);
    }
    else {
        display.textContent = "-"+display.textContent;
    }
}

function percent() {
    display.textContent = (+display.textContent / 100);
}

function decimal() {
    if (!display.textContent.includes(".")) {
        display.textContent += ".";
        removedZero = true;
    }
}