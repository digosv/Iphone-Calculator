const display = document.querySelector(".display")
const button = document.querySelectorAll("button")
const ac = document.querySelector(".ac")

let firstNumber = "";
let secondNumber = "";
let operator = "";
let resultDisplayed = false;
let acBool = false;

function calculate(a, b, operator) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch(operator) {
        case "+": return a + b;
        case "-": return a - b;
        case "×": return a * b;
        case "÷": return a / b;
        default: return 0;
    }
}

function updateAcButton(){
    if(display.textContent.length > 0 && display.textContent !== "0"){
        ac.textContent = "C";
        console.log("A")
    }else {
        ac.textContent = "AC";
    }
}

function updateFontSize() {
    const maxFontSize = 2;
    const minFontSize = 1;
    const maxLength = 9;
    const length = display.textContent.length;

    if(length > maxLength){
        const newFontSize = Math.max(minFontSize, maxFontSize - (length - maxLength))
        display.style.fontSize = newFontSize + "em";
    }else {
        display.style.fontSize = maxFontSize + "em";
    }
}

button.forEach(b => {
    b.addEventListener("click", function() {
        const value = b.textContent.trim();

        if(value == "AC" || value == "C"){
            display.textContent = "0";   
            firstNumber = "";
            secondNumber = "";
            operator = "";
            resultDisplayed = false;
            updateAcButton()
        }else if(value == "="){
            if(firstNumber && operator && display.textContent){
                secondNumber = display.textContent;
                display.textContent = calculate(firstNumber, secondNumber, operator);
                firstNumber = display.textContent;
                secondNumber = "";
                operator = "";
                resultDisplayed = true;
                updateAcButton()
            } 
        }else if(["+", "-", "×", "÷"].includes(value)){
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
            updateAcButton()
        }else if(["±"].includes(value)){
            if(display.textContent){
                display.textContent = (parseFloat(display.textContent) * -1).toString();
            }
            updateAcButton()
        }else {
            if(display.textContent === "0" && !resultDisplayed){
                display.textContent = value;
                updateAcButton();
            }else{
                if(resultDisplayed){
                    display.textContent = "";
                    resultDisplayed = false;
                }
                display.textContent += value;
                updateAcButton()
            }
        }
        updateFontSize();
    })
})

