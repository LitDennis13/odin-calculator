let oppButtons = document.querySelector("#operation-buttons");

let expression = {
    firstNumber: "none",
    secondNumber: "none",
    operation: "+"
};
let typed = false;
let equalSignPressed = false;

oppButtons.addEventListener("click", function(event) {
    let target = event.target;
    if (typed === true) {
        reset = true;
        setNumbers();
        typed = false;
    }
    switch (target.classList[0]) {
        
        case "division":
            equalSignPressed = false;
            highlightSeclected("/");
            expression.operation = "/";
            calculate();
            break;

        case "multiplication":
            equalSignPressed = false;
            highlightSeclected("x");
            expression.operation = "x";
            calculate();
            break;

        case "subtraction":
            equalSignPressed = false;
            highlightSeclected("-");
            expression.operation = "-";
            calculate();
            break;

        case "addition":
            equalSignPressed = false;
            highlightSeclected("+");
            expression.operation = "+";
            calculate();
            break;
        
        case "equals":
            highlightSeclected("none");
            equalSignPressed = true;
            break;
        

    }
    
});

function setNumbers() {
    if (expression.firstNumber === "none") {
        expression.firstNumber = +display.textContent;
    }
    else if (expression.secondNumber === "none") {
        expression.secondNumber = +display.textContent;
        calculate();
        expression.secondNumber = "none";
    }
       

}

function calculate() {
    if (expression.firstNumber === "none") {
        expression.firstNumber = 0;
        return;
    }
    
    else if (expression.secondNumber === "none") {
        return;
    }
    
    switch (expression.operation) {
        case "+":
            display.textContent = expression.firstNumber + expression.secondNumber;
            break;
        case "-":
            display.textContent = expression.firstNumber - expression.secondNumber;
            break;
        case "x":
            display.textContent = expression.firstNumber * expression.secondNumber;
            break;
            
        case "/":
            display.textContent = expression.firstNumber / expression.secondNumber;
            break;

    }
    expression.firstNumber = +display.textContent;
    if (expression.secondNumber === 0 && expression.operation === "/") {
        alert("YOU CANNOT DO THAT!!!!!");
        clear();
    }
    
 }

function highlightSeclected(selected) {
    let buttons = {
        "/": document.querySelector(".division"),
        "x": document.querySelector(".multiplication"),
        "-": document.querySelector(".subtraction"),
        "+": document.querySelector(".addition")
    };
    for (const button in buttons) {
        
        buttons[button].classList.remove("selected");
    }
    if (selected === "none") {
        return;
    }
    buttons[selected].classList.add("selected");
}