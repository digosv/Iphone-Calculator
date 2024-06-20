const display = document.querySelector(".display")
const button = document.querySelectorAll("button")

let firstNumber = "";
let secondNumber = "";
let operator = "";
let resultDisplayed = false;

function calculate(a, b, operator) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch(operator) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return a / b;
        default: return 0;
    }
}

button.forEach(b => {
    b.addEventListener("click", function() {
        const value = b.textContent.trim();

        if(value == "AC" || value == "C"){
            display.textContent = "";   
            firstNumber = "";
            secondNumber = "";
            operator = "";
            resultDisplayed = false;
        }else if(value == "="){
            if(firstNumber && operator && display.textContent){
                secondNumber = display.textContent;
                display.textContent = calculate(firstNumber, secondNumber, operator);
                firstNumber = display.textContent;
                secondNumber = "";
                operator = "";
                resultDisplayed = true;
            }
           
        }else if(["+", "-", "*", "/"].includes(value)){
            if(firstNumber && operator && display.textContent){
                secondNumber = display.textContent;
                display.textContent = calculate(firstNumber, secondNumber, operator);
                firstNumber = display.textContent;
                secondNumber = "";
                operator = value;
                resultDisplayed = false;
            }else {
                firstNumber = display.textContent;
                operator = value;
                resultDisplayed = true;
            }
        }else if(["+/-"].includes(value)){
            if(display.textContent){
                display.textContent = (parseFloat(display.textContent) * -1).toString();
            }
        }else {
            if(resultDisplayed){
                display.textContent = "";
                resultDisplayed = false;
            }
            display.textContent += value;
        }
    })
})